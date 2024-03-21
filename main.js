document.querySelectorAll('.navigation-manual .manual-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        document.getElementById(`radio${index + 1}`).checked = true;
    });
});

let slideIndex = 0;
setInterval(() => {
    slideIndex = (slideIndex + 1) % 4; // Số 4 tương ứng với số lượng slides
    document.getElementById(`radio${slideIndex + 1}`).checked = true;
}, 8000); // Thời gian chuyển đổi giữa các slide là 5 giây
