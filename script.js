// Function to open Help Modal
function openHelp() {
    document.getElementById('helpModal').style.display = 'block';
}

// Function to close Help Modal
function closeHelp() {
    document.getElementById('helpModal').style.display = 'none';
}

// Function to generate sound for a specific frequency
function playXylophoneSound(freq) {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator(); // Creates the sound generator
    const gainNode = context.createGain(); // Controls volume

    // Configure oscillator
    oscillator.type = "sine"; // Xylophone tones are sine-like
    oscillator.frequency.setValueAtTime(freq, context.currentTime); // Set frequency

    // Connect oscillator to gain (volume control) and then to audio output
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    // Set volume and play the sound
    gainNode.gain.setValueAtTime(0.3, context.currentTime); // Set initial volume
    oscillator.start(); // Start the sound
    oscillator.stop(context.currentTime + 0.5); // Stop after 0.5 seconds
}

// Function to open the Help modal
function openHelp() {
    document.getElementById('helpModal').style.display = 'block';
}

// Function to close the Help modal
function closeHelp() {
    document.getElementById('helpModal').style.display = 'none';
}
