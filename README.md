# AngularHRManagement 😀

HR Management is an application your company needs to better supervise their employees.
This application will allow the HR team to identify every employee in the company and 
the project they belong to, among other functionalities.

1. Functionality ⚙️
    * The administrator can login in the application
    * The administrator can manage employees and projects. Managing is being able to list, add, edit and     deleteinformation.
    * The administrator can logout from the application
    * Have a default set information pre-loaded
    * It should have a 404 page for wrong URLs that should redirect to login after 3 seconds

2. Models 📊
    * 2.1 Employee Model
        * ID
        * Name
        * Company
        * Age
        * Birthday
        * Favorite Color
        * Project
    * 2.2 Project Model
        * ID
        * Name
        * Team Size (this attribute is updated when an employee is assigned or removed from a project)
        * Client Name

## Install 📲

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

angular material: 
```
ng add @angular/material
```
angular-in-memory-web-api: 
```
npm i angular-in-memory-web-api
```

## Docs 📋

Angular Material:
https://material.angular.io/

in-memory-web-api:
https://github.com/angular/in-memory-web-api

