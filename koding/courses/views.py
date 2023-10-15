from django.shortcuts import render, redirect
from django.http import Http404, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Course, Profile, Message
from rest_framework import generics
from .serializers import ItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def course_list(request):
    if request.method == 'GET':
        # Handle GET request to list items
        courses = Course.objects.all()
        serializer = ItemSerializer(courses, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        # Handle POST request to create an item
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def home(request):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            # Return JSON response for initialization
            courses = Course.objects.all()
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
            }
            return JsonResponse(data)
        else:
            return render(request, "courses/home.html")
    else:
        return render(request, "courses/home.html")


def account(request):
    context = {
    }
    return render(request, "courses/account.html", context)

def browse(request):
    context = {
    }
    return render(request, "courses/browse.html", context)

def chapter(request, course_id, chapter_id):
    context = {
    }
    return render(request, "courses/chapter.html", context)

def course(request, course_id):
    context = {
    }
    return render(request, "courses/course.html", context)

def create(request):
    context = {
    }
    return render(request, "courses/create.html", context)

def discussion(request):
    if request.method == 'GET':
        if request.GET.get('type') == 'initialization':
            courses = Course.objects.all()

            discussions = []

            for course in courses:
                messages = Message.objects.filter(course=course)
                if len(messages) > 0:
                    discussions.append(
                        {
                            'id' : course.id,
                            'title' : course.title,
                        }
                    )

            data = {
                'discussions': discussions,
            }
            
            return JsonResponse(data)
        else:
            return render(request, "courses/discussion.html")
    else:
        return render(request, "courses/discussion.html")

def settings(request):
    context = {
    }
    return render(request, "courses/settings.html", context)



def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return render(request, 'courses/login.html', {'error_message': 'Invalid login credentials'})
    else:
        return render(request, 'courses/login.html')

def logout_view(request):
    logout(request)
    return redirect('index')

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Replace 'signin' with the URL name of your sign-in view
    else:
        form = UserCreationForm()
    return render(request, 'courses/signup.html', {'form': form})