const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

const initialtranslateLTR = -48 * 4;
const initialtranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = initialtranslateLTR + translateX;
    } else {
      totalTranslate = -(initialtranslateRTL + translateX);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById("line1");
const line4 = document.getElementById("line4");

setupIntersectionObserver(line1, true, 0.15);

setupIntersectionObserver(line4, true, 0.15);

const email = document.getElementById("email");
const Fullname = document.getElementById("name");
const message = document.getElementById("message-box");


function sendEmail() {
  const bodyMessage = `Full Name: ${Fullname.value} <br> email: ${email.value} <br> Message: ${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mainsudip25@gmail.com",
    Password: "931189AF86250F7F5EE533B90D4B2DE3349A",
    To: "mainsudip25@gmail.com",
    From: "mainsudip25@gmail.com",
    Subject: "Contact Form Enquiry",
    Body: bodyMessage
  }).then((message) => alert(message));
}
