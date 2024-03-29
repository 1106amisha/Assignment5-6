// Hard-coded exchange rate
const rate = 1.3589;

document.getElementById('convert').addEventListener('click', convert);

function convert() {
  // Get the input value and currency
  const amount = parseFloat(document.getElementById('amount').value);
  const currency = document.getElementById('currency').value;
  
  // Check if the amount is valid
  if (isNaN(amount) || amount < 0) {
    alert('Please enter a valid amount.');
    return;
  }
  
  // Convert the currency based on the selected option
  let convertedAmount;
  if (currency === 'cadToUsd') {
    convertedAmount = (amount / rate).toFixed(3);
    document.getElementById('result').textContent = `Converted amount: ${convertedAmount} USD`;
  } else {
    convertedAmount = (amount * rate).toFixed(3);
    document.getElementById('result').textContent = `Converted amount: ${convertedAmount} CAD`;
  }
  

}