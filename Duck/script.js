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




const form = document.querySelector(".blur")   

console.log(document.getElementById('totalSum').textContent);


// Функция для отправки письма
function sendEmail(event) {
  event.preventDefault(); // предотвращаем стандартную отправку формы

  // Получаем данные из формы
  var name = document.getElementById("name").value;
  var reflink = document.getElementById("reflinks").value;
  var link = document.getElementById("link").value;
  var amount = document.getElementById("numberRef").value;
  var selectedOption = document.querySelector('#reflinks option:checked');
  var gameAmount = totalSum.textContent

  // Формируем тело письма
  var body = `
    Имя: ${name} <br>
    Выбранная игра: ${reflink} <br>
    Ссылка: ${link} <br>
    Количество рефералов: ${amount} <br>
    ${gameAmount}`;

  // Отправка email через SMTP.js
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "expady@gmail.com",
    Password : "F48EC7C5CE3EE629D158116BA352FE786A20",
    To: 'expady@gmail.com',  // Твой email
    From: "expady@gmail.com",  // Почта отправителя
    Subject: "Новое сообщение с сайта",
    Body: body
  }).then(
    message => {
      alert(message)
      console.log(body);
      
      form.reset(); // Очищаем форму после отправки
    }
  ).catch(
    error => alert("Ошибка при отправке: " + error)
  );
}

// Добавляем слушатель на отправку формы
form.addEventListener("submit", sendEmail);

// Email.send({
//   Host : "smtp.elasticemail.com",
//   Username : "expady@gmail.com",
//   Password : "F48EC7C5CE3EE629D158116BA352FE786A20",
//   To : 'expady@gmail.com',
//   From : "expady@gmail.com",
//   Subject : "This isads the subject",
//   Body : "And thisadssadasd is the body"
// }).then(
// message => alert(message)
// );
