import React, { useContext } from "react";
import { Dropdown, Menu, Skeleton } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  WalletOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
//import { AccountContext } from "../../../auth/Authentication";

const UserButton = (props) => {
  //let history = useHistory();
  //const { logOut } = useContext(AccountContext);

  const onMenuClick = (event) => {
    if (event.key !== "logout") {
      //history.push("/account/" + event.key);
    } else {
      //onLogoutClick();
    }
  };

  const onLogoutClick = () => {
    //logOut();
    //history.push("/login");
  };

  const menu = (
    <Menu onClick={onMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/rh/perfil">Informações da conta</Link>
      </Menu.Item>
      {props.accessLevel === "account_admin" && (
        <Menu.Item key="payment" icon={<WalletOutlined />}>
          <Link to="/rh/pagamento">Forma de pagamento</Link>
        </Menu.Item>
      )}
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <button className="header-button">
        {props.username === "" ? (
          <Skeleton.Input size="small" active style={{ width: 100 }} />
        ) : (
          <>
            {props.username} <SettingOutlined />
          </>
        )}
      </button>
    </Dropdown>
  );
};

export default UserButton;
