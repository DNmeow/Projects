const createBtn = document.querySelector('.create')
const AddBalanceBlock = document.querySelector('.AddBalanceBlock')
const body = document.body
const xmark = document.querySelector('.xmark')

createBtn.addEventListener('click', ()=> {
  AddBalanceBlock.style.display = 'block'
  body.style.overflow = 'hidden'
  AddBalanceBlock.style.animation = 'opacity .4s ease-in-out';
})

xmark.addEventListener('click', ()=>{
  closeBlock()
})

function closeBlock(){
  AddBalanceBlock.style.animation = 'opacityOpossite .4s ease-in-out';
  AddBalanceBlock.style.display = 'none'
  body.style.overflow = 'auto'
}
//



const transactions = JSON.parse(localStorage.getItem
  ('transactions')) || []

const formatter = new Intl.NumberFormat("ua-UA", {
  style: 'currency',
  currency: 'UAH', 
  currencyDisplay: 'symbol' 
});

const formatterDollar = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD', 
  currencyDisplay: 'symbol' 
});

const formatterEUR = new Intl.NumberFormat("en-EU", {
  style: 'currency',
  currency: 'EUR', 
  currencyDisplay: 'symbol' 
});

const list = document.querySelector('.transactions')
const form = document.querySelector('.AddBalanceBlock')
const status = document.querySelector('.status')
const balanceUAH = document.querySelector('.balanceUAH')
const balanceDollar = document.querySelector('.balanceDollar')
const balanceEuro = document.querySelector('.balanceEuro')

AddBalanceBlock.addEventListener('submit', addTransaction)

function updateTotal(){
  const incomeTotal = transactions
    .filter((trx) => trx.type === "income")
    .reduce((total, trx) => total + trx.amount, 0);

  const expenseTotal = transactions
    .filter((trx) => trx.type === "expense")
    .reduce((total, trx) => total + trx.amount, 0);

  const balanceTotal = incomeTotal - expenseTotal;

  // console.log(incomeTotal, expenseTotal);
  
  balanceUAH.textContent = formatter.format(Math.abs(balanceTotal));
  balanceDollar.textContent = formatterDollar.format(Math.abs(balanceTotal / 39));
  balanceEuro.textContent = formatterEUR.format(Math.abs(balanceTotal / 42));

  if (balanceTotal < 0) {
    balanceUAH.textContent = '-' + balanceUAH.textContent;
    balanceDollar.textContent = '-' + balanceDollar.textContent;
    balanceEuro.textContent = '-' + balanceEuro.textContent;
  }
}


function renderList() {
  list.innerHTML = '';
  
  if(transactions.length === 0){
    status.textContent = 'No Transactions';
    return;
  } else{
    status.textContent = ''
  }

  transactions.forEach(transaction => {
    const { name, date, amount, type, id} = transaction;
    const div = document.createElement('div');
    div.classList.add('trans-block');
    const sign = 'income' === type ? 1 : -1;
  
    let imgSrc = ''; 
    let bgColor = ''; 
  
    if (name === "Travel") {
      imgSrc = 'img/plane-solid.svg'; 
      bgColor = 'travel'
    } 
    else if (name === "Shopping") {
      imgSrc = 'img/basket-shopping-solid.svg';
      bgColor = 'shopping'
    }
    else if (name === "Food") {
      imgSrc = 'img/mug-hot-solid.svg';
      bgColor = 'food'
    }
    else if (name === "Adding") {
      imgSrc = 'img/sack-dollar-solid.svg';
      bgColor = 'replenishment'
    }
  
    div.innerHTML = `
      <div class="trans-block-status">
        <div class="trans-img-bg ${bgColor}">
          <img src="${imgSrc}" alt="" class="trans-img">
        </div>
      </div>
      
      <h1 class="trans-name">${name}</h1>
  
      <div class="transDate-block">
      <h1 class="amount ${type}" >${formatter.format(amount * sign)}</h1>
        <p class="date">${new Date(date).toLocaleDateString()}</p>
      </div>
    `;
  
    list.appendChild(div);
  });
} 

renderList()
updateTotal()

function addTransaction(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const amount = parseFloat(formData.get('amount'));

  const type = amount <= 0 ? "expense" : "income";

  transactions.push({
    id: transactions.length + 1,
    name: formData.get('selector'),
    amount:  Math.abs(amount),
    date: new Date(formData.get('date')),
    type: type,
  })




  this.reset();
  renderList();
  updateTotal();
  SaveTransactions();
  closeBlock();
}

function SaveTransactions(){
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date))

  localStorage.setItem('transactions', JSON.stringify(transactions))

  console.log('Saved');
}

