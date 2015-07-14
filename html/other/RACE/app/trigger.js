var Trigger = function( x, y ) {
  this.pos = new Vec2( x, y );
}

var triggersPos = new Array(
  [ 440, 500 ],
  [ 540, 75 ],
  [ 150, 340 ]
);

var TrackTriggers = function() {
  this.triggers = new Array();
  this.currentLap = 0;
}

TrackTriggers.prototype.add = function( trigger ) {
  this.triggers.push( trigger );
}

TrackTriggers.prototype.update = function( car ) {
  for (var i = 0; i < this.triggers.length; ++i) {
    var dx = this.triggers[i].pos.x - car.pos.x;
    var dy = this.triggers[i].pos.y - car.pos.y;
    var len = Math.sqrt( dx * dx + dy * dy );

    if (len <= 70) {
      console.log('hit');
    }
  }
}

var trackTriggers = new TrackTriggers();

for (var i = 0; i < triggersPos.length; ++i) {
  trackTriggers.add( new Trigger( triggersPos[i][0], triggersPos[i][1] ) );
}