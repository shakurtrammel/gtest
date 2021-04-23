from django.urls import path
from gtest_app import views



urlpatterns = [
    path("add-dojo", views.add),
    path("", views.home),
]
