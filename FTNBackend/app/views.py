import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from app.models import Professor, Student

# Create your views here.
def index(request):
    return HttpResponse("Hello world")

def get_students(request):
    students = Student.objects.all().values()
    students_list = list(students)
    return JsonResponse(students_list, safe=False)

@csrf_exempt
def new_student(request):
    data = json.loads(request.body)
    Student.objects.create(name=data['name'], surname=data['surname'], jmbg=data['jmbg'], index=data['index'])
    return HttpResponse(status=201)

def get_professors(request):
    professors = Professor.objects.all().values()
    professor_list = list(professors)
    return JsonResponse(professor_list, safe=False)

@csrf_exempt
def new_professor(request):
    data = json.loads(request.body)
    Professor.objects.create(name=data['name'], surname=data['surname'], jmbg=data['jmbg'])
    return HttpResponse(status=201)
