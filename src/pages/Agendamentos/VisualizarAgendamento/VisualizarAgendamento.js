import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Divider,
  Avatar,
  Form,
  Input,
  InputNumber,
  Modal,
  DatePicker,
  message,
} from "antd";
import {
  ArrowLeftOutlined,
  UserOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import "../../../sass/tab.scss";
import "../../../sass/etapa.scss";
import RichTextInput from "../../../components/layout/RichTextInput/RichTextInput";

const VisualizarAgendamento = (props) => {
  const [isCancelarAgendamento, setIsCancelarAgendamento] = useState(false);
  const [isAlterarAgendamento, setIsAlterarAgendamento] = useState(false);
  const [isAgendarEtapa, setIsAgendarEtapa] = useState(false);
  const [isContratarCandidato, setIsContratarCandidato] = useState(false);

  return (
    <>
      <Row>
        <Button
          className="back-button-nav"
          icon={<ArrowLeftOutlined style={{ color: "black" }} />}
          href="/rh/agendamentos"
          style={{ marginRight: "1%" }}
        />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Agendamento - Jefferson da Silva
        </Typography.Title>
        <Button
          type="primary"
          style={{ marginLeft: "auto" }}
          onClick={(e) => setIsAlterarAgendamento(true)}
        >
          Alterar agendamento
        </Button>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Typography.Text strong style={{ marginRight: "2%" }}>
            Perfil do desenvolvedor
          </Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row style={{ marginBottom: "4%" }}>
            <Col span={3}>
              <Avatar size={100} icon={<UserOutlined />} />
            </Col>
            <Col span={21} style={{ marginTop: "1%" }}>
              <Row>
                <Typography.Text style={{ marginLeft: "1%" }}>
                  Jefferson da Silva
                </Typography.Text>
              </Row>
              <Row>
                <Typography.Text style={{ marginLeft: "1%" }}>
                  23 anos
                </Typography.Text>
              </Row>
              <Row>
                <Typography.Text style={{ marginLeft: "1%" }}>
                  Maringá - PR
                </Typography.Text>
              </Row>
            </Col>
          </Row>
          <Typography.Text>Formação</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row>
            <Typography.Text>
              Graduação em Ciência da Computação - UEM 2018
            </Typography.Text>
          </Row>
          <Row style={{ marginBottom: "4%" }}>
            <Typography.Link>Acessar currículo</Typography.Link>
          </Row>
          <Typography.Text>Links</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row>
            <Typography.Link>{"www.linkedin.com/"}</Typography.Link>
          </Row>
          <Row style={{ marginBottom: "4%" }}>
            <Typography.Link>{"www.github.com/"}</Typography.Link>
          </Row>
          <Typography.Text strong>Etapas de contratação</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Typography.Text strong>Etapa 1: Entrevista remota</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <div style={{ marginTop: 12 }}>Observações:</div>
          <div className="etapa-block">
            Nullam id tristique arcu, id commodo leo. Duis maximus fringilla
            lorem. Suspendisse sollicitudin gravida venenatis. Nam tempus,
            tellus vel suscipit condimentum, nulla ligula condimentum tellus, et
            luctus dolor nunc quis massa. Duis et massa vitae nisi pulvinar
            facilisis vitae vitae odio. Vivamus varius urna ut mi faucibus
            ullamcorper. Quisque ipsum arcu, volutpat sed consequat non,
            sagittis sed risus. Aliquam erat volutpat. Duis convallis
            pellentesque diam eget dapibus. Suspendisse convallis viverra lectus
            ac laoreet. Suspendisse bibendum mi in sagittis mattis.
          </div>
          <div style={{ marginTop: 12 }}>Pontuação:</div>
          <div className="etapa-block" style={{ marginBottom: 16 }}>
            Proficiência técnica: 82/100
            <br />
            Desenvoltura: 62/100
            <br />
            <strong>Score final: 72/100</strong>
          </div>
          <Typography.Text>Etapa 2: Entrevista remota</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Typography.Text>
            Etapa agendada para 20/10/2021 09:50
          </Typography.Text>
          <Form
            name="visualizar_agendamento"
            layout={"vertical"}
            onFinish={(e) => {}}
            onFinishFailed={(e) => {}}
            autoComplete="off"
            style={{ marginTop: 12, marginBottom: 16 }}
          >
            <Form.Item label="Observações:">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Typography.Text>Pontuação:</Typography.Text>
            <Form.Item label="Desenvoltura">
              <InputNumber placeholder="0" max={100} min={0} />
            </Form.Item>
            <Form.Item label="Trabalho em equipe">
              <InputNumber placeholder="0" max={100} min={0} />
            </Form.Item>
          </Form>
          <Typography.Text>
            Etapa 3: Entrevista presencial com equipe de desenvolvimento
          </Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Button type="primary" onClick={(e) => setIsAgendarEtapa(true)}>
            Agendar etapa
          </Button>
          <Row justify="end">
            <Button
              type="primary"
              disabled
              style={{ marginLeft: "auto" }}
              onClick={(e) => {
                setIsContratarCandidato(true);
                message.success("Candidato contratado com sucesso");
              }}
            >
              Contratar candidato
            </Button>
          </Row>
        </Card>
      </Row>
      <Modal
        title={<>Contratar candidato</>}
        open={isContratarCandidato}
        onOk={(e) => setIsContratarCandidato(false)}
        onCancel={(e) => setIsContratarCandidato(false)}
        zIndex={1001}
        okText="Contratar"
        cancelText="Cancelar"
        style={{ minWidth: "80vw" }}
      >
        E-mail de aviso da aprovação no processo seletivo
        <RichTextInput />
      </Modal>
      <Modal
        title={<>Agendar etapa</>}
        open={isAgendarEtapa}
        onOk={(e) => {
          setIsAgendarEtapa(false);
          message.success("Etapa agendada com sucesso");
        }}
        onCancel={(e) => setIsAgendarEtapa(false)}
        zIndex={1001}
        okText="Agendar"
        cancelText="Cancelar"
      >
        <DatePicker
          showTime
          placeholder="Selecione um horário"
          style={{ width: "100%" }}
        />
      </Modal>
      <Modal
        title={<>Alterar agendamento</>}
        open={isAlterarAgendamento}
        onOk={(e) => {
          setIsAlterarAgendamento(false);
          message.success("Agendamento alterado com sucesso");
        }}
        onCancel={(e) => {
          setIsCancelarAgendamento(true);
        }}
        zIndex={1001}
        okText="Alterar"
        cancelText="Cancelar agendamento"
        cancelButtonProps={{ danger: true }}
      >
        <DatePicker
          showTime
          placeholder="Selecione a nova data do agendamento"
          style={{ width: "100%" }}
        />
      </Modal>
      <Modal
        title={
          <>
            <WarningOutlined
              style={{ marginRight: 10, color: "rgba(0, 0, 0, 0.45)" }}
            />
            Atenção
          </>
        }
        open={isCancelarAgendamento}
        onOk={(e) => {
          setIsCancelarAgendamento(false);
          setIsAlterarAgendamento(false);
          message.success("Agendamento cancelado com sucesso");
        }}
        onCancel={(e) => setIsCancelarAgendamento(false)}
        zIndex={1002}
        okText="Sim"
      >
        Você tem certeza que deseja cancelar esse agendamento?
      </Modal>
    </>
  );
};

export default VisualizarAgendamento;
