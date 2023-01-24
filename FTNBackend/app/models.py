from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    jmbg = models.CharField(max_length=13, unique=True)
    index = models.CharField(max_length=10, unique=True)


class Professor(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    jmbg = models.CharField(max_length=13, unique=True)

