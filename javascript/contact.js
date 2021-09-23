function ValidationEvent() {
    // Storing Field Values In Variables
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var comment = document.getElementById("comment").value;
    if (fname != '' && lname != '' && email != '' && comment != '') {
        alert(" We value your feedback  " + fname + " "+ lname + ".  We will respond as soon as possible")
    }
    else {
        alert("All fields required!!")
    }
}