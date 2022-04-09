## Project Name
badBank Full-Stack

## Table of Contents
- [Description & General Info]()
- [Languages & Technologies]()
- [Features]()
- [Suggestions for Improvements]()

## Description & General Info
This is a capstone project for the MITxPro Full-Stack Web Development Women's Cohort program that focused on using the MERN stack. This full-stack version of the application is an expansion and improvement upon the badBank project that was an earlier assignment during the program.

## Languages & Technologies
- MongoDB / MongoDB Atlas
- Express
- Node.js
- React
- Bootstrap
- Heroku (for hosting the server-side files)
- Netlify (for hosting the client-side files)

## Features
You can watch a brief overview of the application'ss archetiture and key features on [YouTube](https://www.youtube.com/watch?v=gm5MOgWMLCk). 

This application mimics an online bank, and though it has user authntication, its lack of security doesn't make it a very good one. That being siad, a user is able to create an account, login, and make transactions that are stored in database (specifically, a Cluster via MongoDB Atlas). The application features a dynamic navigation bar that displays different options based on if a user is logged in or not. 

![create account](https://user-images.githubusercontent.com/87245718/162588426-030bc42d-b6d6-4eb3-8039-12a4367aa9c6.png) ![logged in](https://user-images.githubusercontent.com/87245718/162588434-6df1de22-f3e1-4e7d-a736-391da1d706a8.png)

## Suggestions for Improvements
Some additional features for this application could include a user profile page that allows user's to update their name, email, or password with the help of PUT or PATCH requests to the database. Additionally, if redoing this application, I would opt for using a SQL database verses NoSQL, as the more structuered data system would be more conducive to a banking application. 
