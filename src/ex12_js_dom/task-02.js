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
  const arrow = document.querySelector('.profile .user-menu');
  let menu = document.querySelector('.user-menu__content');
  if (menu) {
    arrow.style.transform = 'rotate(0)';
    menu.remove();
  } else {
    menu = document.createElement('ul');
    menu.className = 'user-menu__content';
    menuItems.forEach(item => {
      const newItem = document.createElement('li'),
        a = document.createElement('a');
      a.href = item.url;
      a.innerText = item.text;
      a.id = item.id;
      newItem.appendChild(a);
      menu.appendChild(newItem);
    });
    profile.appendChild(menu);
    arrow.style.transform = 'rotate(180deg)';
  }
};