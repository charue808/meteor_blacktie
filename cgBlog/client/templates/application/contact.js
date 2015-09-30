Template.contactFormTemplate.events({
  'submit form#contactForm': function(e) {
    var contactForm = $(e.currentTarget),
        name = contactForm.find('#name').val(),
        email = contactForm.find('#email').val(),
        subject = contactForm.find('#subject').val(),
        message = contactForm.find('#message').val()
    
    if (isFilled(name) && isFilled(email) && isFilled(subject) && isFilled(message) isEmail(email)) {
      var dataText = "Message from: " + name + "\rEmail: " + email + "\rSubject: " + subject + "\rContent: " + message;
      
      Meteor.call('sendEmail', dataText);
      
      throwAlert('Email send.', 'success');
        
    } else {
      throwAlert('An error occured. Sorry', 'error')
      return false;
    }
  }
});