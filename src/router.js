// the config of app router

import UserList from './components/user/UserList.vue';
import App from './App.vue';


export default [{
        path: '/',
        component: App,
        children: [{
                name: 'userList',
                path: 'userList',
                component: UserList
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
]
