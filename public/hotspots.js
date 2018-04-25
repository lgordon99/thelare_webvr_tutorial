var setReadyEvents = function(event) {
  console.log('adding on "ready" events');

  vrHomePage.addHotspot('spot1', {
    pitch: -10,
    yaw: -30,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('spot2', {
    pitch: 89,
    yaw: -100,
    radius: 0.10,
    distance: 1
  });

  vrHomePage.addHotspot('spot3', {
    pitch: 0,
    yaw: -150,
    radius: 0.10,
    distance: 1
  });
};

var setOnClickEvents = function(event) {
  if (event.id == 'spot1') {
    alert("Spot1")
  }

  if (event.id == 'spot2') {
    alert('Spot2');
  }

  if (event.id == 'spot3') {
    alert(' ?? ');
  }
};

// when the page is ready, do these events
vrHomePage.on('ready', function(event) {
  setReadyEvents(event);
});

// when you click, do these events
vrHomePage.on('click', function(event) {
  setOnClickEvents(event);
});

// when there is an error, do these events
vrHomePage.on('error', function(errorEvent) {
  console.log('there was an error', errorEvent);
});
