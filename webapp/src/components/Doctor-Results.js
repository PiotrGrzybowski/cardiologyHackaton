import React from 'react';
import {Col, Row, Table} from "antd";
import data from '../assets/data/dane';

const isNegative = (value) => {
    return String(value)[0] === '-';
}

const isPositive = (value) => {
    return String(value) !== "w normie" && !isNegative(value);
}

const columns = [{
    title: 'Wartość',
    dataIndex: 'wartosc',
    key: 'wartosc',
}, {
    title: 'Różnica',
    dataIndex: 'roznica',
    key: 'roznica',
}, {
    title: 'Odchylenie',
    dataIndex: 'odchylenie',
    key: 'odchylenie',
    render:  (text, row, index) => {
        if (isPositive(text)) {
            return <div className="cell--green">{text}</div>;
        } else if (isNegative(text)) {
            return <div className="cell--red">{text}</div>;
        } else {
            return <>{text}</>
        }
    }
}];

export const DoctorResults = () => {
    let dataIndex = 0;
    const dataLength = Object.keys(data).length;

    const parseToDataSource = (data, dataIndex) => {
        let dataSource = [];

        for (let i=0; i<6; i++) {
            const dataSourceElement = {
                key: i,
                wartosc: Object.values(Object.values(data)[dataIndex+1])[i],
                roznica: Object.values(Object.values(data)[dataIndex+2])[i],
                odchylenie: Object.values(Object.values(data)[dataIndex+3])[i]
            }

            dataSource.push(dataSourceElement)
        }

        return dataSource;
    }

    const table = (dataIndex) => {
        const dataSource = parseToDataSource(data, dataIndex);

        return (
                <Col span={8}>
                    <Table
                        title={() => Object.keys(data)[dataIndex+1].split('(')[0]}
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </Col>
        )
    }

    const tables = []

    while(dataIndex < dataLength -3) {
        tables.push(table(dataIndex))
        dataIndex = dataIndex + 3;
    }

    console.log(tables)

    return (
        <>
            <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

            {
                tables
            }
            </Row>

        </>
    );
}
