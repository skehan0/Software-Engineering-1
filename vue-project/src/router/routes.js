function loadPage (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}.vue`)
}
export default [
    { path: '/', component: loadPage('Home') },
    { path: '/blog', component: loadPage('Blog') },
    { path: '/signup', component: loadPage('SignUp') },
    { path: '/login', component: loadPage('Login') },
    { path: '/about', component: loadPage('About') },
    { path: '/createMenu', component: loadPage('CreateMenu') }

]