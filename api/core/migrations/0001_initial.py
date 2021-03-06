# Generated by Django 4.0.4 on 2022-05-04 00:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('consumer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('value', models.DecimalField(decimal_places=2, max_digits=9)),
                ('slug', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Purchase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('AGPG', 'Aguardando Pagamento'), ('PGCF', 'Pagamento Confirmado'), ('ENVI', 'Enviado'), ('FINA', 'Finalizado'), ('CANC', 'Cancelado')], default='AGPG', max_length=4)),
                ('consumer', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='consumer.consumer')),
                ('product', models.ManyToManyField(to='core.product')),
            ],
        ),
        migrations.CreateModel(
            name='Ad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.product')),
            ],
        ),
    ]
