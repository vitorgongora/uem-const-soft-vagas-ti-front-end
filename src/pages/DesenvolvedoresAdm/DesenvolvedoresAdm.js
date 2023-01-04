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

const DesenvolvedoresAdm = (props) => {

  const columns = [
    {
      title: "",
      dataIndex: "foto_dev",
      key: "foto_dev",
      width: '4%',
      render: (record) => (
        <Avatar size={32} icon={<UserOutlined/>}/>
      )
    },
    {
      title: "Nome",
      dataIndex: "nome_dev",
      key: "nome_dev",
      width: '91%',
    },
    {
      title: "Ações",
      key: "action",
      width: '5%',
      render: (record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<EditOutlined />} href={"/adm/desenvolvedores/editardev/"+record.nome_dev} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      foto_dev: "",
      nome_dev: "Jefferson da Silva",
    },
    {
      key: "2",
      foto_dev: "",
      nome_dev: "Evelyn Lopes",
    },
    {
      key: "3",
      foto_dev: "",
      nome_dev: "Eduarda Freitas",
    },
    {
      key: "4",
      foto_dev: "",
      nome_dev: "Bárbara Almeida",
    },
    {
      key: "5",
      foto_dev: "",
      nome_dev: "Luigi Cavalcanti",
    },
    {
      key: "6",
      foto_dev: "",
      nome_dev: "Henrique Gomes",
    },
    {
      key: "7",
      foto_dev: "",
      nome_dev: "Isis da Cunha",
    },
    
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Desenvolvedores
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
              <Select defaultValue="nome_dev" style={{ width: "100%" }}>
                <Select.Option value="nome_dev">Nome</Select.Option>
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

export default DesenvolvedoresAdm;







