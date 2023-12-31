# Generated by Django 4.2.6 on 2023-10-17 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0006_remove_profile_enrolled_profile_enrolled'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='discord',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='email_notifications',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='github',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='in_app_notifications',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='instagram',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='linkedin',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='skill_level',
            field=models.CharField(choices=[('beginner', 'Beginner'), ('advanced_beginner', 'Advanced Beginner'), ('advanced', 'Advanced'), ('proficient', 'Proficient'), ('master', 'Master')], default='beginner', max_length=20),
        ),
        migrations.AddField(
            model_name='profile',
            name='skills',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='theme',
            field=models.BooleanField(default=False),
        ),
    ]
