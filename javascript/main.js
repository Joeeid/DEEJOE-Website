function AdjNavbar(){
    var navbar = document.getElementById("navbar-toggler");
    navbar.click();
}

function SendEmail(){
    var EmailBody = document.getElementById("emailInq").value;
    window.open("mailto:deejoe.lb@gmail.com?Subject=Business Inquiry Ticket&body=" + encodeURI(EmailBody));
}