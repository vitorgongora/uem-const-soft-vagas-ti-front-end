import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Radio,
  Button,
  Space,
  Tabs,
  Form,
  Select,
  Checkbox,
  Divider,
  Skeleton,
  Avatar,
  message,
} from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import "../../../sass/tab.scss";
import RichTextInput from "../../../components/layout/RichTextInput/RichTextInput";

const NovoAgendamento = (props) => {
  const [candidatoId, setCandidatoId] = useState(0);
  const navigate = useNavigate();

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
          Novo agendamento
        </Typography.Title>
      </Row>
      <Row>
        <Card
          className="card-with-tabs"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
          <Form
            name="novo_agendamento"
            layout={"vertical"}
            onFinish={(e) => {}}
            onFinishFailed={(e) => {}}
            autoComplete="off"
          >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Criar agendamento manualmente" key="1">
                <Row wrap gutter={24}>
                  <Col span={12}>
                    <Form.Item label="Vaga" name="vaga">
                      <Select
                        placeholder="Selecione a vaga"
                        style={{ width: "100%" }}
                      >
                        <Select.Option value="dev_back">
                          Desenvolvedor back-end
                        </Select.Option>
                        <Select.Option value="dev_front">
                          Desenvolvedor front-end
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <div>
                      <div style={{ marginBottom: 8 }}>
                        Etapa do agendamento
                      </div>
                      Entrevista com RH
                    </div>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Aplicante" name="aplicante">
                      <Select
                        placeholder="Selecione o aplicante"
                        style={{ width: "100%" }}
                        onChange={(e) => setCandidatoId(1)}
                      >
                        <Select.Option value="jefferson">
                          Jefferson
                        </Select.Option>
                        <Select.Option value="maria">Maria</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Avisar por" name="avisar_por">
                      <Checkbox.Group style={{ width: "100%" }}>
                        <Checkbox value="email">E-mail</Checkbox>
                        <Checkbox value="sms">SMS</Checkbox>
                      </Checkbox.Group>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24} wrap style={{ marginTop: "16px" }}>
                  <Col span={24}>
                    <Typography.Text strong>
                      Visão geral do aplicante
                    </Typography.Text>
                    <Divider style={{ marginTop: "6px" }} />
                    {candidatoId != 0 ? (
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
                    ) : (
                      <Skeleton avatar title={false} paragraph={{ rows: 3 }} />
                    )}
                  </Col>
                  <Col span={24}>
                    <Typography.Text>Formação</Typography.Text>
                    <Divider style={{ marginTop: "6px" }} />
                    {candidatoId != 0 ? (
                      <>
                        <Row>
                          <Typography.Text>
                            Graduação em Ciência da Computação - UEM 2018
                          </Typography.Text>
                        </Row>
                        <Row style={{ marginBottom: "4%" }}>
                          <Typography.Link>Acessar currículo</Typography.Link>
                        </Row>
                      </>
                    ) : (
                      <Skeleton title={false} paragraph={{ rows: 2 }} />
                    )}
                  </Col>
                  <Col span={24}>
                    <Typography.Text>Links</Typography.Text>
                    <Divider style={{ marginTop: "6px" }} />
                    {candidatoId != 0 ? (
                      <>
                        <Row>
                          <Typography.Link>
                            {"www.linkedin.com"}
                          </Typography.Link>
                        </Row>
                        <Row style={{ marginBottom: "4%" }}>
                          <Typography.Link>{"www.github.com"}</Typography.Link>
                        </Row>
                      </>
                    ) : (
                      <Skeleton title={false} paragraph={{ rows: 2 }} />
                    )}
                  </Col>
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane
                style={{ marginBottom: 16 }}
                tab="Template de aviso"
                key="2"
              >
                <RichTextInput />
              </Tabs.TabPane>
            </Tabs>
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "block", marginLeft: "auto" }}
              onClick={(e) => {
                message.success("Agendamento criado com sucesso");
                navigate("/rh/agendamentos");
              }}
            >
              Agendar
            </Button>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default NovoAgendamento;
