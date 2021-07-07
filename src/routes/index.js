import LoginComponent from "../container/Login/login.component";
import RegisterComponent from "../container/Register/register.component";
import ContactsComponent from "../container/Contacts/contacts.component";
import CreateContactComponent from "../container/CreateContact/create-contact.component";
import CreateContacts from "../layout/CreateContacts/CreateContacts";




const routes = [
    {
        path: '/auth/register/',
        component: RegisterComponent,
        title : 'Register',
        needAuth : false,
    },

    {
        path: '/auth/login/',
        component: LoginComponent,
        title : 'Login',
        needAuth : false,
    },

    {
        path: '/contacts',
        component: ContactsComponent,
        title : 'Contacts',
        needAuth : true,
    },

    {
        path: '/contact/create/',
        component: CreateContacts,
        title : 'Create Contact',
        needAuth : true,
    },

]

export default routes;