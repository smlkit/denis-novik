'use strict';
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNavigation = document.querySelector('.mobile-navigation');

openBtn.addEventListener('click', function() {
    mobileNavigation.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    console.log('click');
    mobileNavigation.style.display = 'none';
});
