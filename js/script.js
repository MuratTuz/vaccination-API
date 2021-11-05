

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector( ".nav-menu" );
const sendLetter = document.getElementById( 'send-letter' );


const fname = document.getElementById( 'fname' );
const lname = document.getElementById( 'lname' );
const email = document.getElementById( 'email' );
const call = document.querySelector( '.call' );
const mail = document.querySelector( '.mail' );
const letter = document.querySelector( '.envelope' );

const nameEmoji = '&#128526;';
const mailEmoji = '📨';

var firstName = '', lastName = '', userEmail = '';

letter.addEventListener( 'mouseover', () => {
    if ( email.value === '' ) userEmail = 'Your email';
    else userEmail = email.value.slice(0,15);
    if ( fname.value != '' || lname.value != '' ) {
        firstName = fname.value.slice(0,19);
        lastName = lname.value.slice(0,19);        
    }
    else {
        firstName = 'Your name';
    }
    
    mail.innerHTML = `${mailEmoji} ${userEmail}`;
    call.innerHTML = `${nameEmoji} ${firstName} ${lastName}`;

})



/* --- Hamburger menu --- */
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
/* ------------- Form send button ------------- */

sendLetter.addEventListener( "click", () => {
    setTimeout( () => {
        window.location = window.location.href;
    }, 1000 );
    
} );

// Header name text animation - Wrap every letter in a span
var textWrapper = document.querySelector('.anime-h1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anime-h1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.anime-h1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });