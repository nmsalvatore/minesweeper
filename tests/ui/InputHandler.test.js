import { describe, it, expect, beforeEach, vi } from 'vitest';
import { InputHandler } from '../../src/ui/InputHandler.js';
import { JSDOM } from 'jsdom';

describe('InputHandler', () => {
  let dom;
  let container;
  let mockGameController;

  beforeEach(() => {
    // Create a fresh DOM for each test
    dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    global.window = dom.window;

    container = document.getElementById('container');

    // Create a mock GameController
    mockGameController = {
      handleCellClick: vi.fn(),
      handleCellRightClick: vi.fn()
    };
  });

  // Test 36: Should accept container and gameController in constructor
  it('should accept container and gameController in constructor', () => {
    const inputHandler = new InputHandler(container, mockGameController);

    expect(inputHandler.container).toBe(container);
    expect(inputHandler.gameController).toBe(mockGameController);
  });

  // Test 37: Should attach click event listener to container
  it('should attach click event listener to container', () => {
    const addEventListenerSpy = vi.spyOn(container, 'addEventListener');

    new InputHandler(container, mockGameController);

    expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
  });
});
