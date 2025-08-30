// ------------ Send Email ---------------
function sendEmail(event) {
    event.preventDefault();

    const form = document.forms['submit-email'];
    const msgEl = document.getElementById("msg");

    let params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_m2bvp1l", "template_6xsx27l", params)
        .then((response) => {
            console.log("SUCCESS", response);
            msgEl.innerText = "Your message has been sent successfully!";
            setTimeout(() => { msgEl.innerText = "" }, 5000);
            form.reset();
        }, (error) => {
            console.log("FAILED", error);
            msgEl.innerText = "There was an error sending your message. Please try again.";
        });
}

// ------------ About Me Tabs ---------------
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ------------ Side Menu Functions ---------------
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
