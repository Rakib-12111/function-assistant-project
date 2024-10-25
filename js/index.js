const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
  const income = parseFloat(document.getElementById('income').value);
  const softwer = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value); 
  const internet = parseFloat(document.getElementById('internet').value);
 const totalExpenses = softwer + courses + internet;
 const balance = income - totalExpenses;
 const totalExpensesElement = document.getElementById('total-expenses');
 totalExpensesElement.innerText = totalExpenses;
 
      
})