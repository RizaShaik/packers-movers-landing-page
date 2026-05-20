const form =
document.getElementById(
"contactForm"
);

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    alert(
    "Thank you! Our team will contact you shortly."
    );

    form.reset();
});