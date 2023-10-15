from rest_framework import serializers
from .models import Course, Message, Profile

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'username')

class MessageSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ('id', 'contents', 'time', 'date', 'course', 'author')

    def get_author(self, obj):
        return obj.author.user.username
