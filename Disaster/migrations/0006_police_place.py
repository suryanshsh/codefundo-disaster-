# Generated by Django 2.1.2 on 2018-10-26 11:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Disaster', '0005_cityhospital_place'),
    ]

    operations = [
        migrations.AddField(
            model_name='police',
            name='place',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Disaster.City'),
            preserve_default=False,
        ),
    ]
