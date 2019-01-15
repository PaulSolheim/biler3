class Road extends Phaser.GameObjects.Container
{
  constructor(config)
  {
    super(config.scene);
    this.scene=config.scene;
    this.back=this.scene.add.image(0,0,"road");
    this.add(this.back);
    this.scene.add.existing(this);
    Align.scaleToGameW(this.back, .5);
    this.setSize(this.back.displayWidth, game.config.height);
    console.log(this);
    this.lineGroup = this.scene.add.group();
    this.count = 0;
  }

  makeLines()
  {
  	this.vSpace = this.displayHeight / 10;
  	for (var i = 0; i < 20; i++)
  	{
  		var line = this.scene.add.image(this.x, this.vSpace * i, "line");
  		line.oy = line.y;
  		this.lineGroup.add(line);
  	}
  }

}
