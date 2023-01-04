import React from "react";
import { Row, Col, Typography, Card, Table, Radio, Button, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CircleStat from "../../components/CircleStat/CircleStat";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";

const Agendamentos = (props) => {
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
        <Space className="table-action-container">
          <Button shape="circle" icon={<InfoCircleOutlined />} href="agendamentos/visualizaragendamento/1" />
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
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Próximos agendamentos
        </Typography.Title>
      </Row>
      <Row align="middle">
        <FilterButtonsContainer>
          <Radio.Group value={"todos"}>
            <Radio.Button value="todos">Todos</Radio.Button>
            <Radio.Button value="semana">Essa semana</Radio.Button>
            <Radio.Button value="hoje">Hoje</Radio.Button>
          </Radio.Group>
        </FilterButtonsContainer>
        <Button type="primary" style={{ marginLeft: "auto" }} href="agendamentos/novoagendamento">
          Novo Agendamento
        </Button>
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

export default Agendamentos;
