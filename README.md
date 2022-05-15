<a id="anchor"></a>
##### README.markdown

Test task of the company Logru
=============

#### Доступен по адресу: [test_task_logru](http://test_task_logru.178.20.42.150.sslip.io:3020)
или при локальном запуске: http://localhost:3020

##### Start приложения: npm start

### **Текст задания:**
Необходимо сделать сервис с REST API.
Авторизация по токену. MongoDB (база данных). Создание Токена при каждом входе (действителен 15 минут). Продлевать при любом запросе пользователя.
Также API для вывода списка пользователей, добавления, редактирования, удаления пользователя

Использовал облачную BD.
Для документирования использовал Swagger.  В нем можно проверить работу всех маршрутов.
[http://test_task_logru.178.20.42.150.sslip.io:3020/docs/api](http://test_task_logru.178.20.42.150.sslip.io:3020/docs/api)
http://localhost:3020/docs/api

В задании использовал JWT токен. Реализовал продление токена при любом запросе авторизованного пользователя путем генерации нового JWT токена. JWT новый  токен (accessToken) отправляется при каждом запросе пользователя  при помощи RefreshInterceptor

* 0. > Корневой маршрут GET
[http://test_task_logru.178.20.42.150.sslip.io:3020](http://test_task_logru.178.20.42.150.sslip.io:3020)
 http://localhost:3020  
* 1. >Для регистрацию по POST маршруту:
[http://test_task_logru.178.20.42.150.sslip.io:3020/auth/signup](http://test_task_logru.178.20.42.150.sslip.io:3020/auth/signup)  
 http://localhost:3020/auth/signup
* 2. >Для авторизации POST 
[http://test_task_logru.178.20.42.150.sslip.io:3020/auth/signin](http://test_task_logru.178.20.42.150.sslip.io:3020/auth/signin)  
http://localhost:3020/auth/signin
Body:
	username
	password
Пример ответа : 
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZXhhbmRlcjI2Iiwic3ViIjoiNjI4MDFkYjk2ZDkwMjgxZjQ0MmE4Mjk3IiwiaWF0IjoxNjUyNTYzNDA3LCJleHAiOjE2NTI1NjM0Njd9.ntTVUFDd96rD3D94WTj6i3MrMFyKdp2Vg6GoqXVd1PQ"
}


##### *Во всех следующих запросах необходимо ввести Bearer Token (accessToken), полученный при авторизации или при любом другом запросе ( если после последнего запроса прошло не более 15 минут). В Swagger вводится путем нажатия кнопки Authorize  или иконки замка.*

##### *В целях тестирования на своем сервере: [test_task_logru](http://test_task_logru.178.20.42.150.sslip.io:3020) срок действия токена составляет 60 секунд*

* 3. > API получения id, username авторизованного пользователя GET:
[http://test_task_logru.178.20.42.150.sslip.io:3020/api/me](http://test_task_logru.178.20.42.150.sslip.io:3020/api/me)  
http://localhost:3020/api/me 
* 4. >API вывода списка пользователей GET:
[http://test_task_logru.178.20.42.150.sslip.io:3020/api/users](http://test_task_logru.178.20.42.150.sslip.io:3020/api/users)  
 http://localhost:3020/api/users

* 5. >API редактирования данных пользователя PUT.
Выбор пользователя по имени.
[http://test_task_logru.178.20.42.150.sslip.io:3020/api/edit](http://test_task_logru.178.20.42.150.sslip.io:3020/api/edit)  
http://localhost:3020/api/edit
Body:
	usernamefind
	editCountry
  editCity

* 6. >API удаления пользователя DELETE.
Выбор пользователя по имени.
[http://test_task_logru.178.20.42.150.sslip.io:3020/api/delete](http://test_task_logru.178.20.42.150.sslip.io:3020/api/delete)  
http://localhost:3020/api/delete
Body:
	usernamefind

[Вверх](#anchor)
