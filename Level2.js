Game.Level2 = function(game) {};

var player;
var cursors;

Game.Level2.prototype = {

    create: function(game) {

        this.add.tileSprite(0, 0, 1920, 1920, 'level2_background');

        this.world.setBounds(0, 0, 1920, 1920);

        this.physics.startSystem(Phaser.Physics.P2JS);

        player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        player.anchor.setTo(0.5,0.5);
        player.scale.setTo(0.35,0.35);

        this.physics.p2.enable(player);

        player.body.fixedRotation = true;

        cursors = this.input.keyboard.createCursorKeys();

        //  Notice that the sprite doesn't have any momentum at all,
        //  it's all just set by the camera follow type.
        //  0.1 is the amount of linear interpolation to use.
        //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
        this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


    },

    update: function() {

        player.body.setZeroVelocity();

        if (cursors.up.isDown) {
            player.body.moveUp(300)
        } else if (cursors.down.isDown) {
            player.body.moveDown(300);
        }

        if (cursors.left.isDown) {
            player.body.velocity.x = -300;
        } else if (cursors.right.isDown) {
            player.body.moveRight(300);
        }

    }
}
