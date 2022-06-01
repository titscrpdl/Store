import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';

const CNavBar = observer (() =>{
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
      <NavLink style={{color:'white'}} to={SHOP_ROUTE}>ШубаШубаКупи</NavLink>
      {user.isAuth ?
      <Nav className="ms-auto" style={{color: 'white'}}>
      <Button 
      variant={"outline-light"}
       onClick={() => navigate(ADMIN_ROUTE)}
       
       >Админ Панель
       </Button>
        <Button
         variant={"outline-light"}
         onClick={() => navigate(LOGIN_ROUTE)} className="ms-4"
         
         >Выйти</Button>
        

      </Nav>
      :
      <Nav className="ms-auto" style={{color: 'white'}}>
      <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
      </Nav>
}
</Container>
    </Navbar>

    );


});

export default CNavBar;