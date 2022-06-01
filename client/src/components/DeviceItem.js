import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import {useNavigate} from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mt-4" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer', borderColor: 'transparent' }}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className=" text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div>{"Товар"}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image className='ms-1' width={16} height={16} src={star} />
                    </div>
                </div>
                    <div>
                        {device.name}
                    </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;

// width={150} height={150}