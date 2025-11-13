import { describe, it, expect, beforeEach } from 'vitest';
import { BoardRenderer } from '../../src/ui/BoardRenderer.js';
import { Board } from '../../src/game/Board.js';

describe('BoardRenderer', () => {
  let container;
  let board;
  let renderer;

  beforeEach(() => {
    // Create a fresh container for each test
    container = document.createElement('div');
    board = new Board(3, 3);
    renderer = new BoardRenderer(container, board);
  });

  describe('initialization', () => {
    it('should create a board container element', () => {
      renderer.render();

      const boardElement = container.querySelector('.board');
      expect(boardElement).toBeTruthy();
    });

    it('should render correct number of cell elements', () => {
      renderer.render();

      const cells = container.querySelectorAll('.cell');
      expect(cells.length).toBe(9); // 3x3 board = 9 cells
    });
  });
});
