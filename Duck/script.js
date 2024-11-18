let gif = document.getElementById('gif')
const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')
const button = document.getElementById('button')
const span = document.getElementById('span')
const body = document.body


const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')


var slide = 1


function checkSlide(){
  if (slide === 2){
    h1.style.display = 'none'
    h2.textContent = 'Усі реферали видаються вручну, сайт зробленний для бистрішего вручення'
    gif.src = 'img/gif2.gif';
    body.style.animation = "animation1 1s forwards";
    gif.style.width = '500px';
  }
  if (slide === 3){
    h1.style.display = 'none'
    h2.textContent = 'Час очікування: 30хв - 12 годинСередчій час очікування:1 година '
    gif.src = 'img/gif2.gif';
    gif.style.width = '500px';
    span.textContent = 'Заказати'
    body.style.animation = "animation2 1s forwards";
  }
  if (slide === 4){
    slide1.style.display ='none'
    slide2.style.display ='block'
    console.log(slide1);
    
  }
}

button.addEventListener('click', ()=>{
  console.log(slide += 1);
  checkSlide()
})


const reflinks = document.getElementById('reflinks')
const reflink = document.getElementById('reflink')
const inputForm = document.getElementById('inputForm')

let value2 = 0; 
document.getElementById('totalSum').textContent = 'Сума: 0₴';

// When the game is selected from the dropdown
document.getElementById('reflinks').addEventListener('change', function() {
  // Get the selected option
  var selectedOption = this.options[this.selectedIndex];

  // Set the value of the reflink input to the name of the selected game
  // document.querySelector('input[name="reflink"]').value = selectedOption.value;

  // Get the value2 attribute (the amount associated with the selected game)
  value2 = selectedOption.getAttribute('value2');
  
  // Log the selected value2
  console.log(value2);
});

document.getElementById('numberRef').addEventListener('input', function() {
  // Get the number of referrals entered
  var referrals = this.value || 0;

  // Calculate the total sum
  const totalSum = value2 * referrals;

  // Update the total sum display
  document.getElementById('totalSum').textContent = 'Сума: ' + totalSum + '₴';
});

// const form = document.querySelector("blur")   

// document.getElementById('inputForm').addEventListener('submit', function(event) { 
//   event.preventDefault(); // Prevent form submission 
//   let allFilled = true; 
//   const inputs = document.querySelectorAll('#inputForm input'); 
//   inputs.forEach(function(input) {
//     if (input.value.trim() === '') { 
//       allFilled = false; 
//       input.classList.add('error'); // Highlight empty inputs 
//     } else { 
//       input.classList.remove('error');
//      } }); 
//      if (allFilled) { 
//       alert('All inputs are filled!'); // You can proceed with form submission here 
//       } else { alert('Заповніть всі форми.'); } });




