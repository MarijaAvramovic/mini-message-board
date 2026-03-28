# mini-message-board

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

At this point, you should be able to visit /new (it might be a good idea to add a link to that route on your index page), fill out the form, submit it and then see it show up on the index page!
Add an “open” button or link next to every message to open a new page with the message details.
Push your project to GitHub.
You’ll learn how to deploy your app to the web in the next lesson, don’t forget to come back and submit it to the submissions below once you’re done!