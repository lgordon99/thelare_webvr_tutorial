var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: 'https://pasteboard.co/images/HheZSKZ.jpg/download',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);
// Delete lines 14 through 28
