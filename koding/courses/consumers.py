from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from rest_framework.renderers import JSONRenderer
from .models import Message, Course
from .serializers import MessageSerializer
import json

class CourseMessagesConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    @database_sync_to_async
    def get_messages(self, course_id):
        messages = Message.objects.filter(course=course_id)
        serializer = MessageSerializer(messages, many=True)
        messages_data = JSONRenderer().render(serializer.data).decode('utf-8')  # Decode bytes to string
        return messages_data

    async def receive(self, text_data):
        course_id = json.loads(text_data)['course_id']
        messages_data = await self.get_messages(course_id)

        # Send the messages_data to the client that sent the message
        await self.send(text_data=messages_data)

        # Broadcast the same messages_data to all connected clients in a group
        await self.channel_layer.group_add(f"course_{course_id}", self.channel_name)
        await self.channel_layer.group_send(
            f"course_{course_id}",
            {
                "type": "chat.message",
                "message": messages_data,
            }
        )

    async def chat_message(self, event):
        messages_data = event["message"]
        await self.send(text_data=messages_data)
