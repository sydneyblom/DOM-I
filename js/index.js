const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let mainImg = document.querySelector('#cta-img');
mainImg.setAttribute ('src', siteContent["cta"]["img-src"]);


let midImg = document.querySelector('#middle-img');
midImg.setAttribute ('src', siteContent["main-content"]["middle-img-src"]);


const nav = document.querySelectorAll('a');
nav.forEach((element, index) => {
  element.textContent = siteContent['nav'][`nav-item-${index + 1}`];  
});

const navA = document.querySelectorAll('a');
navA.forEach( element => {
 element.style.color = "green";
})



let headerText = document.querySelector('h1');
headerText.innerText = siteContent.cta.h1;

let buttonSelector = document.querySelector('.cta button');
buttonSelector.textContent = siteContent["cta"]["button"];

const textHeading = document.querySelectorAll('h4');
textHeading[0].textContent = siteContent["main-content"]["features-h4"];
textHeading[1].textContent = siteContent['main-content']['about-h4'];
textHeading[2].textContent = siteContent['main-content']['services-h4'];
textHeading[3].textContent = siteContent['main-content']['product-h4'];
textHeading[4].textContent = siteContent['main-content']['vision-h4'];

const textCont = document.querySelectorAll('p');
textCont[0].textContent = siteContent["main-content"]["features-content"];
textCont[1].textContent = siteContent['main-content']['about-content'];
textCont[2].textContent = siteContent['main-content']['services-content'];
textCont[3].textContent = siteContent['main-content']['product-content'];
textCont[4].textContent = siteContent['main-content']['vision-content'];

let contactHeading = document.querySelector('section.contact h4');
contactHeading.textContent = siteContent.contact['contact-h4'];

let contactInfo = document.querySelectorAll('section.contact > p');
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;


document.querySelector("footer p").textContent = siteContent.footer.copyright;

const newContent = document.createElement('footer');
newContent.textContent ="Website made by Sydney Blom";
const secondaryContent = document.querySelector('body');
secondaryContent.append(newContent);

const home = document.createElement("a");
const homeText = document.createTextNode("Home");
home.prepend(homeText);
home.style.color = "green";
document.querySelector("nav").appendChild(home);


