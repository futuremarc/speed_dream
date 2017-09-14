Game.Level2 = function(game) {


};

var player;
var cursors;

// used for dialogue and text overlay
var text;
var index = 0;
var line = '';


var content = [
    " ",
    "Hey Queen Elle... what are you thinking?",
    " ",
    " ",
    "Speed Dream - Astro Valley",
    " ",
    "game development by magic is real",
    " ",
    "music and audio by omniboi",
    " ",
    "directed by omniboi",
    " ",
    "03:45, November 14th, 2019",
    "somewhere in the north pacific...",
];

var content2 = [
    " ",
    "omniboi and magic is real presents...",
    "an omnireal production",
    " ",
    "Speed Dream - Astro Valley",
    " ",
    "game development by magic is real",
    " ",
    "music and audio by omniboi",
    " ",
    "directed by omniboi",
    " ",
    "03:45, November 14th, 2019",
    "somewhere in the north pacific...",
];



Game.Level2.prototype = {

    create: function(game) {

        this.add.tileSprite(0, 0, 1920, 1920, 'level2_background');

        this.world.setBounds(0, 0, 1920, 1920);

        this.physics.startSystem(Phaser.Physics.P2JS);

        player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(0.30, 0.30);

        this.physics.p2.enable(player);

        player.body.fixedRotation = true;

        cursors = this.input.keyboard.createCursorKeys();

        this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


        var bar = this.add.graphics();
        bar.beginFill(0x0000ff, 0.5);

        bar.fixedToCamera = true;
        bar.anchor.setTo(0.5, 0.5);
        bar.drawRect(window.innerWidth / 2 - ((window.innerWidth * .70) / 2), window.innerHeight - 300, window.innerWidth * .70, 200);


        text = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 100, '', {
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

        text.setShadow(3, 3, 'rgba(0,0,0,0.2)', 1);
        text.setTextBounds(0, 100, 1000, 100);
        text.fixedToCamera = true;
        text.anchor.setTo(0.5, 0.5);

        this.nextLine();


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

    },


    updateLine: function() {

        if (line.length < content[index].length) {
            line = content[index].substr(0, line.length + 1);
            // text.text = line;
            text.setText(line);
        } else {
            //  Wait 2 seconds then start a new line
            this.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
        }

    },


    nextLine: function() {

        index++;

        if (index < content.length) {
            line = '';
            this.time.events.repeat(80, content[index].length + 1, this.updateLine, this);
        }

    }
}