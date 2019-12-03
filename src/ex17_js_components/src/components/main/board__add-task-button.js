function BoardAddTaskBtnCreate() {
  const BoardAddTaskBtn = document.createElement('button');
  BoardAddTaskBtn.classList.add('btn-issue-add');
  BoardAddTaskBtn.innerText = 'Add task';
  const BoardAddTaskBtnStyle = document.createElement('link');
  BoardAddTaskBtnStyle.setAttribute('rel', 'stylesheet');
  BoardAddTaskBtnStyle.setAttribute('href', './src/components/main/board__add-task-button.css');
  document.getElementsByTagName('head')[0].appendChild(BoardAddTaskBtnStyle);
  return BoardAddTaskBtn;
}

export {BoardAddTaskBtnCreate};
