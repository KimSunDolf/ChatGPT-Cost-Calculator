const modelSelect = document.getElementById('model');
const resultText = document.getElementById('result');

const wordCountButtons = document.querySelectorAll('.word-count-btn');
wordCountButtons.forEach(button => {
  button.addEventListener('click', () => {
    const words = button.getAttribute('data-words');
    document.getElementById('word-count').value = words;
    calculateTotal(words);
  });
});

modelSelect.addEventListener('change', () => {
  calculateTotal();
});

document.getElementById('word-count').addEventListener('input', () => {
  calculateTotal();
});

function calculateTotal(words) {
  const wordCount = words || document.getElementById('word-count').value;
  const model = modelSelect.value;
  let price = 0;

  switch (model) {
    case 'gpt3.5-turbo':
      price = 0.002;
      break;
    case 'gpt-3.5-turbo-instruct':
      price = 0.004;
      break;
    case 'gpt4-8k':
      price = 0.06;
      break;
    case 'gpt4-32k':
      price = 0.12;
      break;
      case 'gpt4-128k':
        price = 0.03;
        break;      
    default:
      break;
  }

  const total = (wordCount / 500) * price;
  resultText.textContent = '$' + total.toFixed(2);
}

calculateTotal();