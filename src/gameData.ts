// Global state interface
export interface GameData {
    hp: number;
    maxHp: number;
    mana: number;
    maxMana: number;
    armor: number;
    level: number;
    score: number;
}

export const initialGameData: GameData = {
    hp: 100,
    maxHp: 100,
    mana: 0,
    maxMana: 100,
    armor: 0,
    level: 1,
    score: 0
};
