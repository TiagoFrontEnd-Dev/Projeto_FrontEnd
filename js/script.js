document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            const rating = parseInt(star.getAttribute('data-rating'));
            removeActiveStars();
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }
        });
    });

    function removeActiveStars() {
        stars.forEach(function(star) {
            star.classList.remove('active');
        });
    }
});
