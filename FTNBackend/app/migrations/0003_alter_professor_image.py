# Generated by Django 4.1.2 on 2023-01-25 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_professor_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professor',
            name='image',
            field=models.ImageField(default='images/bg.png', upload_to='images'),
        ),
    ]
