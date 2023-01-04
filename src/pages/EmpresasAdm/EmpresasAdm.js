import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Button,
  Input,
  Select,
  Space,
  Avatar,
} from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";

const EmpresasAdm = (props) => {

  const columns = [
    {
      title: "",
      dataIndex: "foto_empresa",
      key: "foto_empresa",
      width: '4%',
      render: (record) => (
        <Avatar size={32} icon={<UserOutlined/>}/>
      )
    },
    {
      title: "Nome",
      dataIndex: "nome_empresa",
      key: "nome_empresa",
      width: '91%',
    },
    {
      title: "Ações",
      key: "action",
      width: '5%',
      render: (record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<EditOutlined />} href={"/adm/empresas/editarempresa/"+record.nome_empresa} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      foto_empresa: "",
      nome_empresa: "Whatsapp Inc.",
    },
    {
      key: "2",
      foto_empresa: "",
      nome_empresa: "Micosoft",
    },
    {
      key: "3",
      foto_empresa: "",
      nome_empresa: "Apple Inc.",
    },
    {
      key: "4",
      foto_empresa: "",
      nome_empresa: "GitHub",
    },
    {
      key: "5",
      foto_empresa: "",
      nome_empresa: "Mercado Livre",
    },
    {
      key: "6",
      foto_empresa: "",
      nome_empresa: "OLX",
    },
    {
      key: "7",
      foto_empresa: "",
      nome_empresa: "Facebook",
    },
    
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Contas de empresas
        </Typography.Title>
      </Row>
      <Row>
        <Card
          className="card-table-container"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
          <Row style={{ marginBottom: 8 }} gutter={8}>
            <Col span={4}>
              <Select defaultValue="nome_empresa" style={{ width: "100%" }}>
                <Select.Option value="nome_empresa">Nome</Select.Option>
              </Select>
            </Col>
            <Col span={20}>
              <Input.Search
                placeholder="Insira aqui para filtrar os resultados"
                allowClear
              />
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} />
        </Card>
      </Row>
    </>
  );
};

export default EmpresasAdm;