import Phaser from 'phaser';
import { GRID_CONFIG, ITEM_TYPES } from '../config';

export class GridScene extends Phaser.Scene {
    private grid: (Phaser.GameObjects.Text | null)[][];
    private selectedTile: { row: number, col: number } | null;

    constructor() {
        super('GridScene');
        this.grid = [];
        this.selectedTile = null;
    }

    create() {
        // This scene occupies the bottom half of the screen
        const startY = this.scale.height / 2;
        this.cameras.main.setViewport(0, startY, this.scale.width, this.scale.height / 2);
        this.cameras.main.setBackgroundColor('#1a1a1a');

        // Initialize grid array
        this.grid = [];
        for (let row = 0; row < GRID_CONFIG.ROWS; row++) {
            this.grid[row] = [];
            for (let col = 0; col < GRID_CONFIG.COLS; col++) {
                this.grid[row][col] = null;
                this.createTile(row, col);
            }
        }
    }

    private createTile(row: number, col: number) {
        const x = GRID_CONFIG.START_X + col * GRID_CONFIG.TILE_SIZE + GRID_CONFIG.TILE_SIZE / 2;
        const y = GRID_CONFIG.START_Y + row * GRID_CONFIG.TILE_SIZE + GRID_CONFIG.TILE_SIZE / 2;

        const randomType = Phaser.Math.RND.pick(ITEM_TYPES);

        const tile = this.add.text(x, y, randomType, {
            fontSize: '48px',
            fontFamily: 'Arial'
        }).setOrigin(0.5);

        // Make interactive
        tile.setInteractive();
        tile.on('pointerdown', () => {
            const r = tile.getData('row');
            const c = tile.getData('col');
            this.handleTileClick(r, c);
        });

        // Store data in the generic data object of the GameObject
        tile.setData('row', row);
        tile.setData('col', col);
        tile.setData('type', randomType);

        this.grid[row][col] = tile;
    }

    private handleTileClick(row: number, col: number) {
        const clickedTile = this.grid[row][col];
        if (!clickedTile) return;

        if (this.selectedTile) {
            // If same tile, deselect
            if (this.selectedTile.row === row && this.selectedTile.col === col) {
                this.deselectTile();
                return;
            }

            // If adjacent, try to swap
            if (this.isAdjacent(this.selectedTile.row, this.selectedTile.col, row, col)) {
                this.swapTiles(this.selectedTile.row, this.selectedTile.col, row, col);
                this.deselectTile();
            } else {
                // If not adjacent, select the new one instead
                this.deselectTile();
                this.selectTile(row, col);
            }
        } else {
            // Select new tile
            this.selectTile(row, col);
        }
    }

    private selectTile(row: number, col: number) {
        this.selectedTile = { row, col };
        const tile = this.grid[row][col];
        if (tile) {
            tile.setScale(1.2); // Highlight effect
            tile.setAlpha(0.8);
        }
    }

    private deselectTile() {
        if (this.selectedTile) {
            const tile = this.grid[this.selectedTile.row][this.selectedTile.col];
            if (tile) {
                tile.setScale(1.0); // Reset scale
                tile.setAlpha(1.0);
            }
            this.selectedTile = null;
        }
    }

    private isAdjacent(r1: number, c1: number, r2: number, c2: number): boolean {
        const rowDiff = Math.abs(r1 - r2);
        const colDiff = Math.abs(c1 - c2);
        return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    }

    private swapTiles(r1: number, c1: number, r2: number, c2: number) {
        const tile1 = this.grid[r1][c1];
        const tile2 = this.grid[r2][c2];

        if (!tile1 || !tile2) return;

        // Visual Swap (Tween)
        this.tweens.add({
            targets: tile1,
            x: tile2.x,
            y: tile2.y,
            duration: 300,
            ease: 'Power2'
        });

        this.tweens.add({
            targets: tile2,
            x: tile1.x,
            y: tile1.y,
            duration: 300,
            ease: 'Power2'
        });

        // Update Grid Data
        this.grid[r1][c1] = tile2;
        this.grid[r2][c2] = tile1;

        // Update Tile Data (row/col properties)
        tile1.setData('row', r2);
        tile1.setData('col', c2);
        tile2.setData('row', r1);
        tile2.setData('col', c1);

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
