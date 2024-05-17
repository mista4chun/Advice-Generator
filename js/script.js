const adviceEl = document.getElementById('advice');
const adviceBtn = document.getElementById('advice-btn');
const num = document.querySelector('.num');

async function generateAdvice() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    adviceEl.innerHTML = `"${data.slip.advice}"`;
    num.innerHTML = '#' + data.slip.id;
  } catch (error) {
    adviceEl.innerHTML =` ${error}`
  }

}

adviceBtn.addEventListener('click', generateAdvice);
document.addEventListener('DOMContentLoaded', generateAdvice);
