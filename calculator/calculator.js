window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount: 50000, years: 15, rate: 4.5};
  const amount = document.getElementById('loan-amount');
  amount.value = defaultValues.amount;
  const years = document.getElementById('loan-years');
  years.value = defaultValues.years;
  const rate = document.getElementById('loan-rate');
  rate.value  = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(defaultValues) {
  // let values = {amount: P, years: n, rate: i};
  let i = (defaultValues.rate/100)/12;
  let n = Math.floor(defaultValues.years * 12);
  let payment = (defaultValues.amount * i) / (1 - Math.pow((1 + i), -n));
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPage = document.getElementById("monthly-payment");
  monthlyPage.innerText = "$" + monthly;
}
