// Menu active
let menuLinks = document.querySelectorAll('.bottom-menu-link');
menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
        menuLinks.forEach(function (link) {
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
} catch (error) { }


// Calendar modal
let tripCalendar = document.querySelector('.trip-calendar');
let calendarModal = document.querySelector('.calendar-modal-wrap');
let calendarClose = document.querySelectorAll('.closeBtn');

try {
    tripCalendar.addEventListener('click', function () {
        calendarModal.classList.toggle('active');
    })

    calendarClose.forEach(function (tab) {
        tab.addEventListener('click', function () {
            calendarModal.classList.remove('active');
        })
    })
} catch (error) { }


// Accordion
let items = document.querySelectorAll('.question-accordion');
let previousIndex = null;

items.forEach((item, index) => {
    let header = item.querySelector('.accordion-head');
    let content = item.querySelector('.question-body');
    let accordionBody = document.querySelectorAll('.question-body');

    header.addEventListener('click', () => {
        if (previousIndex !== null && previousIndex !== index) {
            accordionBody[previousIndex].style.maxHeight = null;
            updateIcon(accordionBody[previousIndex], false);
            accordionBody[previousIndex].classList.remove('active');
        }

        content.classList.toggle('active');
        content.style.maxHeight = content.classList.contains('active') ? content.scrollHeight + 12 + 'px' : null;
        updateIcon(content, content.classList.contains('active'));

        previousIndex = index;
    });
});

function updateIcon(content, isActive) {
    let accordionBodyElement = content.parentElement;
    let plusIcon = accordionBodyElement.querySelector('.accordion-plus');
    let minusIcon = accordionBodyElement.querySelector('.accordion-minus');

    if (isActive) {
        plusIcon.style.opacity = '0';
        minusIcon.style.opacity = '1';
    } else {
        plusIcon.style.opacity = '1';
        minusIcon.style.opacity = '0';
    }
}


// Search inpur
let searchInput = document.getElementById('search');
let clearButton = document.querySelector('.blog-search-x');

try {
    searchInput.addEventListener('input', function() {
        if (this.value && this.value.length > 0) {
            clearButton.classList.add('active');
        } else {
            clearButton.classList.remove('active');
        }
    });
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.classList.remove('active');
    });
} catch(error){};


// More text
let moreButton = document.querySelector('.question-text-more');
let hiddenText = document.querySelector('.question-more');

try {
    moreButton.addEventListener('click', function() {
        hiddenText.classList.toggle('show');
        moreButton.style.display = 'none';
    });
} catch(error) {}


// Station active
let stationWords = document.querySelectorAll('.station-word-link');
stationWords.forEach(function (stationWord) {
    stationWord.addEventListener('click', function () {
        stationWords.forEach(function (link) {
            link.classList.remove('active');
        });
        stationWord.classList.add('active');
    });
});


// Popular tab
let popularTabs = document.querySelectorAll('.popular-tab');
let popularItems = document.querySelectorAll('.popular-items');
let popularTabBg = document.querySelector('.popular-tab-bg');

try {
    let initialTabWidth = popularTabs[0].offsetWidth;
    popularTabBg.style.width = initialTabWidth + 'px';
    popularTabBg.style.left = '1.4px';

    popularTabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
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

} catch (error) { }


// Train tabs
let trainTabs = document.querySelectorAll('.train-tab');
let trainTabBg = document.querySelector('.train-tab-bg');
let trainItems = document.querySelectorAll('.train-cards-items');

try {
    let initialTabWidth = trainTabs[0].offsetWidth;
    trainTabBg.style.width = initialTabWidth + 'px';
    trainTabBg.style.left = '1.6px';

    trainTabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            trainTabs.forEach(function (t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');

            let tabWidth = tab.offsetWidth;
            trainTabBg.style.width = tabWidth + 'px';
            trainTabBg.style.left = (index * tabWidth + 1.6) + 'px';

            trainItems.forEach(function (item) {
                item.classList.remove('active');
            });

            trainItems[index].classList.add('active');
        });
    });

} catch (error) { }


// Train cards close
let cardsClose = document.querySelectorAll('.train-cards-close');
let trainCards = document.querySelectorAll('.train-cards');

cardsClose.forEach(function(closeButton, index) {
    closeButton.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            trainCards[index].classList.remove('active');
            this.querySelector('span').textContent = 'Показать ушедшие (4 поезда)';
        } else {
            this.classList.add('active');
            trainCards[index].classList.add('active');
            this.querySelector('span').textContent = 'Скрыть ушедшие (4 поезда)';
        }
    });
});




// Train active
let trainInfoTabs = document.querySelectorAll('.train-info-tab');
trainInfoTabs.forEach(function (trainInfoTab) {
    trainInfoTab.addEventListener('click', function () {
        trainInfoTabs.forEach(function (link) {
            link.classList.remove('active');
        });
        trainInfoTab.classList.add('active');
    });
});