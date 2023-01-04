import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Tabs,
  Form,
  Input,
  Select,
  Checkbox,
  message,
  DatePicker,
  InputNumber,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../../sass/tab.scss";
import RichTextInput from "../../../components/layout/RichTextInput/RichTextInput";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const NovaVaga = (props) => {
  const navigate = useNavigate();

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
          Nova Vaga
        </Typography.Title>
      </Row>
      <Row>
        <Card
          className="card-with-tabs"
          bordered={false}
          style={{ width: "100%", marginTop: 12 }}
        >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Anúncio de Vaga" key="1">
                <Form
                  name="nova_vaga"
                  layout={"vertical"}
                  onFinish={(e) => {}}
                  onFinishFailed={(e) => {}}
                  autoComplete="off"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Nome da vaga"
                        name="Nome da vaga"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        label="Vagas Disponíveis"
                        name="Vagas Disponíveis"
                      >
                        <InputNumber min={1} max={10} defaultValue={3} style={{ width: "75%" }} align="right" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="Numero máximo de aplicantes"
                        name="Numero máximo de aplicantes"
                      >
                        <InputNumber min={1} max={100} defaultValue={50} style={{ width: "60%" }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={12}>
                      <Form.Item label="Prazo para receber novas inscrições" name="prazo">
                        <RangePicker style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="" name="prazoTwo">
                        <Checkbox style={{ marginTop: "8%" }}>Deixar anúncio aberto sem prazo</Checkbox>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={24}>
                      <Form.Item label="Descrição da vaga" name="Descricao da vaga">
                        <TextArea rows={5} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={24}>
                      <Form.Item label="Requisitos da vaga" name="Requisitos da vaga">
                        <TextArea rows={5} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={24}>
                      <Form.Item label="Benefícios da vaga" name="Benefícios da vaga">
                        <TextArea rows={5} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Checkbox style={{ marginLeft: "1%" }}>CLT</Checkbox>
                    <Checkbox >PJ</Checkbox>
                    <Checkbox >Vale refeição</Checkbox>
                    <Checkbox >Vale alimentação</Checkbox>
                    <Checkbox >Vale transporte</Checkbox>
                  </Row>
                  
                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={24}>
                      <Form.Item label="Status da vaga" name="Status da vaga">
                        <Col span={4}>
                            <input style={{ accentColor: '#7CFC00' }} type="radio" value="Ativa" name="on"/><span style={{marginLeft: "4%"}}>Ativa</span>
                            <input style={{ marginLeft: "6%", accentColor: '#7CFC00' }} type="radio" value="Pausada" name="on"/><span style={{marginLeft: "4%"}}>Pausada</span>
                        </Col>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Tabs.TabPane>
              <Tabs.TabPane
                style={{ marginBottom: 16 }}
                tab="Etapas de Contratação"
                key="2"
              >
                <Form
                  name="nova_vaga"
                  layout={"vertical"}
                  onFinish={(e) => {}}
                  onFinishFailed={(e) => {}}
                  autoComplete="off"
                >
                  <Row gutter={16}>
                    <Checkbox style={{ marginLeft: "1%" }}>Criar etapas de contratação</Checkbox>
                    <Checkbox >Avisar candidatos por e-mail</Checkbox>
                    <Checkbox >Avisar candidatos por SMS</Checkbox>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={12}>
                      <Form.Item
                        label="Nome da etapa"
                        name="Nome da etapa"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={24}>
                      <Form.Item label="Descrição da etapa" name="Descrição da etapa">
                        <TextArea rows={5} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Checkbox style={{ marginLeft: "1%" }}>Essa etapa receberá uma pontuação</Checkbox>
                  </Row>

                  <Row gutter={16} style={{ marginTop: "2%" }}>
                    <Col span={24}>
                      <Form.Item label="Áreas avaliadas com pontuação:" name="Áreas avaliadas com pontuação:">
                        <Select
                          mode="tags"
                          style={{ width: '50%' }}
                          placeholder="Selecione ou escreva as áreas"
                          showArrow
                          defaultValue={['Desenvoltura', 'Proficiência técnica']}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                </Form>
              </Tabs.TabPane>
              <Tabs.TabPane
                style={{ marginBottom: 16 }}
                tab="Template de aviso"
                key="3"
              >
                <RichTextInput />
              </Tabs.TabPane>
            </Tabs>
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "block", marginLeft: "auto" }}
              onClick={(e) => {
                message.success("Vaga criada com sucesso");
                navigate("/rh/vagas");
              }}
            >
              Criar Vaga
            </Button>
        </Card>
      </Row>
    </>
  );
};

export default NovaVaga;

