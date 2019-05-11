import React, { useState } from 'react';
import {Button, Col, Form, Input, Radio, Row, notification} from 'antd';

const RadioGroup = Radio.Group;

export const Patient = () => {

    const [weight, setWeight] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [pulse, setPulse] = useState(null);
    const [glucose, setGlucose] = useState(null);
    const [badBreath, setBadBreath] = useState(null);
    const [limbEdema, setLimbEdema] = useState(null);
    const [tookMedicines, setTookMedicines] = useState(null);
    const [alcohol, setAlcohol] = useState(null);

    const fields = [
        weight, pressure, pulse, glucose, badBreath, limbEdema, tookMedicines, alcohol
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            successNotification('success');
            clearFields();
        } else {
            invalidFormNotification('error');
        }
    }

    const isFormValid = () => {
        return fields.reduce((isValid, field) => isValid && field !== null, true);
    }

    const clearFields = () => {
        setWeight(null);
        setPressure(null);
        setPulse(null);
        setGlucose(null);
        setBadBreath(null);
        setLimbEdema(null);
        setTookMedicines(null);
        setAlcohol(null);
    }

    const successNotification = (type) => {
        notification[type]({
            message: 'Wysłano pomyślnie!',
            description: 'Twoje wyniki badań zostały pomyślnie wysłane do lekarza.',
        });
    };

    const invalidFormNotification = (type) => {
        notification[type]({
            message: 'Wypełnij wszystkie pola!',
            description: 'Nie udało się wysłać Twoich badań - musisz wypełnić wszystkie z pól',
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
                            <Input
                                onChange={(e) => setWeight(e.target.value)}
                                value={weight}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Ciśnienie krwi (130/90)"
                        >
                            <Input
                                onChange={(e) => setPressure(e.target.value)}
                                value={pressure}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Tętno bpm (80)"
                        >
                            <Input
                                onChange={(e) => setPulse(e.target.value)}
                                value={pulse}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Poziom glukozy"
                        >
                            <Input
                                onChange={(e) => setGlucose(e.target.value)}
                                value={glucose}
                            />
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
