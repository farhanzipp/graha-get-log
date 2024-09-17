document.addEventListener('DOMContentLoaded', function() {
    const logButton = document.getElementById('log-btn');
    const errorButton = document.getElementById('error-btn');
    const logOutput = document.getElementById('log-output')

    const showMessage= (msg) => {
        logOutput.innerHTML = msg;
        setTimeout(() => {
            logOutput.innerHTML="";
        }, 2000);
    }

    logButton.addEventListener('click', () => {
        fetch('/get-log')
        .then(response => response.text())
        .then(data => {
            showMessage(data)
        })
        .catch(error => {
            showMessage("error updating log")
        });
    });

    errorButton.addEventListener('click', () => {
        fetch('/get-error')
        .then(response => response.text())
        .then(data => {
            showMessage(data)
        })
        .catch(error => {
            showMessage("error updating log")
        });
    });

})
