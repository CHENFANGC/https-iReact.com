import React from 'react'
import { Row, Col } from 'antd';

export default class Admin extends React.Component{

    render(){
        return (
            <Row>
                <Col span="3">
                    Left
                </Col>
                <Col span="21">
                    Right
                </Col>
            </Row>
        );
    }
}