import { Scene } from 'phaser';
import {CENTER_X, CENTER_Y} from "../utils/consts.ts";
import generateBlobAtLocation from "../utils/generateBlobAtLocation.ts";

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        // generate tileset section ----------------------------
        // const map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
        // const tileset = map.addTilesetImage('tiles', 'terrain', 16, 16, 0, 0);
        //
        // if (!tileset) throw new Error("tileset failed to load. What now bitch!?");

        // const layer = map.createLayer(0, tileset, 0, 0);

        // Instead of loading in a blob, I want to generate one
        // const generatedBlob = generateBlobAtLocation(this, CENTER_X + 16, CENTER_Y + 16);

        const blob = this.add.sprite(CENTER_X, CENTER_Y, 'blob');

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('blob', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });

        blob.anims.play('idle', true);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
}
