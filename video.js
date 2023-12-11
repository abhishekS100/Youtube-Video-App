// Replace 'YOUR_API_KEY' with your actual YouTube API key
const API_KEY = "AIzaSyBEqnQeYDqG1wpzraMNcoEMBS-xKLdo_JA";

// Replace 'YOUR_VIDEO_ID' with the unlisted YouTube Video ID
const VIDEO_ID = "8eEk4FOyLHM";

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: VIDEO_ID,
        playerVars: {
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // Handle player state changes if needed
}

// Load YouTube API script
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load YouTube API and initialize player
loadYouTubeAPI();
