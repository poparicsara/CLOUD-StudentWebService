# Generated by Django 4.1.2 on 2023-01-25 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_alter_professor_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='professor',
            name='image',
        ),
    ]
