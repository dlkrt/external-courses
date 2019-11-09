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

profile.onclick = function () {
  const arrow = document.querySelector('.profile .user-menu'),
    menu = document.querySelector('.user-menu__content');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    arrow.style.transform = 'rotate(0)';
    while (menu.firstChild) menu.removeChild(menu.firstChild);
  } else {
    menuItems.forEach(item => {
      const newItem = document.createElement('li'),
        a = document.createElement('a');
      a.href = item.url;
      a.innerText = item.text;
      a.id = item.id;
      newItem.appendChild(a);
      menu.appendChild(newItem);
    });
    menu.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
  }
};