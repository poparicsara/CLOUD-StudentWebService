from . import views
from django.urls import path

urlpatterns = [
    path('ftn', views.index),
    path('ftn/students', views.get_students),
    path('ftn/student', views.new_student),
    path('ftn/professors', views.get_professors),
    path('ftn/professor', views.new_professor)   
]