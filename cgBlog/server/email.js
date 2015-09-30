// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (text) {
    check([text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: 'xxxx@xxxxxx',
      from: 'xxxx@xxxxx',
      subject: 'You got a new message!',
      text: text
    });
  }
});