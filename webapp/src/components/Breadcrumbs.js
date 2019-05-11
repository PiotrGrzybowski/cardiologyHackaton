import React from "react";
import {Breadcrumb} from "antd";
import {withRouter} from "react-router-dom";

const ItemMap = {
    'pacjent': 'Pacjent',
    'lekarz-wykresy': 'Wykresy',
    'lekarz-badania': 'Badania'
}

const BreadcrumbsPure = (props) => {
    const {pathname} = props.location;
    const purePathname = pathname.slice(1);
    const breadcrumbItem = ItemMap[purePathname];

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
            <Breadcrumb.Item>{ breadcrumbItem ? breadcrumbItem : null }</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export const Breadcrumbs = withRouter(props => <BreadcrumbsPure {...props}/>);
