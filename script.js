document.getElementById('trigger-btn').addEventListener('click', function() {
    const btn = this;
    const vortex = document.getElementById('vortex-overlay');
    const initialScreen = document.getElementById('initial-screen');
    const premiumScreen = document.getElementById('premium-screen');
    const card = document.getElementById('support-card');

    // 1. Button animation
    btn.classList.add('active');

    // 2. Vortex animation
    setTimeout(() => {
        vortex.classList.add('animate');
    }, 300);

    // 3. Switch screens
    setTimeout(() => {
        initialScreen.style.display = 'none';
        premiumScreen.style.display = 'flex';
        
        // Start blossom effect
        startBlossoms();

        // 4. Show card
        setTimeout(() => {
            card.classList.add('visible');
        }, 200);
    }, 1100);
});

// Social Box Redirect Logic
document.querySelectorAll('.social-box').forEach(box => {
    box.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('data-url');
        
        // Visual feedback
        this.style.opacity = '0.5';
        this.style.transform = 'scale(0.9)';

        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    });
});

function startBlossoms() {
    const container = document.getElementById('blossom-container');
    setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        const size = Math.random() * 10 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-20px'; // यो लाइन पक्का गर्नुहोस् - यसले माथिबाट सुरु गर्छ
        
        petal.style.animationDuration = Math.random() * 3 + 4 + 's'; // अलि बिस्तारै झर्ने बनाउन ४-७ सेकेन्ड
        
        container.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 7000);
    }, 300);
}
