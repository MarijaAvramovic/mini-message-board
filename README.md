# mini-message-board

This is a basic Express app, using Express and EJS. 

We have 2 routes, the index ("/") and a “new message” form ("/new").
We have an array at the top of your index router called messages available to index.ejs template.

In index template (in the "views" folder) by using message array we can display the user, text and the date the message was added. 
Css for style with linking public folder in app.js 
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

Next let’s set up the new message form. In the router add a router.get() for the "/new" route and point it to a template named "form". In the views directory create your form template. Add a heading, 2 inputs (one for the author’s name and one for the message text) and a submit button. To have the form make a network request you will need to define it with both a method and an action like so (we will learn how to handle forms in a later lesson):

<form method="POST" action="/new">
   put your inputs and buttons in here!
</form>
With your form set up like this, when you click on the submit button it should send a POST request to the url specified by the action attribute, so go back to your index router and add a router.post() for "/new".
In order to get and use the data from your form, you will need to access the contents of your form inside router.post() as an object called req.body. The individual fields inside the body object are named according to the name attribute on your inputs (the value of <input name="messageText"> will show up as req.body.messageText inside the router.post function). For this to work as intended, you’ll need to use an app level Express middleware called express.urlencoded() to parse the form data into req.body. You can set this up by adding the following line to your app setup:

app.use(express.urlencoded({ extended: true }));
In your router.post() take the contents of the form submission and push them into the messages array as an object that looks something like this:

messages.push({ text: messageText, user: messageUser, added: new Date() });
At the end of the router.post() function use res.redirect("/") to send users back to the index page after submitting a new message.
At this point, you should be able to visit /new (it might be a good idea to add a link to that route on your index page), fill out the form, submit it and then see it show up on the index page!
Add an “open” button or link next to every message to open a new page with the message details.
Push your project to GitHub.
You’ll learn how to deploy your app to the web in the next lesson, don’t forget to come back and submit it to the submissions below once you’re done!