$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();

    });
    $("button#send-text").click(function() {
        let clientName = $("input#client-name").val();
        alert("Hello! our dear loyal customer:" + "" + clientName + "" + "your total cost for designing cost Ksh.260000/$.2600");



    });
    $("#payments").click(function() {
        $("#payment-form").show();
    });
    $("button#btn-pay").click(function() {
        alert("We have received your payments and we will get back to you as soon as possible. Thank you for working with us.");
    });

});