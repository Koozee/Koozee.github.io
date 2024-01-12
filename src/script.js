const navmenu = document.getElementById('navmenu');

function onToogleNav(e) {
    e.name = e.name == 'menu-sharp' ? 'close-sharp' : 'menu-sharp';
    navmenu.classList.toggle('hidden');
}

const header = document.querySelector('header');
const fixnav = header.offsetTop;

// Navbar fixed
function handleScroll() {
    if (window.pageYOffset > fixnav) {
        header.classList.add('fixed', 'z-50');
    } else {
        header.classList.remove('fixed', 'z-50');
    }
}

window.addEventListener('scroll', handleScroll);

function animateNumber(targetElement, initialValue, finalValue) {
    let currentValue = initialValue;
    const increment = Math.ceil((finalValue - initialValue) / 130); // Increment setiap langkah animasi
    const delay = 50; // Delay antara langkah animasi (ms)

    function updateValue() {
        targetElement.innerText = currentValue + '+';
        currentValue += increment;

        if (currentValue <= finalValue) {
            setTimeout(updateValue, delay);
        } else {
            targetElement.innerText = finalValue + '+';
        }
    }

    updateValue();
}

// Tentukan nilai akhir untuk masing-masing elemen
const santriCountElement = document.getElementById('santriCount');
const materiCountElement = document.getElementById('materiCount');
const mentorCountElement = document.getElementById('mentorCount');

const finalSantriCount = 2000;
const finalMateriCount = 200;
const finalMentorCount = 100;

// Mulai animasi
animateNumber(santriCountElement, 0, finalSantriCount);
animateNumber(materiCountElement, 0, finalMateriCount);
animateNumber(mentorCountElement, 0, finalMentorCount);

//testimonial 
var cardtest1 = document.getElementById('cardtest1');
var cardtest2 = document.getElementById('cardtest2');
var cardtest3 = document.getElementById('cardtest3');
var cardtest4 = document.getElementById('cardtest4');
var cardtest5 = document.getElementById('cardtest5');
var cardtest6 = document.getElementById('cardtest6');
function readmoretoogle(num) {
    const card = document.getElementById(`cardtest` + num);
    var box = document.getElementById('box' + num);
    var text = document.getElementById('text' + num);
    var textmore = document.getElementById('textmore' + num);
    var readmore = document.getElementById('readmore' + num);
    var close = document.getElementById('close' + num);
    var avatar = document.getElementById('avatar' + num);
    var morecard = document.getElementById('morecard');

    box.classList.remove('h-1/2');
    box.classList.add('h-max');
    textmore.classList.remove('hidden');
    text.classList.add('hidden');
    readmore.classList.add('hidden');
    close.classList.remove('hidden');
    avatar.classList.remove('w-1/3');
    avatar.classList.add('w-1/6');
    card.classList.remove(`w-11/12`);
    card.classList.add('w-full');
    morecard.classList.add('hidden');

    // Hide other cards
    for (let i = 1; i <= 6; i++) {
        if (i !== num) {
            document.getElementById(`cardtest` + i).classList.add('hidden');
        }
    }
}
function closetoogle(num) {
    const card = document.getElementById(`cardtest` + num);
    var box = document.getElementById('box' + num);
    var text = document.getElementById('text' + num);
    var textmore = document.getElementById('textmore' + num);
    var readmore = document.getElementById('readmore' + num);
    var close = document.getElementById('close' + num);
    var avatar = document.getElementById('avatar' + num);
    var morecard = document.getElementById('morecard');

    box.classList.add('h-1/2');
    box.classList.remove('h-max');
    textmore.classList.add('hidden');
    text.classList.remove('hidden');
    readmore.classList.remove('hidden');
    close.classList.add('hidden');
    avatar.classList.add('w-1/3');
    avatar.classList.remove('w-1/6');
    card.classList.add(`w-11/12`);
    card.classList.remove('w-full');
    morecard.classList.remove('hidden');

    // Show all cards
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`cardtest` + i).classList.remove('hidden');
    }
}

function morecard() {
    const arrowicon = document.getElementById('arrowicon');

    // Ganti ikon panah
    arrowicon.setAttribute('name', arrowicon.getAttribute('name') === 'chevron-down' ? 'chevron-up' : 'chevron-down');

    // Show all cards
    for (let i = 4; i <= 6; i++) {
        document.getElementById(`cardtest` + i).classList.toggle('hidden');

    }
    // Toggle "Cerita Lainnya" and "Tutup" text
    const moreCardText = document.getElementById('morecardtext');
    const isOpen = !document.getElementById('cardtest4').classList.contains('hidden');
    moreCardText.innerText = isOpen ? 'Tutup' : 'Cerita Lainnya';
}
