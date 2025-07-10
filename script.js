
        // Dark Mode Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const themeText = document.getElementById('theme-text');
        const body = document.body;

        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        if (currentTheme === 'dark') {
            enableDarkMode();
        }

        function enableDarkMode() {
            body.setAttribute('data-theme', 'dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            themeText.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'dark');
        }

        function enableLightMode() {
            body.removeAttribute('data-theme');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            themeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'light');
        }

        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        });

        // Mobile Menu Functionality
        const mobileMenuButton = document.getElementById('mobile-menu-toggle');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('hidden');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('hidden');
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                mobileMenuOverlay.classList.add('hidden');
            });
        });

        // Smooth scrolling for desktop navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Contact Form Functionality
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const messageBox = document.createElement('div');
            messageBox.textContent = 'Thanks for your message! I will get back to you soon.';
            messageBox.className = 'success-message bg-green-100 text-green-700 border border-green-200 p-4 rounded-lg mt-6 text-center font-bold';
            contactForm.appendChild(messageBox);
            
            contactForm.reset();
            
            setTimeout(() => {
                messageBox.remove();
            }, 5000);
        });
