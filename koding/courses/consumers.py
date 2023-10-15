from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from rest_framework.renderers import JSONRenderer
from .models import Message, Course
from .serializers import MessageSerializer

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
        course_id = text_data
        messages_data = await self.get_messages(course_id)
        print(messages_data)
        await self.send(text_data=messages_data)