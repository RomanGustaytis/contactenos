import "../styles/main.scss";


document.getElementById('toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    const overlay = this.nextElementSibling;

    if (overlay && overlay.classList.contains('overlay')) {
        overlay.classList.toggle('open');
    }

    document.body.classList.toggle('overflow-body');
});
