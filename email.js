function sendEmail()
{
    let params = {
        from_name : document.getElementById("name").value,
        from_email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_m2bvp1l", "template_6xsx27l", params)
        .then((response) => {
            console.log("SUCCESS", response);
            document.getElementById("msg").innerText = "Your message has been sent successfully!";
        }, (error) => {
            console.log("FAILED", error);
            document.getElementById("msg").innerText = "There was an error sending your message. Please try again.";
        });

}