from django.shortcuts import render, redirect
from django.http import Http404, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Course, Profile, Message, Chapter
from rest_framework import generics
from .serializers import ItemSerializer, ProfileSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from django.contrib.auth import update_session_auth_hash
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

@api_view(['GET', 'POST'])
def api_theme(request):
    if request.method == 'GET':
        profile = Profile.objects.get(user=request.user)
        return JsonResponse({'data' : profile.theme})

def home(request):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            # Return JSON response for initialization
            if request.user.is_authenticated:
                profile = Profile.objects.get(user=request.user)
                courses = profile.enrolled.all()
                serializer = ItemSerializer(courses, many=True)

                discussions = []
                notifications = []

                for course in courses:
                    messages = Message.objects.filter(course=course)
                    if len(messages) > 0:
                        discussions.append(
                            {
                                'id' : course.id,
                                'title' : course.title,
                                'preview' : messages.order_by('-date', '-time')[0].contents,
                            }
                        )
                        for message in messages:
                            if message.author.user != request.user:
                                notifications.append(
                                    f'{message.author.user.username} at {course.title}'
                                )

                data = {
                    'courses': serializer.data,
                    'discussions': discussions,
                    'notifications': notifications,
                    'authenticated': request.user.is_authenticated,
                }
            else:
                data = {
                    'courses': '',
                    'discussions': '',
                    'notifications': '',
                    'authenticated': request.user.is_authenticated,
                }
            return JsonResponse(data)
        else:
            return render(request, "courses/home.html")
    else:
        return render(request, "courses/home.html")

def settings(request):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            profile = Profile.objects.get(user=request.user)
            print(profile.user.email)
            serializer = ProfileSerializer(profile)
            data = {
                'profile': serializer.data,
            }
            return JsonResponse(data)
        else:
            return render(request, "courses/settings.html")
    else:
        data = json.loads(request.body)
        profile = Profile.objects.get(user=request.user)

        if data.get('username'):
            request.user.username = data['username']
            try:
                request.user.save()
                return JsonResponse({'success': True})
            except Exception as e:
                return JsonResponse({'success': False, 'error': str(e)})

        elif data.get('name'):
            request.user.first_name = data['name']
            try:
                request.user.save()
                return JsonResponse({'success': True})
            except Exception as e:
                return JsonResponse({'success': False, 'error': str(e)})

        elif data.get('email'):
            request.user.email = data['email']
            try:
                request.user.save()
                return JsonResponse({'success': True})
            except Exception as e:
                return JsonResponse({'success': False, 'error': str(e)})

        elif data.get('profile_image'):
            print (1)
            return JsonResponse({success: True})

        elif data.get('skillLevel'):
            profile.skill_level = data['skillLevel']
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('skills'):
            profile.skills = data['skills']
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('dark'):
            profile.theme = data['dark']=='true'
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('newPassword'):
            newPassword = data['newPassword']
            newPasswordConfirmation = data['newPasswordConfirmation']
            oldPassword = data['oldPassword']

            user = request.user
            if not user.check_password(oldPassword):
                return JsonResponse({'success': False, 'message': 'Old password is incorrect'})

            if newPassword != newPasswordConfirmation:
                return JsonResponse({'success': False, 'message': 'New passwords do not match'})

            user.set_password(newPassword)
            user.save()

            update_session_auth_hash(request, user)

            return JsonResponse({'success': True, 'message': 'Password changed successfully'})

        elif data.get('github'):
            profile.github = data['github']
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('instagram'):
            profile.instagram = data['instagram']
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('linkedin'):
            profile.linkedin = data['linkedin']
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('discord'):
            profile.discord = data['discord']
            profile.save()
            return JsonResponse({'success': True})

        elif data.get('delete'):
            user = request.user
            user.delete()
            return JsonResponse({'success': True})

        elif data.get('reset'):
            user = request.user

            try:
                profile = user.profile
                profile.delete()
            except Profile.DoesNotExist:
                pass

            new_profile = Profile(user=user)
            new_profile.save()

            return JsonResponse({'success': True, 'message': 'User reset'})

        else:
            return render(request, "courses/settings.html")

def browse(request):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            courses = Course.objects.all()
            serializer = ItemSerializer(courses, many=True)

            data = {
                'courses': serializer.data,
            }
            
            return JsonResponse(data)
        else:
            return render(request, "courses/browse.html")
    else:
        return render(request, "courses/browse.html")

def create(request):
    context = {
    }
    return render(request, "courses/create.html", context)

def account(request):
    context = {
    }
    return render(request, "courses/account.html", context)

def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            return JsonResponse({'error_message': 'Invalid login credentials'})
    else:
        return render(request, 'courses/login.html')

def logout_view(request):
    logout(request)
    return redirect('home')

def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = UserCreationForm(data)
        
        if form.is_valid():
            user = form.save()
            print(form.cleaned_data)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(request, username=username, password=password)
            login(request, user)
            
            return JsonResponse({'success': True})
        else:
            errors = form.errors.as_json()
            print(errors)
            return JsonResponse({'success': False, 'errors': errors})
    else:
        form = UserCreationForm()
    return render(request, 'courses/signup.html', {'form': form})


def chapter(request, course_id, chapter_index):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            profile = Profile.objects.get(user=request.user)
            chapters = Chapter.objects.filter(course=course_id)

            chapter = chapters[chapter_index]
            data = {
                'chapter': chapter.title,
                'contents': chapter.content,
                'completed': chapter.completed,
                'chapterNum': chapter_index,
                'final': len(chapters)==(chapter_index+1),
            }
            return JsonResponse(data)
        else:
            return render(request, "courses/chapter.html")
    else:
        data = json.loads(request.body)

        if data.get('completed'):
            chapters = Chapter.objects.filter(course=course_id)
            chapter = chapters[chapter_index]

            completed = data['completed']=='true'
            chapter.completed = completed

            chapter.save()

            return JsonResponse({'success': True})

        else:
            return render(request, "courses/chapter.html")

def course(request, course_id):
    course = Course.objects.get(id=course_id)
    profile = Profile.objects.get(user=request.user)

    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            title = course.title
            introduction = course.introduction

            chapters = [chapter.title for chapter in Chapter.objects.filter(course=course)]

            comments = len(Message.objects.filter(course=course))
            created = course.date.strftime('%B %d, %Y')

            completion = 0

            if len(chapters):
                completed = len(Chapter.objects.filter(course=course, completed=True))
                completion += (completed/len(chapters))*100

            data = {
                'title': title,
                'introduction': introduction,
                'index': chapters,
                'liked': profile.liked.filter(pk=course.pk).exists(),
                'likes': course.liked.count(),
                'disliked': profile.disliked.filter(pk=course.pk).exists(),
                'dislikes': course.disliked.count(),
                'comments': comments,
                'course_id': course_id,
                'created': created,
                'enrolled': profile.enrolled.filter(pk=course.pk).exists(),
                'completion' : completion,
            }
            return JsonResponse(data)
        else:
            return render(request, "courses/course.html")
    else:
        data = json.loads(request.body)

        if data.get('like'):
            like = data['like']=='true'
            if like:
                profile.liked.add(course)
                profile.disliked.remove(course)
            else:
                profile.liked.remove(course)

            likes = course.liked.count()
            dislikes = course.disliked.count()

            course.save()
            profile.save()

            return JsonResponse({'likes': likes,'dislikes': dislikes})

        elif data.get('dislike'):
            dislike = data['dislike']=='true'
            if dislike:
                profile.disliked.add(course)
                profile.liked.remove(course)
            else:
                profile.disliked.remove(course)

            likes = course.liked.count()
            dislikes = course.disliked.count()

            course.save()
            profile.save()

            return JsonResponse({'dislikes': dislikes,'likes': likes})

        elif data.get('enrolled'):
            enrolled = data['enrolled']=='true'

            if enrolled:
                profile.enrolled.add(course)
            else:
                profile.enrolled.remove(course)

            return JsonResponse({'success': True})

        else:
            return render(request, "courses/course.html")


def discussion(request):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            courses = Course.objects.all()
            course_id = request.GET.get('course')
            discussion = None

            discussions = []

            for course in courses:
                messages = Message.objects.filter(course=course)
                if len(messages) > 0:
                    if str(course.id)==course_id:
                        discussion = {
                            'id' : course.id,
                            'title' : course.title,
                        }
                    discussions.append(
                        {
                            'id' : course.id,
                            'title' : course.title,
                        }
                    )

            data = {
                'discussions': discussions,
                'user': request.user.username,
                'course_id': course_id,
                'discussion': discussion,
            }
            
            return JsonResponse(data)
        else:
            return render(request, "courses/discussion.html")
    else:
        data = json.loads(request.body)

        if data.get('message'):
            course = Course.objects.get(id=data['course_id'])
            profile = Profile.objects.get(user=request.user)

            message = Message()
            message.author = profile
            message.course = course
            message.contents = data['message']

            message.save()

            return JsonResponse({'success' : True})

        else:
            return render(request, "courses/discussion.html")

