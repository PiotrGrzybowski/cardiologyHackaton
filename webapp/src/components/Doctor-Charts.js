import React, {useState} from 'react';
import {Col, Row, Input, Modal} from "antd";
import pressure from '../assets/data/ciśnienie.png';
import glucose from '../assets/data/glukoza.png';
import pulse from '../assets/data/tetno.png';
import weight from '../assets/data/waga.png';

const Search = Input.Search;

export const DoctorCharts = () => {

    const [pesel, setPesel] = useState(null);
    const [searchTrigger, setSearchTrigger] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);

    const showModal = (modalImage) => {
        setModalVisible(true);
        setCurrentModal(modalImage);
    }

    const chart = (modalImage) => (
        <>
            <img src={modalImage} className="doctors-chart" onClick={() => showModal(modalImage)}/>
            {
                isModalVisible ? <Modal
                    title="Wykres"
                    visible={isModalVisible}
                    onOk={() => {
                        setModalVisible(false)
                    }}
                    onCancel={() => {
                        setModalVisible(false)
                    }}
                    okText="Ok"
                    cancelText="Zamknij"
                    width={1300}
                    maskClosable
                    centered
                    closable
                >
                    <img src={currentModal} className="doctors-chart--big"/>
                </Modal> : null
            }
        </>
    )

    return (
        <>
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Search
                        placeholder="PESEL"
                        value={pesel}
                        onChange={e => setPesel(e.target.value)}
                        onSearch={() => setSearchTrigger(true)}
                        enterButton
                    />
                </Col>
            </Row>
            <br/>
            <br/>
            {
                searchTrigger ?
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <Row type="flex" justify="center">
                                <Col span={12}>
                                    {
                                        chart(pressure)
                                    }
                                </Col>
                                <Col span={12}>
                                    {
                                        chart(glucose)
                                    }
                                </Col>
                            </Row>
                            <Row type="flex" justify="center">
                                <Col span={12}>
                                    {
                                        chart(pulse)
                                    }
                                </Col>
                                <Col span={12}>
                                    {
                                        chart(weight)
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row> : null
            }
        </>
    );
}
