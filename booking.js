emailjs.init("K5hjMVVcbXZJKBDHT");

const bookingForm = document.getElementById("booking-form");
const bookingStatus = document.getElementById("booking-status");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    bookingStatus.textContent = "Pošiljanje ...";

    emailjs.sendForm("service_ywj9lmz", "template_vhxtdyo", bookingForm)
      .then(() => {
        bookingStatus.textContent = "Hvala za povpraševanje. Odgovoriva v najkrajšem možnem času.";
        bookingForm.reset();
      })
      .catch(() => {
        bookingStatus.textContent = "Prišlo je do napake. Poskusi znova ali nama piši na ainn.glasba@gmail.com.";
      });
  });
}
