import { concatenation } from './concatenation.js';

const button = document.getElementById('concat-btn');
const input = document.getElementById('input') as HTMLInputElement;

button?.addEventListener('click', () => {
  concatenation(input.value, 'Doe');
});
