import base64
import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
from app.models import Professor, Student
import requests
from django.core.files.storage import default_storage

# Create your views here.
def index(request):
    return HttpResponse("Hello world")

def get_students(request):
    students = Student.objects.all().values()
    student_list = list(students)

    for student in student_list:
        with open('uploads/images/' + student['jmbg'] + '.png', "rb") as image_file:
            image = base64.b64encode(image_file.read()).decode('utf-8')
        student['image'] = image

    return JsonResponse(student_list, safe=False)

@csrf_exempt
def new_student(request):
    name = request.POST.get('name')
    surname = request.POST.get('surname')
    jmbg = request.POST.get('jmbg')
    index = request.POST.get('index')

    student = Student(name=name, surname=surname, jmbg=jmbg, index=index)
    student_json = model_to_dict(student)

    headers = {'Content-type': 'application/json'}
    response = requests.post('http://nginx:80/uns/students', data=json.dumps(student_json), headers=headers, verify=False) 

    if response.status_code == 200:
        file = request.FILES['file']
        default_storage.save('images/' + jmbg + '.png', file)

        Student.objects.create(name=name, surname=surname, jmbg=jmbg, index=index, image='uploads/images/' + jmbg + '.png')
        return HttpResponse(status=201)
    else:
        return HttpResponse(status=400)


def get_professors(request):
    professors = Professor.objects.all().values()
    professor_list = list(professors)

    for prof in professor_list:
        with open('uploads/images/' + prof['jmbg'] + '.png', "rb") as image_file:
            image = base64.b64encode(image_file.read()).decode('utf-8')
        prof['image'] = image

    return JsonResponse(professor_list, safe=False)

@csrf_exempt
def new_professor(request):

    name = request.POST.get('name')
    surname = request.POST.get('surname')
    jmbg = request.POST.get('jmbg')

    professor = Professor(name=name, surname=surname, jmbg=jmbg)
    professor_json = model_to_dict(professor)

    headers = {'Content-type': 'application/json'}
    response = requests.post('http://nginx:80/uns/professors', data=json.dumps(professor_json), headers=headers, verify=False) 

    if response.status_code == 200:
        file = request.FILES['file']
        default_storage.save('images/' + jmbg + '.png', file)

        Professor.objects.create(name=name, surname=surname, jmbg=jmbg, image='uploads/images/' + jmbg + '.png')
        return HttpResponse(status=201)
    else:
        return HttpResponse(status=400)

