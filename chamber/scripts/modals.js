document.querySelectorAll('.card-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const dialogId = button.getAttribute('data-target');
        document.getElementById(dialogId).showModal();
    });
});

document.querySelectorAll('dialog button').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});