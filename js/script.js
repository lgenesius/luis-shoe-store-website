// navbar

window.addEventListener('scroll', function(){
    var nav = document.querySelector('.navigation');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

const menuToggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('.navigation ul');

function openNavigationBar(){
    menuToggle.classList.toggle('change-width');
    nav.classList.toggle('slide');
}

menuToggle.addEventListener('click', openNavigationBar);

const menuCollapse = document.querySelectorAll('.navigation ul li a');

menuCollapse.forEach(item => item.addEventListener('click', function(){
    if(nav.classList.contains('slide')){
        menuToggle.click();
    }
}));

// countdown

const countdown = document.querySelector('.countdown');
const launchDate = new Date('Dec 30, 2021 13:00:00').getTime();

const setTheInterval = setInterval(() => {
    const now = new Date().getTime();

    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 *24));
    const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    if(distance < 0){
        clearInterval(setTheInterval);

        countdown.style.color = 'white';
        countdown.innerHTML = 'Promo Ended!';
    }
},1000);

// slider

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

// testimony

const testItem = document.querySelectorAll('.testimony-item');
const testDetail = document.querySelectorAll('.testimony-details-content');

function removeOpacity(){
    testItem.forEach(item => item.classList.remove('testimony-opacity'));
}

function removeShow(){
    testDetail.forEach(detail => detail.classList.remove('show'));
}

function selectItem(e){
    removeOpacity();
    removeShow();

    this.classList.add('testimony-opacity');

    const testContentItems = document.querySelector(`#${this.id}-content`);

    testContentItems.classList.add('show');
}

testItem.forEach(item => item.addEventListener('click', selectItem));