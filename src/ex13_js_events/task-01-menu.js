const menuItems = [
  {
    id: 'myAccount',
    text: 'My account',
    url: '#'
  },
  {
    id: 'myTasks',
    text: 'My tasks',
    url: '#'
  },
  {
    id: 'logOut',
    text: 'Log out',
    url: "#"
  }
];

document.querySelector('.profile').addEventListener('click', function () {
  const arrow = document.querySelector('.profile .user-menu');
  const menu = document.querySelector('.user-menu__content');
  if (menu) {
    arrow.style.transform = 'rotate(0)';
    menu.remove();
    return;
  }
  const newMenu = document.createElement('ul');
  newMenu.className = 'user-menu__content';
  menuItems.forEach(item => {
    const newItem = document.createElement('li'),
      a = document.createElement('a');
    a.href = item.url;
    a.innerText = item.text;
    a.id = item.id;
    newItem.appendChild(a);
    newMenu.appendChild(newItem);
  });
  document.querySelector('.dropdown-user-menu').appendChild(newMenu);
  arrow.style.transform = 'rotate(180deg)';
});
