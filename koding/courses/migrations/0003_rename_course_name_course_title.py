# Generated by Django 4.2.6 on 2023-10-15 07:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_profile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='course_name',
            new_name='title',
        ),
    ]