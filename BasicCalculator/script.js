const outputField = document.getElementById('output-readonly');

function clearOutput() {
    outputField.value = '';
}

function updateOutput(value) {
    outputField.value += value;
}

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateOutput(button.textContent);
    });
});

const operationButtons = document.querySelectorAll('.operations');
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'ac') {
            clearOutput();
        } else if (button.id === 'delete') {
            outputField.value = outputField.value.slice(0, -1);
        } else if (button.id === 'sum') {
            try {
                const result = eval(outputField.value);
                outputField.value = result.toFixed(2);
            } catch (error) {
                alert('Invalid input!');
            }
        } else {
            updateOutput(' ' + button.textContent + ' ');
        }
    });
});
