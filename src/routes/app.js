import { FOR_ALL, GUEST_ONLY, USER_ONLY, ADMIN_ONLY } from '@/consts';

const applinks = [];

const adminlinks = [
   {
      name: 'dashboard',
      path: '/dashboard',
      view: 'Dashboard',
      parent: '',
      meta: {
         order: 0,
         icon: 'mdi-view-dashboard',
         title: 'Dashboard',
         type: ADMIN_ONLY,
         menu: true
      } 
   },
   {
      name: 'messages',
      path: '/messages',
      view: 'Messages',
      parent: 'dashboard',
      meta: {
         order: 0,
         icon: 'mdi-mail',
         title: '需求諮詢',
         type: ADMIN_ONLY,
         menu: true
      } 
   },
   {
      name: 'notices',
      path: '/notices',
      view: 'Notices',
      parent: 'dashboard',
      meta: {
         order: 0,
         icon: 'mdi-bulletin-board',
         title: '公告訊息',
         type: ADMIN_ONLY,
         menu: true
      } 
   },
   {
      name: 'pays',
      path: '/pays',
      view: 'Pays',
      parent: '',
      meta: {
         order: 0,
         icon: 'mdi-cash-usd-outline',
         title: '付款',
         type: ADMIN_ONLY,
         menu: true
      } 
   },
];

const guestLinks = [{
   name: 'Login',
   path: '/login',
   view: 'Login',
   parent: 'Dashboard',
   meta: {
      icon: 'mdi-login-variant',
      title: 'Login',
      type: GUEST_ONLY,
      menu: true
   } 
}];

let appRoutes = applinks.concat(adminlinks).concat(guestLinks);

for(let i = 0; i < appRoutes.length; i++){
   appRoutes[i].meta.order = i;
}

export default appRoutes;