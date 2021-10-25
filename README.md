# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

Stack: **Javascript**, **Node.JS**, **Express**

| API        | HTTP Method | Description                                       |
| ---------- | ----------- | ------------------------------------------------- |
| /          | GET         | show main page                                    |
| /api       | GET         | returns current date in both UNIX and UTC formats |
| /api/:date | GET         | returns passed date in both UNIX and UTC formats  |

A small app that accepts either valid date or Unix date as part of the URI and returns a JSON object with a date in UNIX and UTC formats. Also exception handling is implemented for wrongly typed param.

You can pass date value as `/api/:date` in either UNIX format or as a valid date string (ex., 2020-12-12). If you leave the date part empty and only call for `/api` it will return the current date in both UNIX and UTC formats.

![App Image](https://i.imgur.com/woYpCeq.png)
