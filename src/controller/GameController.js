import { Board } from '../game/Board.js';

export class GameController {
  constructor() {
    this.board = null;
    this.status = 'idle';
  }

  startNewGame(rows, cols, mineCount) {
    this.board = new Board(rows, cols);
    this.board.placeMines(mineCount);
    this.board.calculateAdjacentMines();
    this.status = 'playing';
  }

  getGameState() {
    return {
      board: this.board,
      status: this.status
    };
  }
}
