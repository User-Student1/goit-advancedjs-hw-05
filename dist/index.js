import { concatenation } from './concatenation.js';
const button = document.getElementById('concat-btn');
const input = document.getElementById('input');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    concatenation(input.value, 'Doe');
});
//# sourceMappingURL=index.js.map