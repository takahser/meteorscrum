//  can be accessed from both the server and the client & update themselves automatically
Tasks = new Mongo.Collection("tasks");

// Meteor client code
if (Meteor.isClient) {



  // You can pass data into templates from your JavaScript code by defining helpers.
  Template.body.helpers({
    /*tasksStatic: [
      {
        name : 'Learn AngularJs',
        info : 'Blubb',
        estimation: 1,
        status: 'ToDo',
        personResponsible: 'Chuck Norris'
      },{
        name : 'Learn NodeJs',
        info : 'Blah',
        estimation: 5,
        status: 'InProgress',
        personResponsible: 'Jackie Chan'
      },{
        name : 'Learn Meteor',
        info : 'huh',
        estimation: 3,
        status: 'Done',
        personResponsible: 'Bruce Lee'
      }
    ]*/

    tasks: function () {
      return Tasks.find({});
    }

  });
}