from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Course, Profile

def home(request):
    context = {
    }
    return render(request, "courses/home.html", context)

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
    context = {
    }
    return render(request, "courses/discussion.html", context)

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