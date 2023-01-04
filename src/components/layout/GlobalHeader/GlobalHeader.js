import React, { useEffect, useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Breadcrumb } from "antd";
import "../../../sass/layout-header.scss";
import { useLocation, Link, useParams } from "react-router-dom";
import UserButton from "./UserButton/UserButton";

const GlobalHeader = (props) => {
  const [formURL, setFormURL] = useState("");
  const [editFormURL, setEditFormURL] = useState("");
  let location = useLocation();
  let params = useParams();

  useEffect(() => {
    setFormURL(`/forms/view/${params.id}`);
    setEditFormURL(`/forms/edit/${params.uuid}`);
  }, [params]);

  const breadcrumbNameMap = {
    "/dashboard": "Dashboard",
    "/forms": "Formulários",
    [formURL]: "Visualizar dados",
    "/forms/newform": "Novo formulário",
    [editFormURL]: "Editar formulário",
    "/team": "Time",
    "/account": "Conta",
    "/account/profile": "Perfil",
    "/account/integrations": "Integrações",
    "/account/configurations": "Configurações",
    "/account/payment": "Pagamento",
    "/adminclients": "Clientes",
    "/admininvoices": "Faturas",
    "/adminrecoveremail": "Recuperar e-mail",
  };

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const nextItem = pathSnippets[index + 1];
    //@ts-ignore
    if (!isNaN(nextItem)) {
      return <React.Fragment key={index}></React.Fragment>;
    }
    if (breadcrumbNameMap[url] === undefined) {
      return <React.Fragment key={index}></React.Fragment>;
    }
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <React.Fragment key="start"></React.Fragment>,
  ].concat(extraBreadcrumbItems);

  return (
    <>
      <Layout.Header className="site-layout-sub-header-background layout-header">
        {props.collapsed ? (
          <MenuUnfoldOutlined
            className="sidebar-collapse-icon"
            onClick={(e) => props.setCollapsed(false)}
          />
        ) : (
          <MenuFoldOutlined
            className="sidebar-collapse-icon"
            onClick={(e) => props.setCollapsed(true)}
          />
        )}
        <Breadcrumb className="breadcrumb-header">{breadcrumbItems}</Breadcrumb>
        <div className="right-content">
          <UserButton
            username={"João da Silva"}
            accessLevel={"account_admin"}
          />
        </div>
      </Layout.Header>
    </>
  );
};

export default GlobalHeader;
