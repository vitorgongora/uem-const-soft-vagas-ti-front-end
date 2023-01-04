import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Radio,
  Button,
  Input,
  Select,
  Space,
} from "antd";
import { InfoCircleOutlined, EditOutlined } from "@ant-design/icons";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";

const AnunciosVagas = (props) => {

  const columns = [
    {
      title: "",
      dataIndex: "status_vaga",
      key: "status_vaga",
      render(text, record) {
        return {
          props: {
            style: { color: text === "Aberta" ? "LimeGreen" : "red" }
          },
          children: <div>{text}</div>
        };
      }
    },
    {
      title: "Nome da vaga",
      dataIndex: "nome_da_vaga",
      key: "nome_da_vaga",
    },
    {
      title: "Vagas preenchidas",
      dataIndex: "vagas_preenchidas",
      key: "vagas_preenchidas",
    },
    {
      title: "Aplicantes pendentes",
      dataIndex: "aplicantes_pendentes",
      key: "aplicantes_pendentes",
    },
    {
      title: "Número de etapas",
      dataIndex: "numero_de_etapas",
      key: "numero_de_etapas",
    },
    {
      title: "Tipo de vaga",
      dataIndex: "tipo_de_vaga",
      key: "tipo_de_vaga",
    },
    {
      title: "",
      key: "action",
      render: (record) => (
        <Space className="table-action-container">
          <Button shape="circle" icon={<EditOutlined />} href={"/adm/anunciosvagas/editarvaga/"+record.nome_da_vaga} />
          <Button shape="circle" icon={<InfoCircleOutlined />} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      status_vaga: "Aberta",
      nome_da_vaga: "Desenvolvedor React",
      vagas_preenchidas: "0/8",
      aplicantes_pendentes: "32",
      numero_de_etapas: "6",
      tipo_de_vaga: "CLT",
    },
    {
      key: "2",
      status_vaga: "Aberta",
      nome_da_vaga: "Desenvolvedor Angular",
      vagas_preenchidas: "1/2",
      aplicantes_pendentes:"10",
      numero_de_etapas: "2",
      tipo_de_vaga: "CLT",
    },
    {
      key: "3",
      status_vaga: "Aberta",
      nome_da_vaga: "Desenvolvedor Back-end",
      vagas_preenchidas: "0/2",
      aplicantes_pendentes:"1",
      numero_de_etapas: "3",
      tipo_de_vaga: "PJ",
    },
    {
      key: "4",
      status_vaga: "Aberta",
      nome_da_vaga: "Desenvolvedor Spring Boot",
      vagas_preenchidas: "1/2",
      aplicantes_pendentes:"10",
      numero_de_etapas: "2",
      tipo_de_vaga: "CLT",
    },
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Anúncios de vagas
        </Typography.Title>
      </Row>
      <Row align="middle">
        <FilterButtonsContainer>
          <Radio.Group value={"abertas"}>
            <Radio.Button value="abertas">Abertas</Radio.Button>
            <Radio.Button value="pausdas">Pausadas</Radio.Button>
            <Radio.Button value="nao_publicadas">Não publicadas</Radio.Button>
            <Radio.Button value="preenchidas">Preenchidas</Radio.Button>
            <Radio.Button value="todas">Todas</Radio.Button>
          </Radio.Group>
        </FilterButtonsContainer>
      </Row>
      <Row>
        <Card
          className="card-table-container"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
          <Row style={{ marginBottom: 8 }} gutter={8}>
            <Col span={4}>
              <Select defaultValue="nome_da_vaga" style={{ width: "100%" }}>
                <Select.Option value="nome_da_vaga">Nome da vaga</Select.Option>
                <Select.Option value="tipo_de_vaga">Tipo de vaga</Select.Option>
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

export default AnunciosVagas;
