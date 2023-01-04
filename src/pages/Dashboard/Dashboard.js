import React from "react";
import { Row, Col, Typography, Card, Table, Radio, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CircleStat from "../../components/CircleStat/CircleStat";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";

const Dashboard = (props) => {
  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (text) => <>{text}</>,
    },
    {
      title: "Vaga",
      dataIndex: "vaga",
      key: "vaga",
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
      title: "Horário agendado",
      dataIndex: "horario_agendado",
      key: "horario_agendado",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <div className="table-action-container">
          <Button shape="circle" icon={<InfoCircleOutlined />} />
        </div>
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
      horario_agendado: "30/10/2021 09:42",
    },
    {
      key: "2",
      nome: "Roberto da Silva",
      vaga: "Desenvolvedor Angular",
      etapa: "Teste de programação",
      score_atual: "35/100",
      horario_agendado: "05/11/2021 16:50",
    },
    {
      key: "3",
      nome: "Jefferson M.",
      vaga: "Desenvolvedor Back-end",
      etapa: "Entrevista presencial",
      score_atual: "67/100",
      horario_agendado: "27/11/2021 09:53",
    },
    {
      key: "4",
      nome: "Silvia P.",
      vaga: "Desenvolvedor Back-end Java",
      etapa: "Entrevista remota",
      score_atual: "21/100",
      horario_agendado: "04/11/2021 15:30",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            Bem-vindo João! 👋
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 32 }}>
            Confira uma visualização geral dos processos seletivos abertos na
            sua empresa
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card bordered={false} className="circle-stat-card">
            <CircleStat
              value={126}
              color={"red"}
              description={"Processos seletivos agendados para hoje"}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card bordered={false} className="circle-stat-card">
            <CircleStat
              value={52}
              color={"orange"}
              description={"Aplicantes pendentes análise"}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card bordered={false} className="circle-stat-card">
            <CircleStat
              value={3}
              color={"green"}
              description={"Vagas abertas"}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Typography.Title level={3} style={{ marginTop: 32, marginBottom: 0 }}>
          Próximos agendamentos
        </Typography.Title>
      </Row>
      <Row>
        <FilterButtonsContainer>
          <Radio.Group value={"todos"}>
            <Radio.Button value="todos">Todos</Radio.Button>
            <Radio.Button value="semana">Essa semana</Radio.Button>
            <Radio.Button value="hoje">Hoje</Radio.Button>
          </Radio.Group>
        </FilterButtonsContainer>
      </Row>
      <Row>
        <Card
          className="card-table-container"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
          <Table columns={columns} dataSource={data} />
        </Card>
      </Row>
    </>
  );
};

export default Dashboard;
