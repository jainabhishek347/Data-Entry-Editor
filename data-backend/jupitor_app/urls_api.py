# basic_api/urls.py
from django.urls import path
from jupitor_app import views
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView,TokenVerifyView)

urlpatterns = [
    path('login/', views.UserLogin.as_view(), name="login"),
    path('registration/', views.UserRegister.as_view(), name="registration"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]