import throttle from "lodash.throttle";

   const iframe = document.querySelector('iframe');
   const player = new Vimeo.Player(iframe);

   player.on('play', function() {
       console.log('played the video!');
   });

   player.getVideoTitle().then(function(title) {
       console.log('title:', title);
   });

   player.on('timeupdate', throttle(onPlay, 1000));

   function onPlay(currentTime) {
    const timePlay = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time", timePlay);
    
} 

const currentSecondTime = localStorage.getItem("videoplayer-current-time");


player.setCurrentTime(currentSecondTime).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

  
    
