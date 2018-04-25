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

var roomDrawing = vRViewPlayer('#second-vr-example', {
  // image: 'assets/guillermo-room.jpg',
  image: 'https://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/hand-drawn-room.jpg',
  is_stereo: false,
});

window.addEventListener('load', roomDrawing);

var boxRoomTemplate = vRViewPlayer('#third-vr-example', {
  // image: 'assets/example-rectangular-room.png',
  image: 'https://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/example-rectangular-room.png',
  is_stereo: false,
});

window.addEventListener('load', boxRoomTemplate);
