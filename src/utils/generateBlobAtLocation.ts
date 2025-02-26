import { v4 as uuid } from 'uuid';
import Sprite = Phaser.GameObjects.Sprite;
import generateBlobPattern from "./generateBlobPattern.ts";

function setPixel(ctx: CanvasRenderingContext2D,x: number, y: number, r: number, g: number, b: number, a = 255) {
  ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
  ctx.fillRect(x, y, 1, 1);
}

export default function generateBlobAtLocation(scene: Phaser.Scene, x: number, y: number): Sprite | undefined {
  const blobKey = uuid();

  const width = 16;
  const height = 16;
  const textureKey = `blob-${blobKey}`;

  const canvasTexture = scene.textures.createCanvas(textureKey, width, height);
  const canvas = canvasTexture!.getSourceImage() as HTMLCanvasElement;

  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error('Canvas not found');

    return;
  }

  // Disable anti-aliasing
  ctx.imageSmoothingEnabled = false;

  // We need to generate the pattern
  const pattern = generateBlobPattern();

  ctx.translate(-0.5, -0.5);

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      const colour = pattern[i][j];

      if (colour === "orange") {
        setPixel(ctx, i + 2, j + 2, 204, 85, 0);
      } else if (colour === "teal") {
        setPixel(ctx, i + 2, j + 2, 0, 128, 128);
      }
    }
  }

  // draw the body of the blob
  // Align strokes to the pixel grid
  ctx.translate(0.5, 0.5);

  // actually draw the path
  ctx.beginPath();
  ctx.moveTo(8, 2);
  ctx.moveTo(14, 8);
  ctx.lineTo(14, 12);
  ctx.lineTo(12, 14);
  ctx.lineTo(4, 14);
  ctx.lineTo(2, 12);
  ctx.lineTo(2, 8);
  ctx.lineTo(6, 4);
  ctx.lineTo(8, 4);
  ctx.lineTo(8, 2);
  ctx.closePath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  // ctx.fillStyle = 'orange';
  // ctx.fill(); // Fills the shape with the set color
  ctx.stroke(); // Actually draws the outline


  // Now draw the eyes
  ctx.translate(-0.5, -0.5);

  ctx.fillStyle = 'black';
  ctx.fillRect(7, 8, 1, 2); // Left eye
  ctx.fillRect(11, 8, 1, 2); // Right eye

  canvasTexture!.refresh();

  return scene.add.sprite(x, y, textureKey);
}