from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("course/<int:course_id>/", views.course, name="course"),
    path("profile/<str:username>/", views.profile, name="profile"),
    path("login/", views.login_view, name="login"),
    path("signup/", views.signup_view, name="signup"),
    path("logout/", views.logout_view, name="logout"),
    path("studio/", views.studio, name="studio"),
]