// Popular tab
let popularTabs = document.querySelectorAll('.popular-tab');
let popularItems = document.querySelectorAll('.popular-items');

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
    });
});


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
