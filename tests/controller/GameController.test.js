import { describe, it, expect } from 'vitest';
import { GameController } from '../../src/controller/GameController.js';

describe('GameController', () => {
  describe('initialization', () => {
    it('should initialize a new game with specified dimensions and mine count', () => {
      const controller = new GameController();

      controller.startNewGame(5, 5, 5);

      const state = controller.getGameState();
      expect(state.board).toBeDefined();
      expect(state.board.rows).toBe(5);
      expect(state.board.cols).toBe(5);
      expect(state.status).toBe('playing');
    });
  });
});
