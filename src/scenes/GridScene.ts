import Phaser from 'phaser';

export class GridScene extends Phaser.Scene {
    constructor() {
        super('GridScene');
    }

    create() {
        // Grid Scene UI and Logic
        this.add.text(10, 10, 'Puzzle Grid', { font: '20px Arial', color: '#ffffff' });

        // This scene typically occupies the bottom half of the screen
        const startY = this.scale.height / 2;
        this.cameras.main.setViewport(0, startY, this.scale.width, this.scale.height / 2);
        this.cameras.main.setBackgroundColor('#1a1a1a');
    }
}
