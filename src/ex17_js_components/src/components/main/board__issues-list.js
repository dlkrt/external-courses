function BoardIssuesCreate() {
  const BoardIssues = document.createElement('ul');
  BoardIssues.classList.add('board-issues');
  const BoardIssuesStyle = document.createElement('link');
  BoardIssuesStyle.setAttribute('rel', 'stylesheet');
  BoardIssuesStyle.setAttribute('href', './src/components/main/board__issues-list.css');
  document.getElementsByTagName('head')[0].appendChild(BoardIssuesStyle);
  return BoardIssues;
}
export {BoardIssuesCreate};