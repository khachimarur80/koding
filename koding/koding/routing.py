from django.urls import path
from courses import consumers

websocket_urlpatterns = [
    path('ws/koding', consumers.CourseMessagesConsumer.as_asgi())
]