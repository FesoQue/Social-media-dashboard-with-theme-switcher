const theme_toggle_btn = document.querySelector('.checkbox');

theme_toggle_btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
