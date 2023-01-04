import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Form,
  Input,
  Divider,
  message,
  Modal,
} from "antd";

const InformacoesDaConta = (props) => {
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Informações da conta
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Form
            name="basic"
            layout={"vertical"}
            initialValues={{}}
            onFinish={(e) => {}}
            onFinishFailed={(e) => {}}
            autoComplete="off"
          >
            <Form.Item
              label="Nome"
              name="nome"
              style={{ width: "300px" }}
              rules={
                [
                  //{ required: true, message: "Please input your username!" },
                ]
              }
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              style={{ width: "300px" }}
              rules={
                [
                  //{ required: true, message: "Please input your username!" },
                ]
              }
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="CNPJ"
              name="cnpj"
              style={{ width: "300px" }}
              rules={
                [
                  //{ required: true, message: "Please input your username!" },
                ]
              }
            >
              <Input />
            </Form.Item>

            <Form.Item label="Senha">
              <Button type="primary" onClick={(e) => setIsPasswordChange(true)}>
                Alterar
              </Button>
            </Form.Item>

            <Form.Item style={{ marginBottom: "0px" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ display: "block", marginLeft: "auto" }}
                onClick={(e) =>
                  message.success("Informações alteradas com sucesso!")
                }
              >
                Salvar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
      <Modal
        title="Alterar senha"
        open={isPasswordChange}
        onOk={(e) => {
          setIsPasswordChange(false);
          message.success("Senha alterada com sucesso!");
        }}
        okText="Alterar"
        onCancel={(e) => setIsPasswordChange(false)}
        zIndex={1001}
      >
        <Form
          name="change_password"
          layout={"vertical"}
          onFinish={(e) => {}}
          onFinishFailed={(e) => {}}
          autoComplete="off"
        >
          <Form.Item label="Nova senha" name="senha">
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <Form.Item label="Confirme a nova senha" name="confirmar_senha">
            <Input.Password placeholder="Senha" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default InformacoesDaConta;
