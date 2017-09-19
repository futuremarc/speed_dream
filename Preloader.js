Game.Preloader = function(game) {

  this.preloadBar = null;

};

Game.Preloader.prototype = {

  preload: function() {

    this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo')
    this.logo.anchor.setTo(0.5, 0.5);

    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 200, 'preloadBar')
    this.preloadBar.anchor.setTo(0.5, 0.5);
    this.preloadBar.scale.setTo(0.35, 0.35);

    this.load.setPreloadSprite(this.preloadBar);

    this.time.advancedTiming = true;


    //LOAD ALL ASSETS HERE

    this.load.tilemap('map', 'assets/level1.csv');
    this.load.image('tileset', 'assets/tileset.png');
    this.load.image('titlescreen', 'assets/titlescreen.png');
    this.load.image('button', 'assets/button.png');
    this.load.image('town-map', 'assets/town-map.jpg');
    this.load.image('road-bg', 'assets/road-bg.jpg');


    this.load.image('player', 'assets/link.png');
    this.load.image('racer', 'assets/red-car.png');
    this.load.image('racer2', 'assets/white-car.png');

  },

  create: function() {


    this.state.start('MainMenu');

  }
}