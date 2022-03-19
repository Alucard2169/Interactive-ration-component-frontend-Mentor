
let thankCard = document.querySelector('.thanks-page');
let homePage = document.querySelector('.homepage');
let rating = document.querySelector('.stats');
let buttons = document.querySelectorAll(".rating");
let submit = document.querySelector('.submit')
 
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttons.forEach((btn)=>{
          btn.classList.remove('highlight');
        })
        e.target.classList.add('highlight');
        console.log(e.target.value)
        rating.innerText = e.target.value + " ";
    })
})


submit.addEventListener('click', () => {
    homePage.style.display = 'none';
    thankCard.style.display = 'flex'
})