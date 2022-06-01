import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
            
    }, [])
    return(
        <Container>
            <Row className='mt-2'>
                <Col md ={3}>
                    <TypeBar/>
                </Col>
                <Col md ={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>

            </Row>
        </Container>


    );


});

export default Shop;