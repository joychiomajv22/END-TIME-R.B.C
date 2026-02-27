const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeNav() {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);