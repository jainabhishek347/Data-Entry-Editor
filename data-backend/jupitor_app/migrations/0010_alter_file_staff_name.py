# Generated by Django 4.1.4 on 2022-12-16 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jupitor_app', '0009_alter_file_age_alter_file_position_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='staff_name',
            field=models.CharField(blank=True, default='staff name', max_length=100, null=True),
        ),
    ]
