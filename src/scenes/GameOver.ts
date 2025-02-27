import { Scene } from 'phaser';
import {CENTER_X, CENTER_Y} from "../utils/consts.ts";

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameover_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xff0000);

        this.background = this.add.image(CENTER_X, CENTER_Y, 'background');
        this.background.setAlpha(0.5);

        this.gameover_text = this.add.text(CENTER_X, CENTER_Y, 'Game Over', {
            fontFamily: 'Times New Roman', fontSize: 10, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.gameover_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
