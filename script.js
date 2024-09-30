// Variables
const greetingText = "Hello, I' m ";
const fullName = "Sayali Pathak";
const titles = ["Engineer", "Software Developer", "Leader", "Content Creator"];

// Containers
const greetingContainer = document.getElementById('greeting');
const nameContainer = document.getElementById('full-name');
const titleContainer = document.getElementById('titles');

// Function to animate text letter by letter
function animateText(text, container, delay = 0) {
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.2 + delay}s`;
        container.appendChild(span);
    });
}

// Animate "Hello, I'm" first
animateText(greetingText, greetingContainer);

// Animate "Sayali Pathak" after the greeting is done
const greetingLength = greetingText.length;
animateText(fullName, nameContainer, greetingLength * 0.2);

// Function to cycle through titles (Engineer, Software Developer, etc.)
function cycleTitles(titles, container) {
    let index = 0;
    setInterval(() => {
        container.style.opacity = 0; // Fade out current title
        setTimeout(() => {
            container.textContent = titles[index]; // Update to next title
            container.style.opacity = 1; // Fade in new title
            index = (index + 1) % titles.length; // Cycle through titles
        }, 500); // 500ms delay for fade-out effect
    }, 3000); // Change title every 3 seconds
}

// Start cycling titles after "Sayali Pathak" is fully displayed
setTimeout(() => {
    cycleTitles(titles, titleContainer);
}, (greetingText.length + fullName.length) * 200); // Delay based on greeting and name length
