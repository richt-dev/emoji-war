export const GRID_CONFIG = {
    ROWS: 6,
    COLS: 6,
    TILE_SIZE: 60, // Reduced from 70 to fit 360px height
    START_X: 60,   // (480 - (6 * 60)) / 2 = 60
    START_Y: 20    // Reduced top margin
};

export enum ItemType {
    SWORD = '⚔️',
    SHIELD = '🛡️',
    HEART = '❤️',
    LIGHTNING = '⚡'
    // Can add more later
}

export const ITEM_TYPES = [
    ItemType.SWORD,
    ItemType.SHIELD,
    ItemType.HEART,
    ItemType.LIGHTNING
];
