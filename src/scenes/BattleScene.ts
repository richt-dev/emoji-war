import Phaser from 'phaser';

export class BattleScene extends Phaser.Scene {
    constructor() {
        super('BattleScene');
    }

    create() {
        // Battle Scene UI and Logic
        this.add.text(10, 10, 'Battle Scene', { font: '20px Arial', color: '#ffffff' });

        // This scene typically occupies the top half of the screen
        this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height / 2);
        this.cameras.main.setBackgroundColor('#2d2d2d');
    }
}
