import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '../view/SignIn'
import Registration from '../view/Registration'
import ForgetPassword from '../view/ForgetPassword'
import EssentialInformationInput from '../view/EssentialInformation'
import Home from '../view/Home'
import ClassList from '../view/ClassList'
import ClassDetails from '../view/class/ClassDetails'
import ClassWriteComment from '../view/class/ClassWriteComment'
import Buy from '../view/Buy'
import ConfirmationInformation from '../view/buy/ConfirmationInformation'

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/signIn'
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: ForgetPassword,
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/essentialInformationInput',
    name: 'essentialInformationInput',
    component: EssentialInformationInput,
    meta: {
      title: '填写信息'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/classList',
    name: 'classList',
    component: ClassList,
    meta: {
      title: '课程'
    }
  },
  {
    path: '/classDetails',
    name: 'classDetails',
    component: ClassDetails,
    meta: {
      title: '课程详情'
    }
  },
  {
    path: '/classWriteComment',
    name: 'classWriteComment',
    component: ClassWriteComment,
    meta: {
      title: '写评论'
    }
  },
  {
    path: '/buy',
    name: 'buy',
    component: Buy,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/confirmationInformation',
    name: 'confirmationInformation',
    component: ConfirmationInformation,
    meta: {
      title: '确认信息'
    }
  }
]

export default new Router({
  routes
})
