import { Mongo } from 'meteor/mongo';
 
// On the server, this sets up a MongoDB collection called tasks; 
// on the client, this creates a cache connected to the server collection
export const Tasks = new Mongo.Collection('tasks');
