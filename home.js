document.getElementById('presentBtn').addEventListener('click', function () {
    alert('You clicked Present Tenses! Let\'s learn and practice!');
});

document.getElementById('pastBtn').addEventListener('click', function () {
    alert('You clicked Past Tenses! Time to dive into the past!');
});

document.getElementById('futureBtn').addEventListener('click', function () {
    alert('You clicked Future Tenses! Let\'s get ready for the future!');
});




window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.name, .center').forEach(el => {
        el.style.opacity = '1';
    });
});
