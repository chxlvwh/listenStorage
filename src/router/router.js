import VueRouter from 'vue-router'

const app = ()=> import('@/App.vue')
const foo = ()=> import('@/components/foo.vue');
const bar = ()=> import('@/components/bar.vue');

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: foo,
			redirect: {
				path: '/foo/bar'
			},
			children: [
				{
					path: '/foo/bar',
					component: bar
				}
			]
		},
	]
});

export default router;
