from . import views
from django.urls import path

urlpatterns = [
    path('pravni', views.index),
    path('pravni/students', views.get_students),
    path('pravni/student', views.new_student),
    path('pravni/professors', views.get_professors),
    path('pravni/professor', views.new_professor)   
]