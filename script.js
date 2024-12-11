


navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    let videoElement = document.getElementById('video');
    videoElement.srcObject = stream;
  })
  .catch(function(error) {
    console.error('Error accessing the camera', error);
  });


