// Small bounce effect so cats feel alive
const cats = document.querySelectorAll('.cat');

cats.forEach(cat => {
  setInterval(() => {
    cat.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      cat.style.transform = 'translateY(0)';
    }, 200);
  }, 600);
});
