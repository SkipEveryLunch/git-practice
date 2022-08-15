let count = 0;
const greet = () => {
  const exclamation = '!'.repeat(count);
  alert(`Hello${exclamation}`);
  count++;
};

const button = document.getElementById('greet');
button.onclick = greet;
