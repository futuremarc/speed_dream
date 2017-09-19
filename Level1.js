Game.Level1 = function(game) {


  this.content = [
    " ",
    "Hey Cae, use your Hot Flash with the spacebar!",
    " ",
    " ",
    "Hit them with the Hot Flash!",
    " ",
    "Be careful!",
    " "
  ];


  this.racer = null;
  this.cursors = null;

  // used for dialogue and text overlay
  this.text = null;
  this.index = 0;
  this.line = '';

  this.road;

};



Game.Level1.prototype = {

  create: function(game) {

    this.road = this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'road-bg');

    this.world.setBounds(0, 0, window.innerWidth, window.innerHeight);

    this.physics.startSystem(Phaser.Physics.P2JS);

    this.racer = this.add.sprite(this.world.centerX, this.world.centerY, 'racer');
    this.racer.anchor.setTo(0.5, 0.5);
    this.racer.scale.setTo(0.30, 0.30);

    this.physics.p2.enable(this.racer);

    this.racer.body.fixedRotation = true;

    this.cursors = this.input.keyboard.createCursorKeys();

    var bar = this.add.graphics();
    bar.beginFill(0x0000ff, 0.5);

    bar.fixedToCamera = true;
    bar.anchor.setTo(0.5, 0.5);
    bar.drawRect(window.innerWidth / 2 - ((window.innerWidth * .70) / 2), window.innerHeight - 300, window.innerWidth * .70, 200);


    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 100, '', {
      font: "30pt Courier",
      fill: "#fff",
      stroke: "#119f4e",
      strokeThickness: 2,
      boundsAlignH: "center",
      boundsAlignV: "middle",
      align: "center",
      wordWrap: true,
      wordWrapWidth: bar.width
    });

    this.text.setShadow(3, 3, 'rgba(0,0,0,0.2)', 1);
    this.text.setTextBounds(0, 100, 1150, 100);
    this.text.fixedToCamera = true;
    this.text.anchor.setTo(0.5, 0.5);

    this.nextLine();


  },

  update: function() {

    this.road.tilePosition.x -= 10;

    this.racer.body.setZeroVelocity();

    if (this.cursors.up.isDown) {
      this.racer.body.moveUp(300)
    } else if (this.cursors.down.isDown) {
      this.racer.body.moveDown(300);
    }

    if (this.cursors.left.isDown) {
      this.racer.body.velocity.x = -300;
    } else if (this.cursors.right.isDown) {
      this.racer.body.moveRight(300);
    }

  },


  updateLine: function() {

    if (this.line.length < this.content[this.index].length) {
      this.line = this.content[this.index].substr(0, this.line.length + 1);
      // this.text.this.text = this.line;
      this.text.setText(this.line);
    } else {
      //  Wait 2 seconds then start a new this.line
      this.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
    }

  },


  nextLine: function() {

    console.log('NEXT LINE')

    this.index++;

    if (this.index < this.content.length) {
      this.line = '';
      this.time.events.repeat(80, this.content[this.index].length + 1, this.updateLine, this);
    }

  }
}