from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("account/", views.account, name="account"),
    path("browse/", views.browse, name="browse"),
    path("course/<int:course_id>/chapter-<int:chapter_index>/", views.chapter, name="chapter"),
    path("course/<int:course_id>/", views.course, name="course"),
    path("create/", views.create, name="create"),
    path("discussions/", views.discussion, name="discussion"),
    path("settings/", views.settings, name="settings"),

    path('api/theme', views.api_theme, name='api-theme'),

    path("login/", views.login_view, name="login"),
    path("signup/", views.signup_view, name="signup"),
    path("logout/", views.logout_view, name="logout"),
]