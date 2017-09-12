var Game = {};

Game.Boot = function(game){


};

Game.Boot.prototype = {

  init:function(){

    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

  },

  preload:function(){

    this.load.image('preloadBar','assets/preloadBar.png');
    this.load.image('logo','assets/logo.png');

  },

  create: function(){

    this.state.start('Preloader');

  }
}