
const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
    document.addEventListener("mousemove", function(event) {
        // Get the cursor element
        var cursor = document.querySelector(".cursor");

        // Update the cursor's position based on the mouse movements
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    });