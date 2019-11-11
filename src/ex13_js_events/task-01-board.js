const dataMock = [
  {
    title: 'backlog',
    issues: [
      {
        id: 1,
        name: 'Sprint bugfix'
      },
      {
        id: 2,
        name: 'test id 2'
      }
    ]
  },
  {
    title: 'ready',
    issues: [
      {
        id: 3,
        name: 'Sprint bugfix'
      },
      {
        id: 4,
        name: 'test id 3'
      }
    ],
  },
  {
    title: 'in progress',
    issues: [
      {
        id: 5,
        name: 'Sprint bugfix'
      },
      {
        id: 6,
        name: 'test id 4'
      }
    ]
  },
  {
    title: 'finished',
    issues: [
      {
        id: 7,
        name: 'Sprint bugfix'
      },
      {
        id: 8,
        name: 'test id 5'
      }
    ]
  }
];

let maxId = 0;

window.onload = function() {
  dataMock.forEach(item => {
    const boardTheme = document.createElement('div');
    boardTheme.className = 'board-theme';
    boardTheme.innerHTML = `
        <div class="board-theme-title">
          <span class="theme-title">${item.title}</span>
          <button class="board-menu-button"></button>
        </div>
        <ul class="board-issues" id="${item.title}">
        </ul>
        <button class="btn-issue-add" id="${item.title === 'backlog' ? 'backlogAddBtn' : 'addTaskBtn'}">
          Add card
        </button>
      `;
    boards.appendChild(boardTheme);
    item.issues.forEach(issue => {
      if (issue.id > maxId) maxId = issue.id;

      const newTask = document.createElement('li');
      newTask.id = issue.id;
      newTask.innerText = issue.name;
      document.getElementById(item.title).appendChild(newTask);
    });
  });

  document.getElementById('backlogAddBtn').onclick = function (e) {
    const backlogInput = document.createElement('input');
    backlogInput.className = 'input-backlog-task';
    backlogInput.placeholder = 'Your task here...';

    function addBacklogTask(event) {
      if (!event.currentTarget.value) return;
      if (event.key === 'Enter' || event.type === 'focusout') {
        const newTask = document.createElement('li');
        newTask.innerText = event.currentTarget.value;
        ++maxId;
        newTask.id = maxId;
        backlog.appendChild(newTask);
        event.target.removeEventListener('keypress', addBacklogTask);
        event.target.removeEventListener('focusout', addBacklogTask);
        event.target.remove();
      }
    }

    backlogInput.addEventListener('keypress', (event) => addBacklogTask(event));
    backlogInput.addEventListener('focusout', (event) => addBacklogTask(event));
    e.target.parentElement.insertBefore(backlogInput, backlogAddBtn);
  };
};

/*document.querySelectorAll('.btn-issue-add').forEach(buttons => {
  buttons.addEventListener('click', function () {

  });
});*/

