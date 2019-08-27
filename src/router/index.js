import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import teacherList from '@/components/teacherList'
import teacherDetail from '@/components/teacherDetail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: index
        },
        {
            path: '/teacherList',
            component: teacherList
        },
        {
            path: '/teacherDetail',
            component: teacherDetail
        },

    ],
    linkActiveClass: 'mui-active'
})
