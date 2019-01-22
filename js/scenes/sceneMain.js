class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
    }

    create() {
        //set up
        emitter=new Phaser.Events.EventEmitter();
        controller=new Controller();
        mediaManager=new MediaManager({scene:this});
        var sb=new SoundButtons({scene:this});
        //
        //define our objects
        this.road = new Road({scene: this});
        this.road.x = game.config.width * .5;
        this.road.makeLines();
        
        this.sb = new ScoreBox({
          scene: this
        });
        this.sb.x = game.config.width / 2;
        this.sb.y = 50;
    }

    update() {
        //constant running loop
        this.road.moveLines();
        this.road.moveObject();
    }
}
