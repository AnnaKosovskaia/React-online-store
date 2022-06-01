import React, { useContext } from 'react';
import { Context } from './../index';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import {useNavigate} from "react-router-dom";
import { ADMIN_ROUTE } from './../utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate  = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <div>
            <Navbar className="justify-content-between" bg="dark" variant="dark">
                <Container>
                <NavLink className="text-decoration-none text-white" to={SHOP_ROUTE}>Online Store</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant='outline-light' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant='outline-light' onClick={() => logOut()} style={{marginLeft: '20px'}}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
                </Container>

            </Navbar>
        </div>
    );
});

export default NavBar;