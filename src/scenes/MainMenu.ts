import { Scene, GameObjects } from 'phaser';
import {CENTER_X, CENTER_Y} from "../utils/consts.ts";

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(CENTER_X, CENTER_Y, 'background');

        this.logo = this.add.image(CENTER_X, CENTER_Y, 'logo');

        this.title = this.add.text(CENTER_X, CENTER_Y + 100, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
