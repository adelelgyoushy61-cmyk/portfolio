// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if(mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}



 // التحكم في تشغيل وإيقاف الفيديو
        document.querySelectorAll('.play-pause').forEach(button => {
            button.addEventListener('click', function() {
                const video = this.closest('.project-video').querySelector('video');
                if (video.paused) {
                    video.play();
                    this.textContent = '❚❚';
                } else {
                    video.pause();
                    this.textContent = '▶';
                }
            });
        });

        // التحكم في كتم الصوت
        document.querySelectorAll('.mute').forEach(button => {
            button.addEventListener('click', function() {
                const video = this.closest('.project-video').querySelector('video');
                if (video.muted) {
                    video.muted = false;
                    this.textContent = '🔊';
                } else {
                    video.muted = true;
                    this.textContent = '🔇';
                }
            });
        });

        // إعادة الفيديو عند الانتهاء
        document.querySelectorAll('video').forEach(video => {
            video.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            });
        });