# Generated by Django 4.1.2 on 2023-01-25 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_professor_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professor',
            name='image',
            field=models.ImageField(default='/app/uploads/images/bg.png', upload_to='images'),
        ),
    ]