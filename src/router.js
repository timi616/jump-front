// 引入vue
import Vue from 'vue'
// 引入vue-router路由
import Router from 'vue-router'

// 引入ViewUI
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


// 引入组件或页面
import customerRouter from './view/Customer'
import customerDetailRouter from './view/CustomerDetail'
import tableList from './view/TableList'
import page from './view/Page'
import jumpPage from './view/JumpPage'
import login from './view/Login'
import shuJuXuanRan from './view/ShuJuXuanRan'
import xmdaTable from './view/XmdaTable'

// 使用上面的引入
Vue.use(ViewUI);
Vue.use(Router)

// 实例化router路由
const router = new Router({
    routes:[ //主要这个变量名
        {
            path:'/',
            component:login,
            redirect:'/shuJuXuanRan'
        },
        {
            path:'/customer',
            name:'customer',
            component:customerRouter
        },
        {
            path:'/cusDetail',
            name:'cusDetail',
            component:customerDetailRouter
        },
        {
            path:'/tableList',
            name:'tableList',
            component:tableList
        },
        {
            path:'/page',
            name:'page',
            component:page
        },
        {
            path:'/jumpPage',
            name:'jumpPage',
            component:jumpPage
        },
        {
            path:'/shuJuXuanRan',
            name:'shuJuXuanRan',
            component:shuJuXuanRan
        },
        {
            path:'/xmdaTable',
            name:'xmdaTable',
            component:xmdaTable
        }
    ]
})

// 导出router路由
export default router
