
let menuList = [
    {
        name: '父导航1',
        id: 'p1',
        children: [
            {
                name: '子导航1-1',
                id: 'p1-c1',
            },
            {
                name: '子导航1-2',
                id: 'p1-c2',
                children: [
                    {
                        name: '子子导航1-2-1',
                        id: 'p1-c2-1',
                    },
                    {
                        name: '子子导航1-2-2',
                        id: 'p1-c2-2',
                    },
                ]
            },
            {
                name: '子导航1-3',
                id: 'p1-c3',
                children: [
                    {
                        name: '子子导航1-3-1',
                        id: 'p1-c3-1',
                    },
                    {
                        name: '子子导航1-2-2',
                        id: 'p1-c3-2',
                    },
                ]
            },
        ]
    },
    {
        name: '父导航2',
        id: 'p2',
        children: [
            {
                name: '子导航2-1',
                id: 'p2-c1',
            },
            {
                name: '子导航2-2',
                id: 'p2-c2',
            },
        ]
    },
    {
        name: '父导航3',
        id: 'p3',
    },
];


function build (menus, padding){
    if(!Array.isArray(menus)){
        return '';
    }
    let _ul = document.createElement('ul');
    menus.every(function(menu){
        if(menu.children && Array.isArray(menu.children)){
            let _li = document.createElement('li');
            _li.style.paddingLeft = padding + 'px';
            let _div = document.createElement('div');
            _div.setAttribute('id', menu.id);
            _div.classList.add('open', 'menu-submenu-title', 'text-ellipsis');
            _div.innerText = menu.name;
            _li.appendChild(_div);
            _li.appendChild(build(menu.children, padding));
            _ul.appendChild(_li);
        }
        else {
            let _li = document.createElement('li');
            _li.setAttribute('id', menu.id);
            _li.innerText = menu.name;
            _li.classList.add('menu-submenu-items', 'text-ellipsis');
            _li.style.paddingLeft = padding + 'px';
            _ul.appendChild(_li);
        }
        return true;
    });
    return _ul;
}

console.log(document.querySelector('#menu-box').appendChild(build(menuList, 20)));

document.querySelector('ul').addEventListener('click', function(e){
    let _classList = e.target.classList;
    if(_classList.contains('menu-submenu-title')){
        if(_classList.contains('open')){
            _classList.remove('open');
            e.target.nextSibling.style.display = 'none';
        }
        else {
            _classList.add('open');
            e.target.nextSibling.style.display = 'block';
        }
    }
    else {

    }
    //if(e.target)
});