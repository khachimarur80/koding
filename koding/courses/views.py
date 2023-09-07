from django.shortcuts import render
from .models import Course

def index(request):
    courses_list = Course.objects.all()
    context = {"courses_list": courses_list}
    return render(request, "courses/index.html", context)


def course(request, course_id):
    try:
        course = Course.objects.get(pk=course_id)
    except Course.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "courses/course.html", {"course": course})