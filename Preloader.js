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
    
    this.load.tilemap('map','assets/level1.csv');
    this.load.image('tileset','assets/tileset.png');
    this.load.image('titlescreen', 'assets/titlescreen.png');
    this.load.image('button', 'assets/button.png');
    this.load.image('level2_background','assets/debug-grid-1920x1920.png');
    this.load.image('player','assets/link.png');

  },

  create: function() {


    this.state.start('MainMenu');

  }
}