const ratingButtons = document.querySelectorAll('.group button');
const submitButton = document.querySelector('.submit');
let selectedRating = null;
const rating = document.getElementById("rating");
const thanksContainer = document.querySelector(".thank-you");
const mainContainer = document.querySelector(".main");

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active')
        selectedRating = button.getAttribute('data-value')
    })
})

thanksContainer.style.display = 'none'
submitButton.addEventListener('click', () => {
    if (selectedRating) {
      mainContainer.style.display ='none'
      thanksContainer.style.display = ''
      rating.innerHTML = selectedRating;
    } else {
      alert('Please select a rating before submitting!')
    }
})

