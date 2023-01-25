import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from app.models import Professor, Student
import requests

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

    student = Student(name=data['name'], surname=data['surname'], jmbg=data['jmbg'], index=data['index'])
    student_json = model_to_dict(student)

    headers = {'Content-type': 'application/json'}
    response = requests.post('http://uns:8080/uns/students', data=json.dumps(student_json), headers=headers, verify=False) 

    if response.status_code == 200:
        Student.objects.create(name=data['name'], surname=data['surname'], jmbg=data['jmbg'], index=data['index'])
        return HttpResponse(status=201)
    else:
        return HttpResponse(status=400)


def get_professors(request):
    professors = Professor.objects.all().values()
    professor_list = list(professors)
    return JsonResponse(professor_list, safe=False)

@csrf_exempt
def new_professor(request):
    data = json.loads(request.body)
    Professor.objects.create(name=data['name'], surname=data['surname'], jmbg=data['jmbg'])
    return HttpResponse(status=201)
