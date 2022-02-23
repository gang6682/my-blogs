export default [{
    path: '/',
    component: '../layouts/SecurityLayout.tsx',
    routes: [{
        path: '/',
        component: '../layouts/BasicLayout.tsx',
        routes: [{
            path: '/',
            component: '../pages/dashboard',
            name: "首页",
        }]
    }, {
        path: '/',
        component: '../layouts/UserLayout.tsx',
        routes: [{
        }]
    }]
}]