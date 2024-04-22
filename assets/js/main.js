$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('.navbar').addClass('header-fixed');
        }
        else {
            $('.navbar').removeClass('header-fixed');
        }
    });
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

function sendToWhatsApp() {
    // Get user input values
    var fullName = document.getElementById("fullname").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    
    // Construct WhatsApp message
    var message = "Full Name: " + fullName + "\n" +
                  "E-mail: " + email + "\n" +
                  "Phone Number: " + phoneNumber + "\n" +
                  "Subject: " + subject;
    
    // Send data to WhatsApp
    window.open("https://wa.me/+916291002357/?text=" + encodeURIComponent(message), "_blank");
};

function BAsendToWhatsApp() {
    // Get user input values
    var BAfullName = document.getElementById("BAfullname").value;
    var BAphoneNumber = document.getElementById("BAphonenumber").value;
    var BAemail = document.getElementById("BAemail").value;
    var BAselectdate = document.getElementById("BAselectdate").value;
    var BAservice = document.getElementById("BAservice").value;
    
    // Construct WhatsApp message
    var BAmessage = "Full Name: " + BAfullName + "\n" +
                  "E-mail: " + BAemail + "\n" +
                  "Phone Number: " + BAphoneNumber + "\n" +
                  "Service: " + BAservice + "\n" +
                  "Selected Date: " + BAselectdate;
    
    // Send data to WhatsApp
    window.open("https://wa.me/+916291002357/?text=" + encodeURIComponent(BAmessage), "_blank");
};


$('.testi-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
})
$('.vdo-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }
})
$('.gallery-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    dots: false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1.5
        },
        1000:{
            items: 2.5
        },
        1200:{
            items: 3.5
        }
    }
})
$('.sd-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: false,
    dots: false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        },
        1200:{
            items: 1
        }
    }
})