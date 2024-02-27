document.getElementById('hide-checkbox').addEventListener('click', function() {
    console.log('clicked')
    document.documentElement.classList.toggle('dark-theme');
});