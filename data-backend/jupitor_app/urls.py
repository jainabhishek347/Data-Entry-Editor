# basic_api/urls.py
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from jupitor_app import views

app_name="basic_api"

urlpatterns = [
    path('api/', views.API_objects.as_view(), name="homepage"),
    path('api/<int:pk>/', views.API_objects_details.as_view()),
    path('file/api/', views.API_File_objects.as_view()),
    path('file/api/<int:pk>', views.API_File_objects.as_view()),
    path("register/", views.register_request, name="register"),
    path("login/", views.login_request, name="login"),
    path(r'upload/csv/$', views.upload_csv, name='upload_csv'),
]

urlpatterns = format_suffix_patterns(urlpatterns)