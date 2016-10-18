var sphero = require("sphero"),
    bb8    = sphero("e146c3a8db364a6c9ff2ae739401ddd8"); // change BLE address accordingly

bb8.connect(function() {

  console.log('connect');
  // roll BB-8 in a random direction, changing direction every second
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    bb8.roll(150, direction);
  }, 1000);
});