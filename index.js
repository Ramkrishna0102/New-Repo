function SendMail(event) {
    event.preventDefault(); 
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var subject = document.getElementsByName('subject')[0].value;
    var message = document.getElementsByName('message')[0].value;

    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_l8vyft9","template_ulzc38f", params)

    .then(function(response) {
        console.log('Success!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('Failed...', error);
        alert('Failed to send message.');
    });
}
