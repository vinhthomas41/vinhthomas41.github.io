document.addEventListener("DOMContentLoaded", function(event) {
    const dialog = document.getElementById('projectPopup');
    const aboutButton = document.getElementById('about');
    aboutButton.addEventListener("click", () => {
        dialog.showModal();
        const closeButton = document.getElementById('closePopup');
        closeButton.addEventListener("click", () => {
            dialog.close();
        })
    });
});