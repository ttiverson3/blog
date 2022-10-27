const videoList = Array.from(document.getElementsByClassName("video"));
videoList.forEach(video => {
    video.volume = '0.6';
});