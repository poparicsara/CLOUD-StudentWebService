from . import views
from django.urls import path

urlpatterns = [
    path('pmf', views.index),
    path('pmf/students', views.get_students),
    path('pmf/student', views.new_student),
    path('pmf/professors', views.get_professors),
    path('pmf/professor', views.new_professor)   
]