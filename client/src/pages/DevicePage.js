import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'
const DevicePage = () =>{
    const device ={id:1, name:"ШУБА ИЗ ОВЕЧЬЕЙ ШЕРСТИ", price: 22000, rating: 5, img: `https://main-cdn.sbermegamarket.ru/big2/hlr-system/926/768/650/211/183/3/100030584276b0.jpg`}
    const description =[
        {id:1, title: 'Размер', description: '42 - 58'},
        {id:2, title: 'Сезон', description: 'зима'},
        {id:3, title: 'Состав ткани', description: '100% полиэстер'},
        



    ]
    
    return(
        <Container className='mt-3'>
            <Row>
            <Col md={4}>
                <Image width={300} height ={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className='d-flex flex-column align-items-center'>
                    <h2>{device.name}</h2>
                    <div
                        className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}
                    >{device.rating}</div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                className='d-flex flex-column align-items-center justify-content-around'
                style={{width: 300, heght:300, fontSize: 32, border:'5px solid lightgray'}}
                
                >
                    <h3>От: {device.price} руб.</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>

                </Card>
                
            </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info , index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>    
                    )}

            </Row>

        </Container>


    );


};

export default DevicePage;