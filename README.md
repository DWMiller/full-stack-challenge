# Full Stack Developer Challenge

This is an interview challenge for Paytm Labs. Please feel free to fork. Pull Requests will be ignored.

## Requirements

Design a web application that allows employees to submit feedback toward each other's performance review.

_Partial solutions are acceptable._ It is not necessary to submit a complete solution that implements every requirement.

### Admin view

* Add/remove/update/view employees
* Add/update/view performance reviews
* Assign employees to participate in another employee's performance review

### Employee view

* List of performance reviews requiring feedback
* Submit feedback

## Challenge Scope

* High level description of design and technologies used
* Server side API (using a programming language and/or framework of your choice)
  * Implementation of at least 3 API calls
  * Most full stack web developers at Paytm Labs currently use Node.js and/or Ruby on Rails on the server (with MySQL for the database), but feel free to use other tech if you prefer
* Web app
  * Implementation of 2-5 web pages using a modern web framework (preferably React) that talks to server side
    * This should integrate with your API, but it's fine to use static responses for some of it
* Document all assumptions made
* Complete solutions aren't required, but what you do submit needs to run.

## How to complete this challenge

* Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the Paytm Labs interview team

* Complete your work in your own github repo and send the results to us and/or present them during your interview

### Assumptions

* Reviews have been simplied to a 5 star rating

* No registration, employees only added by admin user

  * Admin user generated by setup script

* Employee details not relevant, only given a name.

- Weak Error Handling

  * Null returns on updates will break subsequent requests

### Setup

#### Prerequisites:

* Node
* Yarn (or npm, substitude yarn for npm in following instructions)
* Mongodb

You will need to create a `variables.env` file in the root directory of this project.

#### Intructions

```
NODE_ENV=development
DATABASE=<mongodb connection>
SECRET=
KEY=
ADMIN_PASSWORD=password
```

Provide your own values for the above. `SECRET` and `KEY` may be any string.
`ADMIN_PASSWORD` will be used as the default password for accounts created by the setup script.

You will need to create your own mongodb instance and provide the connection string, or I can provide you with a new database user to my own on request.

To create initialize the database with the default user accounts, execute the following from the root directory.

```
cd scripts
node setup
```

This script will also erase all previous users and reviews, and may be used to reset the database as needed.

To install all dependences `npm install`

To start the server: `yarn start`

and navigate to `http://localhost:5000/` in your browser.

If this does not appear to work, I likely decided not to commit a build of the client and forgot to update this part of the instructions. In this case, exec
