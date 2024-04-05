// Popular tab
// let popularTabs = document.querySelectorAll('.popular-tab');
// let popularItems = document.querySelectorAll('.popular-items');

// popularTabs.forEach(function (tab, index) {
//     tab.addEventListener('click', function() {
//         popularTabs.forEach(function (t) {
//             t.classList.remove('active');
//         });
//         tab.classList.add('active');

//         popularItems.forEach(function (item, i) {
//             if (i === index) {
//                 item.classList.add('active');
//             } else {
//                 item.classList.remove('active');
//             }
//         });
//     });
// });


let popularTabs = document.querySelectorAll('.popular-tab');
let popularItems = document.querySelectorAll('.popular-items');
let popularTabBg = document.querySelector('.popular-tab-bg');

try {
    let initialTabWidth = popularTabs[0].offsetWidth;
    popularTabBg.style.width = initialTabWidth + 'px';
    popularTabBg.style.left = '1.4px';
    
    popularTabs.forEach(function (tab, index) {
        tab.addEventListener('click', function() {
            popularTabs.forEach(function (t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');
    
            popularItems.forEach(function (item, i) {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
    
            let tabWidth = tab.offsetWidth; 
            popularTabBg.style.width = tabWidth + 'px'; 
            popularTabBg.style.left = (index * tabWidth + 1.4) + 'px';
        });
    });
    
} catch (error) {}




// Menu active
let menuLinks = document.querySelectorAll('.bottom-menu-link');
menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
        menuLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        menuLink.classList.add('active');
    });
});


// Radio show
let searchBtn = document.querySelector('.blog-search-btn');
let blogRadio = document.querySelector('.blog-radio');
let blogRadioItems = document.querySelectorAll('.blog-radio-item');

try {
    searchBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        blogRadio.classList.toggle('active');
    });
    blogRadioItems.forEach(function (item) {
        item.addEventListener('click', function () {
            searchBtn.classList.remove('active');
            blogRadio.classList.remove('active');
        })
    })
} catch (error) {}


// Calendar modal
let tripCalendar = document.querySelector('.trip-calendar');
let calendarModal = document.querySelector('.calendar-modal-wrap');
let calendarClose = document.querySelectorAll('.closeBtn');

try {
    tripCalendar.addEventListener('click', function() {
        calendarModal.classList.toggle('active');
    })

    calendarClose.forEach(function(tab) {
        tab.addEventListener('click', function() {
            calendarModal.classList.remove('active');
        })
    })
} catch (error) {}


// Accordion
let accordionHead = document.querySelectorAll('.accordion-head');
let accordionBody = document.querySelectorAll('.question-accordion');

let previousIndex = null;

accordionHead.forEach(function (tabHead, index) {
    tabHead.addEventListener('click', function (e) {
        if (previousIndex !== null && previousIndex !== index) {
            accordionBody[previousIndex].classList.remove('active');
            updateIcon(accordionBody[previousIndex], false); 
        }
        
        accordionBody[index].classList.toggle('active');
        updateIcon(accordionBody[index], accordionBody[index].classList.contains('active')); 
        
        previousIndex = index;
    });
});


function updateIcon(accordionBodyElement, isActive) {
    let plusIcon = accordionBodyElement.querySelector('.accordion-plus');
    let minusIcon = accordionBodyElement.querySelector('.accordion-minus');
    
    if (isActive) {
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'inline-block';
    } else {
        plusIcon.style.display = 'inline-block';
        minusIcon.style.display = 'none';
    }
}
