# This message will self-destruct

A NodeJS programming challenge.

The goal here is to create a simple web application that allows someone to create a message, view that message at a unique URL, and destroy the message upon viewing it. Just like the title states, this message will self-destruct!

## Step 1: Installation

Fork this repository, clone it, install dependencies, and run it.

``` bash
git clone {{your_fork_url_here}}
npm install
node app.js
```

## Step 2: Complete the Requirements

Complete the following requirements by using any database engine of your choice. Update this readme by checking the following boxes as you go.

- [X] As a user, I should see a form to create a new message on the homepage.
- [X] As a user, I should see a list of links for all created messages below the 'new message' form on the homepage.
- [X] As a user, when I click a link in the message list, I should be able to view the message at a unique URL.
- [X] As a user, when I open a message, the message should self-destruct (delete from the database).
- [X] As a user, I should no longer see messages on the homepage that have been viewed.

Two more things:
* Remember to add documentation to your README so the app can be installed and run locally for review.
* Bonus points for making it look pretty :sparkles:

## Step 3: Submit

Send an email with a link to your fork when finished. Thanks!

## Fork Notes

- Database selection: this app uses lowdb, using a local file called "db.json". It needs permissions to your local directory in order to run. It reads and writes to the file, and will self-initialize if it doesn't exist.

- Lodash-id is what provides the unique ids

- Bootstrap 4.x was added. Using standard theme colors.