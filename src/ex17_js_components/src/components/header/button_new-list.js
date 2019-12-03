const NewListBtn = document.createElement('button');
NewListBtn.classList.add('new_list');
NewListBtn.innerText = 'Create new list';

const NewListBtnStyle = document.createElement('link');
NewListBtnStyle.setAttribute('rel', 'stylesheet');
NewListBtnStyle.setAttribute('href', './src/components/header/button_new-list.css');
document.getElementsByTagName('head')[0].appendChild(NewListBtnStyle);

export {NewListBtn}
