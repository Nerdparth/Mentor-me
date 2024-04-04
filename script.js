
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
   
 // whenever there is a scroll on the body the navbar appearence will change
    gsap.to("nav",{
        backgroundColor :"#000",
        height:"90px",
        duration:0.5,
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            // markers:true,
            start:"top -10%",
            end:"top -11%",
            scrub:1
    
        }
    })
    
    // whenever there is a scroll on the body for the next page appearence will change
    gsap.to("#main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            // markers:true,
            start:"top -25%",
            end:"top -70%",
            scrub:2
        }
    })