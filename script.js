// Основные интерактивные функции сайта
document.addEventListener('DOMContentLoaded', function () {

    /* ==========================================
       1. ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРНЫХ ССЫЛОК
       ========================================== */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================
       2. ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
       ========================================== */
    const animatedElements = document.querySelectorAll('.style-card, .fact-item, .timeline-item');

    if (animatedElements.length > 0) {
        const animateOnScroll = function () {
            animatedElements.forEach(element => {
                // Позиция верха элемента относительно экрана
                const elementTop = element.getBoundingClientRect().top;
                // Порог срабатывания (80% высоты экрана)
                const triggerPoint = window.innerHeight / 1.25;

                if (elementTop < triggerPoint) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Проверка при загрузке страницы
    }

    /* ==========================================
       3. ИЗМЕНЕНИЕ ШАПКИ ПРИ СКРОЛЛЕ
       ========================================== */
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(20, 20, 20, 0.98)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.8)';
            } else {
                header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
            }
        });
    }

    /* ==========================================
       4. УСТАНОВКА ТЕКУЩЕГО ГОДА В ПОДВАЛЕ
       ========================================== */
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});