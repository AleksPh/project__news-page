const text = "Contact Us";
    const speed = 100; 
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("textContainer").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();



    const phoneInput = document.querySelector("#phone");

    const iti = intlTelInput(phoneInput, {
      initialCountry: "br",
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" 
    });
  
    
    