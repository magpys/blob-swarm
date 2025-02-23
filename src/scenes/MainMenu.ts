import { Scene, GameObjects } from 'phaser';
import {CENTER_X, CENTER_Y} from "../utils/consts.ts";

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    gameTitle: GameObjects.Text;
    mainMenuTitle: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(CENTER_X, CENTER_Y, 'background');

        this.gameTitle = this.add.text(CENTER_X, CENTER_Y - 36, 'Blob Swarm', {
            fontFamily: 'Times New Roman', fontSize: 30, color: '#FF5722',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.mainMenuTitle = this.add.text(CENTER_X, CENTER_Y + 48, 'Click to start', {
            fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
