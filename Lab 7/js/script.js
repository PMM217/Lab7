function userForm() {

    event.preventDefault();

    document.getElementById("userForm").style.display="none";

    var name = document.getElementById("formName").value;

    var email = document.getElementById("formEmail").value;

    alert(name + ", thank you for your details. We will be in touch via " + email + " shortly.");


}
