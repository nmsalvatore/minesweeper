import { Board } from '../game/Board.js';

export class GameController {
  constructor() {
    this.board = null;
    this.status = 'idle';
    this.isFirstClick = true;
    this.rows = 0;
    this.cols = 0;
    this.mineCount = 0;
  }

  startNewGame(rows, cols, mineCount) {
    this.rows = rows;
    this.cols = cols;
    this.mineCount = mineCount;
    this.board = new Board(rows, cols);
    this.board.placeMines(mineCount);
    this.board.calculateAdjacentMines();
    this.status = 'playing';
    this.isFirstClick = true;
  }

  handleCellClick(row, col) {
    if (this.status !== 'playing') {
      return;
    }

    // First-click guarantee: if first click hits a mine, regenerate board
    if (this.isFirstClick) {
      const cell = this.board.getCell(row, col);
      if (cell.isMine) {
        // Regenerate board until clicked cell is not a mine
        while (this.board.getCell(row, col).isMine) {
          this.board = new Board(this.rows, this.cols);
          this.board.placeMines(this.mineCount);
          this.board.calculateAdjacentMines();
        }
      }
    }

    this.board.revealCell(row, col);
    this.isFirstClick = false;

    // Check win/lose conditions
    if (this.board.isGameLost()) {
      this.status = 'lost';
    } else if (this.board.isGameWon()) {
      this.status = 'won';
    }
  }

  getGameState() {
    return {
      board: this.board,
      status: this.status
    };
  }
}
