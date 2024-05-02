const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result-text");


/* Events */
checkButton.addEventListener('click', () => {
  if (textInput.value === '') {
    window.alert("Please input a value");
  }
  else {
    const textInputCleaned = cleanInputString(textInput.value);
    isPalindrome(textInputCleaned);
  }
});

/* FUNCTIONS */
/* ^ indicates "not" "[\s^\w]/g", "W" can also be used */
function cleanInputString(str) {
  const regex = /[(\s+)(\W+)(_+)]/g; /*WARNING
  "w" matches all alphanumerical caracters, including UNDERSCORE*/
  return str.replace(regex, '').toLowerCase();
}

function isPalindrome(exp) {
const expToCheck = exp.split('').reverse().join('');

if (expToCheck === exp) {
resultText.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`;
}
else {
  resultText.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`;
}
}