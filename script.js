document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const dots = item.querySelector('.dots');
        const moreText = item.querySelector('.more-text');
        
        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            moreText.style.display = 'none';
            this.textContent = 'Read more';
        } else {
            dots.style.display = 'none';
            moreText.style.display = 'inline';
            this.textContent = 'Read less';
        }
    });
});
