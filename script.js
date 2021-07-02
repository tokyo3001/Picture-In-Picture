const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error
        console.log('whoops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disable = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset buttton
    button.disabled = false;
});

// on load
selectMediaStream();