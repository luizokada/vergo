# Generated by Django 4.0.4 on 2022-04-13 16:59

from django.db import migrations, models
import django.db.models.deletion
import django_cryptography.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=60)),
                ('number', models.CharField(max_length=8)),
                ('complement', models.CharField(max_length=60)),
                ('ZIP', models.CharField(max_length=8)),
                ('neighborhood', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Consumer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('email', models.CharField(max_length=60, unique=True)),
                ('cpf', models.CharField(default='', max_length=12, unique=True)),
                ('password', django_cryptography.fields.encrypt(models.CharField(max_length=64))),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='consumer.address')),
            ],
        ),
    ]