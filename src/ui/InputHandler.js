export class InputHandler {
  constructor(container, gameController) {
    this.container = container;
    this.gameController = gameController;

    // Attach click event listener
    this.container.addEventListener('click', this.handleClick.bind(this));

    // Attach contextmenu (right-click) event listener
    this.container.addEventListener('contextmenu', this.handleContextMenu.bind(this));
  }

  handleClick(event) {
    const target = event.target;

    // Check if clicked element has data-row and data-col attributes
    const row = target.getAttribute('data-row');
    const col = target.getAttribute('data-col');

    if (row !== null && col !== null) {
      this.gameController.handleCellClick(parseInt(row, 10), parseInt(col, 10));
    }
  }

  handleContextMenu(event) {
    const target = event.target;

    // Check if clicked element has data-row and data-col attributes
    const row = target.getAttribute('data-row');
    const col = target.getAttribute('data-col');

    if (row !== null && col !== null) {
      // Prevent default context menu from appearing
      event.preventDefault();
      this.gameController.handleCellRightClick(parseInt(row, 10), parseInt(col, 10));
    }
  }
}
