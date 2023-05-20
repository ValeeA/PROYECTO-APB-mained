const buttons = document.querySelectorAll('.category-button');
const items = document.querySelectorAll('.item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
