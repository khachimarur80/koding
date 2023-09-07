from django.db import models


class Course(models.Model):
	course_name = models.TextField()
	pub_date = models.DateTimeField("Date published.")

	def __str__(self):
		return self.course_name
