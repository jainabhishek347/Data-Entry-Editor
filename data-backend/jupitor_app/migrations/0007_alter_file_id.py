# Generated by Django 4.1.4 on 2022-12-16 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jupitor_app', '0006_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='id',
            field=models.IntegerField(max_length=6, primary_key=True, serialize=False),
        ),
    ]
