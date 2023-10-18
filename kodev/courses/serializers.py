from rest_framework import serializers
from .models import Course, Message, Profile

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    
    class Meta:
        model = Profile
        fields = '__all__'

    def get_user(self, obj):
         return {
            'id': obj.user.id,
            'username': obj.user.username,
            'name': obj.user.get_full_name(),
            'email': obj.user.email,
        }

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
