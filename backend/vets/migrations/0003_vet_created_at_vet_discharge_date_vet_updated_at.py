# Generated by Django 4.2 on 2024-07-22 17:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('vets', '0002_vet_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='vet',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vet',
            name='discharge_date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='vet',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
