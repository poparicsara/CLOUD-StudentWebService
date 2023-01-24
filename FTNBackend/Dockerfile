FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt
RUN pip install django-cors-headers

EXPOSE 8081

CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8081