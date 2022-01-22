import React,{ useContext } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Menu, Image, Button,Icon,Input } from 'semantic-ui-react';
import logo from '../../assests/images/logo.svg';
import  {Logout}  from '../../context/actions/auth/logout.action';
import searchContacts from '../../context/actions/searchContacts/search-contacts.actions';
import { GlobalContext } from '../../context/Provider';
import  isAuthenticated  from '../../utils/isAuthenticated'

const Header = () =>{

    const { contactsDispatch } = useContext(GlobalContext)
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;

    const handleUserLogout = () =>{
        Logout(history)(contactsDispatch)
    }

    const onChange =  (e,{ value }) =>{
        const searchText = value.trim().replace(/" "/g,"")

        searchContacts(searchText)(contactsDispatch);
    };

    return (
        <Menu secondary pointing>
            <Image src={logo} width={60}/>
            <Menu.Item as={Link} to='/contacts' style={{fontSize:24}}>
                Easy Contacts
            </Menu.Item>
            
            <Menu.Item>
                <Input placeholder='Search Contacts...' onChange={onChange} />
            </Menu.Item>


            {
                pathname === '/contacts' &&
                <Menu.Item position='right'>
                    <Button as={Link} to='/contact/create/' basic icon>
                        <Icon name='add'></Icon>Create Contact
                    </Button>
                </Menu.Item>
            }
            {
                isAuthenticated() &&
                <Menu.Item position='right'>
                    <Button onClick={handleUserLogout} basic icon>
                        <Icon name='log out'></Icon>Logout
                    </Button>
                </Menu.Item>}
        </Menu>
    )};

export default Header
