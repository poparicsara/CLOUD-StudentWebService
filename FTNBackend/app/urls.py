from . import views
from django.urls import path

urlpatterns = [
    path('ftn', views.index),
    path('getStudents', views.get_students),
    path('newStudent', views.new_student),
    path('getProfessors', views.get_professors),
    path('newProfessor', views.new_professor)   
]