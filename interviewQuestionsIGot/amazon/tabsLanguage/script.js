const tabs = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontent');

const removeActive = () => {
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
}

const removeHidden = () => {
    tabContents.forEach(tabContent => {
        tabContent.classList.add('hidden');
    })
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        removeActive();
        tab.classList.add('active');
        const content = document.getElementById(e.target.innerHTML);
        removeHidden();
        content.classList.remove('hidden');
    })
})



