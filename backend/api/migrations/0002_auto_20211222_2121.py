# Generated by Django 3.1.7 on 2021-12-22 13:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnnotatedSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(default='无', max_length=100)),
                ('status', models.CharField(default='未标注', max_length=20)),
                ('num', models.IntegerField(default=0)),
                ('pub_date', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['pub_date'],
                'get_latest_by': 'pub_date',
            },
        ),
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(default='无', max_length=100)),
                ('status', models.CharField(default='无人认领', max_length=20)),
                ('num', models.IntegerField(default=0)),
                ('pub_date', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['pub_date'],
                'get_latest_by': 'pub_date',
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='dataset')),
                ('dataset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.dataset')),
            ],
        ),
        migrations.RemoveField(
            model_name='labels',
            name='value',
        ),
        migrations.AddField(
            model_name='labels',
            name='text',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='email',
            field=models.CharField(default='', max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='annotatetext',
            name='description',
            field=models.CharField(default='无', max_length=1000),
        ),
        migrations.AlterField(
            model_name='annotatetext',
            name='text',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='labels',
            name='color',
            field=models.CharField(max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='labels',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='api.userinfo'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='avatar',
            field=models.ImageField(blank=True, max_length=255, null=True, upload_to='avatar'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='password',
            field=models.CharField(max_length=128),
        ),
        migrations.CreateModel(
            name='LabeledImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('labelinfo', models.JSONField(default=dict)),
                ('annotatedset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.annotatedset')),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.image')),
            ],
        ),
        migrations.AddField(
            model_name='dataset',
            name='publisher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.userinfo'),
        ),
        migrations.AddField(
            model_name='annotatedset',
            name='dataset',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.dataset'),
        ),
        migrations.AddField(
            model_name='annotatedset',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.userinfo'),
        ),
    ]
