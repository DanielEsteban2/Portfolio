document.addEventListener("DOMContentLoaded", function () {

    //Get current date
    const today = new Date();

    //Extract each month, day, and year
    const [day, month] = [today.getDate(), today.toLocaleString('en-AU', { month:'long'})];

    //Update the HTML elements
    document.getElementById('month-day').innerHTML = `${month} <br> ${day}`;
    document.getElementById('year').textContent = today.getFullYear();
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mousemove', function(e) {
        const speedFactor = 20; // Adjust this factor for desired speed
        const boundingRect = project.getBoundingClientRect();
        const itemCenterX = boundingRect.left + (boundingRect.width / 2);
        const itemCenterY = boundingRect.top + (boundingRect.height / 2);

        const offsetX = (e.clientX - itemCenterX) / speedFactor;
        const offsetY = (e.clientY - itemCenterY) / speedFactor;

        project.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    // Reset the position when the mouse leaves the element
    project.addEventListener('mouseleave', function() {
        project.style.transform = 'translate(0, 0)';
    });
});


