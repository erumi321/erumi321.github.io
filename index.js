const videos = document.getElementsByTagName('video');
for(var i = 0; i < videos.length; i++) {
    var video = videos[i]
    video.addEventListener('mouseover', function () {
        this.play();
    });
    
    video.addEventListener('mouseout', function () {
        this.pause();
        this.currentTime = 0;
    });
}
