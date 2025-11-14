export class InputHandler {
  constructor(container, gameController) {
    this.container = container;
    this.gameController = gameController;

    // Attach click event listener
    this.container.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    // Will implement cell click logic in next test
  }
}
