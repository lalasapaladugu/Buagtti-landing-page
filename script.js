// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modelsSection = document.getElementById('models-section');
    const modelsLink = document.getElementById('models-link');
    const modelsContainer = document.getElementById('models-container');
    const models = document.querySelectorAll('.model');
    const prevBtn = document.getElementById('prev-model');
    const nextBtn = document.getElementById('next-model');
    
    let currentIndex = 0;

    function showModels() {
        modelsSection.style.display = 'block';
        modelsSection.classList.add('visible');
        currentIndex = 0;
        showModel(currentIndex);
    }
    function hideModels() {
        modelsSection.style.display = 'none';
        modelsSection.classList.remove('visible');
    }
    function showModel(index) {
        models.forEach((model, i) => {
            model.classList.toggle('active', i === index);
        });
    }
    modelsLink.addEventListener('click', (event) => {
        event.preventDefault();
        showModels();
        window.scrollTo({ top: modelsSection.offsetTop, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : models.length - 1;
        showModel(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < models.length - 1) ? currentIndex + 1 : 0;
        showModel(currentIndex);
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY < modelsSection.offsetTop || window.scrollY > modelsSection.offsetTop + modelsSection.offsetHeight) {
            if (modelsSection.style.display === 'block') {
                displayModels();
            }
        }
    });
});
