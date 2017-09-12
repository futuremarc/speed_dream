Game.Preloader = function(game) {

  this.preloadBar = null;

};

Game.Preloader.prototype = {

  preload: function() {

    this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo')
    this.logo.anchor.setTo(0.5, 0.5);

    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 200, 'preloadBar')
    this.preloadBar.anchor.setTo(0.5, 0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.time.advancedTiming = true;


    //LOAD ALL ASSETS HERE


  },

  create: function() {


    this.state.start('Level1');

  }
}