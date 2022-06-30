const onSwitch = document.querySelector('.toggleOn');
const offSwitch = document.querySelector('.toggleOff');

offSwitch.addEventListener('click', () => {
    if(offSwitch.classList.contains('active')) {
        offSwitch.classList.remove('active');
        onSwitch.classList.add('active');
    }
});

onSwitch.addEventListener('click', () => {
    if(onSwitch.classList.contains('active')) {
        onSwitch.classList.remove('active');
        offSwitch.classList.add('active');
    }
})