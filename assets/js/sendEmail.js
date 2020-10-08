function sendMail(contactForm){
    emailjs.send("gmail", "boardsnaturedev.", {
        "from_name": contactForm.fname.value,
        "from_email": contactForm.email.value,
        "subject": contactForm.subject.value,
        "message_html": contactForm.message.value
    })

    .then(
        function(response){
            console.log("SUCCESS", response);
            var hiddenTwo = document.getElementById("hidden")
            hiddenTwo.style.display = "block"
        },
        function(error){
            console.log("FAILED", error);
        }
    );

    return false;

}