# Generated by Django 4.1.4 on 2022-12-15 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jupitor_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='excel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('e_division', models.CharField(max_length=100)),
                ('e_title', models.CharField(max_length=100)),
                ('e_date', models.DateField()),
                ('e_notes', models.CharField(max_length=100)),
                ('e_bunting', models.BooleanField()),
            ],
        ),
    ]
