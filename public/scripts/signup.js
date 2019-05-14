document.addEventListener("DOMContentLoaded", function() {
    const firstName = document.getElementById("firstName");
    firstName.addEventListener("blur", function(e) {
        if (firstName.value === "") {
            firstName.classList.add("error");
        } else {
            firstName.classList.remove("error");
        }
    })
});