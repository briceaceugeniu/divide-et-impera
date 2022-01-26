# DIVIDE ET IMPERA API

### Set up steps

1. Install composer packages
```console
cd server
composer install
```

2. Create and setup .env file
   
```console
copy .env.example .env
php artisan key:generate
```
3. put database credentials in .env file

4. Migrate
```console
php artisan migrate
``` 
5. Fill table task with dummy data
> Use Faker + adjust manually parents of each task so that it make sense 
```console
php artisan tinker
>>> App\Models\Task::factory()->count(10)->create()
``` 
> **OR** insert example data from sql/tasks_ex.sql

## Routes
> see routes/web.php
