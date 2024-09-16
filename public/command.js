document.addEventListener('DOMContentLoaded', function() {
    const logButton = document.getElementById('log-btn');
    const errorButton = document.getElementById('error-btn');

    logButton.addEventListener('click', () => {
        fetch('/get-log')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });

    errorButton.addEventListener('click', () => {
        fetch('/get-error')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });
})
