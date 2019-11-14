let dataMock = JSON.parse(localStorage.getItem('data'));

let maxId = 0;
window.onload = loadBoards;

function loadBoards() {
  dataMock.forEach((item, i) => {
    const boardTheme = document.createElement('div');
    boardTheme.className = 'board-theme';
    boardTheme.setAttribute('data-id', i.toString());
    boardTheme.innerHTML = `
        <div class="board-theme-title">
          <span class="theme-title">${item.title}</span>
          <button class="board-menu-button"></button>
        </div>
        <ul class="board-issues" id="${item.title.toLowerCase()}">
        </ul>
          <button class="btn-issue-add" id="${item.title.toLowerCase()}Btn">
            Add card
          </button>
      `;
    boards.appendChild(boardTheme);
  });

  document.getElementById('backlogBtn').onclick = function (e) {
    const backlogInput = document.createElement('input');
    backlogInput.className = 'input-backlog-task';
    backlogInput.placeholder = 'Your task here...';

    function addBacklogTask(event) {
      if (!event.target.value) return;
      if (event.key === 'Enter' || event.type === 'focusout') {
        const newTask = document.createElement('li');
        newTask.innerText = event.target.value;
        ++maxId;
        newTask.id = maxId;
        dataMock[0].issues.push({
          id: maxId,
          name: event.target.value
        });
        backlog.appendChild(newTask);
        event.target.remove();
        saveData();
      }
    }

    backlogInput.addEventListener('keypress', addBacklogTask);
    backlogInput.addEventListener('focusout', addBacklogTask);
    e.target.parentElement.insertBefore(backlogInput, backlogBtn);
    resetButtons();
  };

  loadIssues();
}

function loadIssues() {
  dataMock.forEach((board, i) => {
    const listIssues = document.getElementById(board.title.toLowerCase());
    listIssues.innerHTML = '';
    listIssues.className = 'board-issues';
    listIssues.id = board.title.toLowerCase();
    board.issues.forEach(issue => {
      if (issue.id > maxId) maxId = issue.id;

      const newTask = document.createElement('li');
      newTask.id = issue.id;
      newTask.innerText = issue.name;
      listIssues.appendChild(newTask);
    });
  });

  resetButtons();
}

function saveData() {
  localStorage.setItem('data', JSON.stringify(dataMock));
}

function resetButtons() {
  dataMock.forEach((board, i, boards) => {
    if (board.title === 'backlog') return;
    const btn = document.getElementById(board.title + 'Btn');
    if (boards[i - 1].issues.length === 0) {
      btn.setAttribute('disabled', 'true');
      btn.removeEventListener('click', showDropdown);
    } else {
      btn.removeAttribute('disabled');
      btn.addEventListener('click', showDropdown);
    }
  });
}

function showDropdown(e) {
  e.target.removeEventListener('click', showDropdown);
  const siblingIndex = e.target.parentElement.getAttribute('data-id') - 1;

  const dropdown = document.createElement('ul');
  dropdown.className = 'dropdown-list-issues';
  dataMock[siblingIndex].issues.forEach(issue => {
    const dropdownIssue = document.createElement('li');
    dropdownIssue.id = issue.id;
    dropdownIssue.textContent = issue.name;
    dropdownIssue.addEventListener('click', selectIssueFromDropdown);
    dropdown.appendChild(dropdownIssue);
  });
  e.target.parentElement.appendChild(dropdown);
}

function selectIssueFromDropdown(e) {
  const selfIndex = e.target.parentElement.parentElement.getAttribute('data-id');
  dataMock = dataMock.map((board) => {
    return {
      title: board.title.toLowerCase(),
      issues: board.issues.filter((issue) => {
        return issue.id != e.target.id;
      })
    }
  }).slice();
  dataMock[selfIndex].issues.push({
    id: e.target.id,
    name: e.target.textContent
  });
  e.target.parentElement.remove();
  loadIssues();
  resetButtons();
  saveData();
}