import React from 'react';
import {Col, Row, Table} from "antd";
import data from '../assets/data/dane';

// const dataSourceMock = [{
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street'
// }, {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street'
// }];

//    console.log(Object.keys(data)[dataIndex].split('(')[0]);
//     console.log('wartosci ', Object.values(data)[dataIndex+1]);
//     console.log('roznice ', Object.values(data)[dataIndex+2]);
//     console.log('odchylenie ', Object.values(data)[dataIndex+3]);

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
