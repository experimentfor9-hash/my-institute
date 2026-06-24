document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // फॉर्म को डिफ़ॉल्ट तरीके से सबमिट होने से रोकना

    // सबमिट बटन का टेक्स्ट बदलना ताकि यूज़र को पता चले कि प्रोसेसिंग हो रही है
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.value = "Sending...";

    // फॉर्म का पूरा डेटा इकट्ठा करना
    let formData = new FormData(this);

    // Google Apps Script URL पर डेटा भेजना
    fetch("https://script.google.com/macros/s/AKfycbzLYgQBSKtEJLI7eTpjiO-RFf32NeLhOWqkWOCDXoAnznMSsTyZMh1M5om_txKZ9UE/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // सफल होने पर मैसेज दिखाना और फॉर्म खाली करना
        alert("Thank you! आपका मैसेज सफलतापूर्वक भेज दिया गया है।");
        document.getElementById("contactForm").reset();
        submitBtn.value = "Send Message"; // बटन को वापस नार्मल करना
    })
    .catch(error => {
        alert("कुछ गलती हुई। कृपया अपने इंटरनेट कनेक्शन की जाँच करें।");
        submitBtn.value = "Send Message";
        console.error("Error!", error.message);
    });
});
