import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import{useLocation} from 'react-router-dom'

const Auth = () =>{
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return(
        <Container className='d-flex justify-content-center align-items-center'
        style={{heigth: window.innerHeight - 54}}
        >
            <Card style={{width: -700}} className= 'p-5'>
                <h2 className='ml-auto'>{isLogin ? 'Авторизация': "Регистрация"}</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-3'
                    placeholder='Введите email...'
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите пароль...'
                />
                <Row className='d-flex justify-content-between mt-3'>
                    {isLogin ?
                    <div>
                        Нет Аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                    </div>
                    :
                    <div>
                         Есть Аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>

                    </div>
                    }       
                <Button className='mt-3 align-self-end' variant={"outline-dark"}>
                    {isLogin ? 'Войти': 'Регистрация'}
                </Button>
                </Row>

               

            </Form>
            </Card>
        </Container>


    );


};

export default Auth;