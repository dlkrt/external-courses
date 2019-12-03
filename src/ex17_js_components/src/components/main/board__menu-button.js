function BoardMenuButtonCreate() {
  const BoardMenuButton = document.createElement('button');
  BoardMenuButton.classList.add('board-menu-button');
  const BoardMenuButtonStyle = document.createElement('link');
  BoardMenuButtonStyle.setAttribute('rel', 'stylesheet');
  BoardMenuButtonStyle.setAttribute('href', './src/components/main/board__menu-button.css');
  document.getElementsByTagName('head')[0].appendChild(BoardMenuButtonStyle);
  return BoardMenuButton;
}

export {BoardMenuButtonCreate};
