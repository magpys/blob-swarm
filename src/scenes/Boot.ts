import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('background', 'assets/bg.png');
        this.load.image('terrain', 'assets/terrain.png');
        this.load.spritesheet('blob',
          'assets/normal-blob.png',
          { frameWidth: 16, frameHeight: 16 }
        );
        this.load.tilemapCSV('map', 'assets/map.csv')
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
