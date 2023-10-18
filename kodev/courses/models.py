from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Course(models.Model):
	title = models.CharField(max_length=120)
	date = models.DateTimeField("Date published.")
	introduction = models.TextField()

	def __str__(self):
		return self.title

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	bio = models.TextField(max_length=500, blank=True)
	location = models.CharField(max_length=30, blank=True)
	birth_date = models.DateField(null=True, blank=True)
	enrolled =  models.ManyToManyField(Course, related_name='enrolls', blank=True, null=True)
	liked =  models.ManyToManyField(Course, related_name='liked', blank=True, null=True)
	disliked =  models.ManyToManyField(Course, related_name='disliked', blank=True, null=True)

	SKILL_LEVEL_CHOICES = [
		('beginner', 'Beginner'),
		('advanced_beginner', 'Advanced Beginner'),
		('advanced', 'Advanced'),
		('proficient', 'Proficient'),
		('master', 'Master'),
	]

	skill_level = models.CharField(
		max_length=20,
		choices=SKILL_LEVEL_CHOICES,
		default='beginner',
	)

	skills = models.TextField(blank=True)
	email_notifications = models.BooleanField(default=False)
	in_app_notifications = models.BooleanField(default=False)
	theme = models.BooleanField(default=False)
	github = models.CharField(max_length=50, default='')
	instagram = models.CharField(max_length=50, default='')
	linkedin = models.CharField(max_length=50, default='')
	discord = models.CharField(max_length=50, default='')
	profile_image = models.ImageField(upload_to='', blank=True, null=True)

	def __str__(self):
		return self.user.username

class Chapter(models.Model):
	title = models.CharField(max_length=120)
	content = models.TextField()
	course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='chapters')
	completed = models.BooleanField(default=False)

	def __str__(self):
		return self.title

class Message(models.Model):
	author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='messages')
	course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='messages')
	date = models.DateField("Date Published", auto_now_add=True)
	time = models.TimeField("Time Published", auto_now_add=True)
	contents = models.TextField()

	def __str__(self):
		return f"{self.author} in {self.course} on {self.date} at {self.time}"

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
	if created:
		Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
	instance.profile.save()