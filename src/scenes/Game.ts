import { Scene } from 'phaser';

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

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        const blob = this.add.sprite(512, 384, 'blob');

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
