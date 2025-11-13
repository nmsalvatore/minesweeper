export class BoardRenderer {
  constructor(container, board) {
    this.container = container;
    this.board = board;
  }

  render() {
    const boardElement = document.createElement('div');
    boardElement.className = 'board';
    this.container.appendChild(boardElement);
  }
}
