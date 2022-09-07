const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.web');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) =>
  n.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
  })
);

console.log('kak ini jsnya aku liat tutorial di youtube');
console.log('responsive navbar');
