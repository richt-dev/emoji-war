import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { BattleScene } from './scenes/BattleScene';
import { GridScene } from './scenes/GridScene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 480, // Typical mobile width
    height: 800, // Typical mobile height
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true, // Enable debug as per README
            gravity: { x: 0, y: 0 }
        }
    },
    scene: [BootScene, BattleScene, GridScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

new Phaser.Game(config);
