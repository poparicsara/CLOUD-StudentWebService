FROM python:3.10

WORKDIR /app

COPY ./requirements.txt /app

RUN pip install -r requirements.txt --no-cache-dir
RUN pip install django-cors-headers

COPY . .

EXPOSE 8083

CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8083