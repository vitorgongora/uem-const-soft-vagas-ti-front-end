import React from "react";

import { Row, Col, Typography, Card, Table, Radio, Button, Space, Form, Tabs,  } from "antd";
import {
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { InfoCircleOutlined } from "@ant-design/icons";


const VisualizarVaga = (props) => {
  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (text) => <>{text}</>,
    },
    {
      title: "Etapa",
      dataIndex: "etapa",
      key: "etapa",
    },
    {
      title: "Score atual",
      dataIndex: "score_atual",
      key: "score_atual",
    },
    {
      title: "Data de Inscrição",
      dataIndex: "data_inscricao",
      key: "data_inscricao",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<InfoCircleOutlined />} href={"/rh/vagas/visualizarvaga/visualizarcandidato"}/>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      nome: "John Brown",
      vaga: "Desenvolvedor React",
      etapa: "Atividade em grupo",
      score_atual: "70/100",
      data_inscricao: "30/10/2021 09:42",
    },
    {
      key: "2",
      nome: "Roberto da Silva",
      vaga: "Desenvolvedor Angular",
      etapa: "Teste de programação",
      score_atual: "35/100",
      data_inscricao: "05/11/2021 16:50",
    },
    {
      key: "3",
      nome: "Jefferson M.",
      vaga: "Desenvolvedor Back-end",
      etapa: "Entrevista presencial",
      score_atual: "67/100",
      data_inscricao: "27/11/2021 09:53",
    },
    {
      key: "4",
      nome: "Silvia P.",
      vaga: "Desenvolvedor Back-end Java",
      etapa: "Entrevista remota",
      score_atual: "21/100",
      data_inscricao: "04/11/2021 15:30",
    },
  ];

  return (
    <>
      <Row>
        <Button
          className="back-button-nav"
          icon={<ArrowLeftOutlined style={{ color: "black" }} />}
          href="/rh/vagas"
          style={{ marginRight: "1%" }}
        />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Desenvolvedor React
        </Typography.Title>
      </Row>
      <Row align="middle">
        <div style={{ marginLeft: "auto" }}>2/5 vagas preenchidas</div>
      </Row>
      <Row>
        <Card
          className="card-table-container"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Pendentes" key="1">
                 <Form
                    name="pendentes"
                    layout={"vertical"}
                    onFinish={(e) => {}}
                    onFinishFailed={(e) => {}}
                    autoComplete="off"
                  ></Form>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Agendados"
                key="2"
              >
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Etapas Finalizadas"
                key="3"
              >
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Contratados"
                key="4"
              >
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Rejeitados"
                key="5"
              >
              </Tabs.TabPane>
            </Tabs>
          <Table columns={columns} dataSource={data} />
        </Card>
      </Row>
    </>
  );
};

export default VisualizarVaga;
