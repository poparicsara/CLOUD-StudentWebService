# Generated by Django 4.1.2 on 2023-01-26 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_alter_student_index'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='image',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
