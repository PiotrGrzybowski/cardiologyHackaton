import React, { useState } from 'react';
import {Button, Col, Form, Input, Radio, Row, notification} from 'antd';

const RadioGroup = Radio.Group;

export const Patient = () => {

    const [badBreath, setBadBreath] = useState(null);
    const [limbEdema, setLimbEdema] = useState(null);
    const [tookMedicines, setTookMedicines] = useState(null);
    const [alcohol, setAlcohol] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        openNotificationWithIcon('success');
    }

    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Wysłano pomyślnie!',
            description: 'Twoje wyniki badań zostały pomyślnie wysłane do lekarza.',
        });
    };


    return (
        <>
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Item
                            label="Waga (80kg)"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Ciśnienie krwi (130/90)"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Tętno bpm (80)"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Poziom glukozy"
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Czy odczywane były duszności?"
                        >
                            <RadioGroup onChange={(e) => { setBadBreath(e.target.value) }} value={badBreath}>
                                <Radio value={true}>Tak</Radio>
                                <Radio value={false}>Nie</Radio>
                            </RadioGroup>
                        </Form.Item>
                        <Form.Item
                            label="Czy wystąpił obrzęk kończyn?"
                        >
                            <RadioGroup onChange={(e) => { setLimbEdema(e.target.value) }} value={limbEdema}>
                                <Radio value={true}>Tak</Radio>
                                <Radio value={false}>Nie</Radio>
                            </RadioGroup>
                        </Form.Item>
                        <Form.Item
                            label="Czy były wzięte wszystkie zalecane leki?"
                        >
                            <RadioGroup onChange={(e) => { setTookMedicines(e.target.value) }} value={tookMedicines}>
                                <Radio value={true}>Tak</Radio>
                                <Radio value={false}>Nie</Radio>
                            </RadioGroup>
                        </Form.Item>
                        <Form.Item
                            label="Czy był spożywamy alkohol?"
                        >
                            <RadioGroup onChange={(e) => { setAlcohol(e.target.value) }} value={alcohol}>
                                <Radio value={true}>Tak</Radio>
                                <Radio value={false}>Nie</Radio>
                            </RadioGroup>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Wyślij</Button>
                        </Form.Item>
                    </Form>

                </Col>
            </Row>
        </>
    )
}
