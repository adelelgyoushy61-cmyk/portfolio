        // تفعيل القائمة المتنقلة
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // تأثيرات تفاعلية إضافية
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1.2)';
            });
            
            link.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1)';
            });
        });

        // نسخ رقم الهاتف عند النقر
        document.querySelector('.phone-section').addEventListener('click', function() {
            const phoneNumber = '01015248015';
            navigator.clipboard.writeText(phoneNumber).then(() => {
                // تأثير بسيط للإشارة إلى النسخ
                this.style.background = 'rgba(117, 0, 0, 0.4)';
                setTimeout(() => {
                    this.style.background = '';
                }, 500);
            });
        });