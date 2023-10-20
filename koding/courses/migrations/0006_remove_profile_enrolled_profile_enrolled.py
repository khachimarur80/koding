# Generated by Django 4.2.6 on 2023-10-17 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_profile_enrolled'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='enrolled',
        ),
        migrations.AddField(
            model_name='profile',
            name='enrolled',
            field=models.ManyToManyField(blank=True, null=True, related_name='enrolls', to='courses.course'),
        ),
    ]