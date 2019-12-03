const HeaderProfileMenu = document.createElement('div');
HeaderProfileMenu.classList.add('profile');
HeaderProfileMenu.innerHTML = `
          <div class="user-avatar"></div>
          <div class="user-menu"></div>
          <div class="dropdown-user-menu"></div>
`;

const HeaderProfileMenuStyle = document.createElement('link');
HeaderProfileMenuStyle.setAttribute('rel', 'stylesheet');
HeaderProfileMenuStyle.setAttribute('href', './src/components/header/header__profile-menu.css');
document.getElementsByTagName('head')[0].appendChild(HeaderProfileMenuStyle);

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

HeaderProfileMenu.addEventListener('click', function () {
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

export {HeaderProfileMenu};
