export const homeRouter = [
    {
        path: '/control',
        name: 'control',
        component: () => import('@/components/control.vue'),
        meta: { title: '控制台' },
    }, {
        path: '/userManage',
        name: 'userManage',
        component: () => import('@/components/systemManage/userManage.vue'),
        meta: { title: '用户管理' },
    },
    {
        path: '/roleManage',
        name: 'roleManage',
        component: () => import('@/components/systemManage/roleManage.vue'),
        meta: { title: '角色设置' },
    }, {
        path: '/menuManage',
        name: 'menuManage',
        component: () => import('@/components/systemManage/menuManage.vue'),
        meta: { title: '菜单管理' },
    },
    {
        path: '/dictionaryManage',
        name: 'dictionaryManage',
        component: () => import('@/components/systemManage/dictionaryManage.vue'),
        meta: { title: '字典管理' },
    }, {
        path: '/departmentManage',
        name: 'departmentManage',
        component: () => import('@/components/systemManage/departmentManage.vue'),
        meta: { title: '部门管理' },
    },

]