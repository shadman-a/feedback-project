# Displaying User Feedback .

## DESCRIPTION

In this project we created a rest web service using springboot. We created the rest endpoint /feedback where we added a get and post mapping. This allows us to add and see the feedback that we were making. The endpoint was tested with postman. After it was working we added a frontend employing vanilla JS and HTML. The fetch api was used to fetch from the API. A form was created to provide feedback.

---------------------

## Project objective:

Create a Spring Boot project that will capture user feedback using a REST endpoint. The REST resource will take in parameters using HTTP POST. The feedback data will be then added to a database table.


## Background of the problem statement:

As a part of developing an ecommerce web application, a REST resource is needed to capture user feedback. Feedback data will be received from third-party apps and websites. The data will be sent to the REST API which will collect feedback from various sources.


You must use the following:

● Eclipse as the IDE

● Apache Tomcat as the web server

● Spring Boot with Hibernate


Following requirements should be met:

● Create a MySQL table named feedback for storing feedback data

● An entity class Feedback should be made with annotations to link it with the feedback table

● A repository class should then map the entity class to the CrudRepository interface

● Create a REST controller class to create the REST endpoint. It should take in parameters using the POST protocol

● Data received in the REST controller will be then saved into the database

● Create a test form in HTML to submit data to the REST endpoint to ensure it’s working

● The step-by-step process involved in completing this task should be documented
 
