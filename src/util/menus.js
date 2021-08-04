const menus = [{
    id: 999,
    title: '主页',
    icon: 'el-icon-star-off',
    children: [{
        id: 99,
        title: '控制台',
        path: '/control'
    }]
}, {
    id: 1000,
    title: '后台管理',
    icon: 'el-icon-setting',
    children: [{
        id: 100,
        title: '用户管理',
        path: '/userManage'
    }, {
        id: 101,
        title: '角色管理',
        path: '/roleManage'
    }, {
        id: 102,
        title: '菜单管理',
        path: '/menuManage'
    }, {
        id: 103,
        title: '字典管理',
        path: '/dictionaryManage'
    }, {
        id: 104,
        title: '部门管理',
        path: '/departmentManage'
    }]
},]

export default menus