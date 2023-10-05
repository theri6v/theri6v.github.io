// Flash the logo on hover
const logo = document.getElementById('logo');
logo.addEventListener('mouseover', () => {
    logo.style.animation = 'flash 0.5s infinite';
});

logo.addEventListener('mouseout', () => {
    logo.style.animation = 'none';
});
