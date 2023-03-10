# Generated by Django 4.1.4 on 2022-12-16 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jupitor_app', '0008_alter_file_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='age',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='file',
            name='position',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='file',
            name='staff_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='file',
            name='year_joined',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
    ]
