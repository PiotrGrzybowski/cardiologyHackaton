import React from "react";
import {Breadcrumb} from "antd";
import {Link, withRouter} from "react-router-dom";

const breadcrumbItemMap = {
    'pacjent': 'Pacjent',
    'lekarz-wykresy': 'Wykresy',
    'lekarz-badania': 'Badania'
}

const BreadcrumbsPure = (props) => {
    const {pathname} = props.location;
    const purePathname = pathname.slice(1);
    const breadcrumbItem = breadcrumbItemMap[purePathname];

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
            <Breadcrumb.Item>{ breadcrumbItem ? breadcrumbItem : null }</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export const Breadcrumbs = withRouter(props => <BreadcrumbsPure {...props}/>);
