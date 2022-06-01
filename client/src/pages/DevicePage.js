import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import BigStar from '../assets/BigStar.png';
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    
    return (
        <Container className="mt-5">
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2 className='text-center'>{device.name}</h2>
                    <div className="d-flex align-items-center justify-content-center" style={{background: `url(${BigStar}) no-repeat center center`, width: 242, height: 234, backgroundSize: 'cover', fontSize: 64}}>
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card 
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}} 
                >
                    <h3>{device.price} руб.</h3>
                    <Button variant="outline-dark">Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>

            <Row className="d-flex flex-column mt-5">
                <h3>Характеристики:</h3>
                {device.info.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
};

export default DevicePage;