const audioElement = new Audio('music.mp3');

audioElement.play()
    .then(() => {
        console.log('Audio playback started');
    })
    .catch(error => {
        console.error('Play was prevented:', error);
    });

