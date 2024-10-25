// document.getElementById("about-link").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent default anchor click behavior
//     const aboutSection = document.getElementById("about-section");
//     if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
//         aboutSection.style.display = "block"; // Show the about section
//     } else {
//         aboutSection.style.display = "none"; // Hide the about section if it's already visible
//     }
// });
function playAudioAndRedirect(url) {
    const audio = document.getElementById('resourceAudio');
    
    audio.play().then(() => {
        // Navigate to the new page after audio ends
        audio.onended = function() {
            window.location.href = url;
        };
    }).catch((error) => {
        console.error('Audio playback failed:', error);
        // If audio fails, navigate immediately
        window.location.href = url;
    });
}