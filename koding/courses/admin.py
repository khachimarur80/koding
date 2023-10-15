from django.contrib import admin

from .models import Course, Chapter, Message, Profile

admin.site.register(Course)
admin.site.register(Chapter)
admin.site.register(Message)
admin.site.register(Profile)