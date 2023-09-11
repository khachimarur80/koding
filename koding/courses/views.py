from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Course, Profile

def index(request):
    courses_list = Course.objects.all()
    context = {
    	"courses_list": courses_list,
    	"user": request.user,
    	}
    return render(request, "courses/index.html", context)


def course(request, course_id):
    try:
        course = Course.objects.get(pk=course_id)
    except Course.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "courses/course.html", {"course": course})


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

def profile(request, username):
    try:
        user = User.objects.get(username=username)
        profile = Profile.objects.get(user=user)
    except Course.DoesNotExist:
        raise Http404("User does not exist")
    return render(request, "courses/profile.html", {"profile": profile})