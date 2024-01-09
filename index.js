document.addEventListener('DOMContentLoaded', function() {
    console.log('hello world');
    const buttonContainer = document.getElementById('buttonContainer');
    TemplateLib.renderButton(buttonContainer);

    const inputContainer = document.getElementById('inputContainer');
    TemplateLib.renderInput(inputContainer);
});