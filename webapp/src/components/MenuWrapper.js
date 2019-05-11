import {Menu} from "antd";
import {Link, withRouter} from "react-router-dom";
import React from "react";

const ItemMap = {
    'pacjent': '1',
    'lekarz-wykresy': '2',
    'lekarz-badania': '3'
}

function MenuWrapperPure(props) {
    const {pathname} = props.location;
    const purePathname = pathname.slice(1);
    const selected = ItemMap[purePathname];

    return <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        selectedKeys={[selected]}
        style={{lineHeight: "64px"}}
    >
        <Menu.Item key="1"><Link to="/pacjent">Panel pacjenta</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/lekarz-wykresy">Panel lekarza - wykresy</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/lekarz-badania">Panel lekarza - badania</Link></Menu.Item>
    </Menu>;
}

export const MenuWrapper = withRouter(props => <MenuWrapperPure {...props}/>);
