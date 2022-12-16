from django.db import models

# Create your models here.
Grade = [
    ('excellent', 1),
    ('average', 0),
    ('bad', -1)
]

# DataFlair
class jupitorPost(models.Model):
    name = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    uploaded = models.DateTimeField(auto_now_add = True)
    rating = models.CharField(choices = Grade, default = 'average', max_length = 50)

    class Meta:
        ordering = ['uploaded']

    def __str__(self):
        return self.name


    
class eventsTable(models.Model):
    e_id = models.IntegerField(primary_key=True, auto_created=True, null=False, default=0)
    e_division = models.CharField(max_length=100)
    e_title = models.CharField(max_length=100)
    e_date = models.DateField()
    e_notes = models.CharField(max_length=100)
    e_bunting = models.BooleanField()

class File(models.Model):
    id = models.IntegerField(primary_key=True)
    staff_name = models.CharField(max_length=100,null=True, blank=True)
    position = models.CharField(max_length=200, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    year_joined = models.CharField(max_length=4, null=True, blank=True)
    # def __str__(self):
    #     return self.staff_name

