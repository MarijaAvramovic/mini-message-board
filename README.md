# mini-message-board

Live:
https://mini-message-board-jfb6.onrender.com/


A simple Node.js + Express + EJS application that allows users to post messages, view them, and see individual message details. Implements a basic MVC structure with routers, controllers, and models. Messages are stored in memory (for demonstration purposes) and displayed using server-side rendering with EJS templates.

Features:

Add new messages via a form
View all messages on the home page
Open individual message details
Professional, responsive card-based UI

Tech stack: Node.js, Express, EJS, HTML/CSS

![mini borad app](./public/Screenshot%202026-03-28%20at%207.04.19%20PM.png)


This is a basic Express app, using Express and EJS. 

We have 2 routes, the index ("/") and a “new message” form ("/new").
We have an array at the top of your index router called messages available to index.ejs template.

In index template (in the "views" folder) by using message array we can display the user, text and the date the message was added. 
Css for style with linking public folder in app.js 
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

We have a new message form. In the router showing router.get() for the "/new" route and pointing to a template named "form". 

Template form has a heading, 2 inputs (one for the author’s name and one for the message text), a submit button and a link to go back to msg. 

Added a router.post() for "/new"
On app level included app.use(express.urlencoded({ extended: true }));

In order to get and use the data from users form, used req.body. The individual fields inside the body object are named according to the name attribute on form : 1. req.body.text 2. req.body.name.  


In the router.post() text and name submission being pushed into the messages array
At the end of the router.post() we have res.redirect("/") to send users back to the index page after submitting a new message.

On “open” button go to open a new page with the message details. Updated index.ejs, added messageDetails.ejs added style. 