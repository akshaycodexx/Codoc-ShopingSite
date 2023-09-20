
// Get references to the Special Offers and Best Selling buttons
const specialOffersButton = document.querySelector('.btnop1');
const bestSellingButton = document.querySelector('.btnop2');

// Add a click event listener to the Special Offers button
specialOffersButton.addEventListener('click', function() {
// Change the background color to white
this.style.backgroundColor = 'white';
// Change the text color to black
this.querySelector('.textbtn').style.color = '#074727';
this.querySelector('.textbtn').style.fontWeight = 'bold';

// Reset the hover effect for the Best Selling button
bestSellingButton.style.backgroundColor = '';
bestSellingButton.querySelector('.textbtn').style.color = '';
});

// Add a click event listener to the Best Selling button
bestSellingButton.addEventListener('click', function() {
// Change the background color to white
this.style.backgroundColor = 'white';
// Change the text color to black
this.querySelector('.textbtn').style.color = '#074727';
this.querySelector('.textbtn').style.fontWeight = 'bold';

// Reset the hover effect for the Special Offers button
specialOffersButton.style.backgroundColor = '';
specialOffersButton.querySelector('.textbtn').style.color = '';
});



const imagehover=document.querySelector('')