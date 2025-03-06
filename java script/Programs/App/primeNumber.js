let Formel= document.getElementById('form-el');
let number=document.getElementById('num');
let resultEl = document.getElementById('result');

 Formel.addEventListener('submit', function(e)
{
    e.preventDefault();
    let  n=parseInt(number.value);

    if (isNaN(n)) {
        resultEl.textContent = "Please enter a valid number.";
        return;
    }

    if (isPrime(n)) {
        resultEl.textContent = n + " is a prime number.";
    } else {
        resultEl.textContent = n + " is not a prime number.";
    }
   
});

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}