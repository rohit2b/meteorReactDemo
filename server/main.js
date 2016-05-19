import { Meteor } from 'meteor/meteor';
// import on the server (this creates the MongoDB collection and 
// sets up the plumbing to get the data to the client)
import '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Start logging on start up");
});
