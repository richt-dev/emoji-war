import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Load assets here
        // this.load.image('logo', 'assets/sprites/logo.png');
    }

    create() {
        // Start the battle scene
        this.scene.start('BattleScene');
        // We can run GridScene in parallel or let BattleScene launch it
        this.scene.launch('GridScene');
    }
}
