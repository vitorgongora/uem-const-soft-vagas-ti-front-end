import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Radio,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Select,
  message,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";

const Administracao = (props) => {
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false);
  const [isRemoveMemberModalOpen, setIsRemoveMemberModalOpen] = useState(false);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space className="table-action-container">
          <Button
            shape="circle"
            icon={<EditOutlined />}
            onClick={(e) => setIsEditMemberModalOpen(true)}
          />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={(e) => setIsRemoveMemberModalOpen(true)}
          />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      nome: "John Brown",
      cargo: "RH",
    },
    {
      key: "2",
      nome: "Roberto da Silva",
      cargo: "Moderador",
    },
    {
      key: "3",
      nome: "Jefferson M.",
      cargo: "RH",
    },
    {
      key: "4",
      nome: "Silvia P.",
      cargo: "Administrador",
    },
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Membros da administração
        </Typography.Title>
      </Row>
      <Row align="middle">
        <FilterButtonsContainer>
          <Radio.Group defaultValue={"todos"}>
            <Radio.Button value="todos">RH</Radio.Button>
            <Radio.Button value="semana">Moderadores</Radio.Button>
            <Radio.Button value="hoje">Administrador</Radio.Button>
          </Radio.Group>
        </FilterButtonsContainer>
        <div style={{ marginLeft: "auto" }}>5/20 membros</div>
        <Button
          type="primary"
          style={{ marginLeft: "12px" }}
          onClick={(e) => setIsNewMemberModalOpen(true)}
        >
          Novo membro
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
      <Modal
        title="Novo membro"
        open={isNewMemberModalOpen}
        onOk={(e) => {
          setIsNewMemberModalOpen(false);
          message.success("Novo membro adicionado com sucesso!");
        }}
        onCancel={(e) => setIsNewMemberModalOpen(false)}
        zIndex={1001}
      >
        <Form
          name="novo_membro"
          layout={"vertical"}
          initialValues={{}}
          onFinish={(e) => {}}
          onFinishFailed={(e) => {}}
          autoComplete="off"
        >
          <Form.Item label="Nome completo" name="nome">
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Senha" name="senha">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirmar senha" name="confirmar_senha">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Cargo" name="cargo">
            <Select placeholder="Selecione o cargo">
              <Select.Option value="rh">RH</Select.Option>
              <Select.Option value="moderador">Moderador</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Editar membro"
        open={isEditMemberModalOpen}
        onOk={(e) => {
          setIsEditMemberModalOpen(false);
          message.success("Membro editado com sucesso!");
        }}
        onCancel={(e) => setIsEditMemberModalOpen(false)}
        zIndex={1001}
      >
        <Form
          name="editar_membro"
          layout={"vertical"}
          initialValues={{
            nome: "John Brown",
            email: "johnbrown@gmail.com",
            cargo: "rh",
          }}
          onFinish={(e) => {}}
          onFinishFailed={(e) => {}}
          autoComplete="off"
        >
          <Form.Item label="Nome completo" name="nome">
            <Input />
          </Form.Item>
          <Form.Item label="E-mail" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Senha" name="senha">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirmar senha" name="confirmar_senha">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Cargo" name="cargo">
            <Select placeholder="Selecione o cargo">
              <Select.Option value="rh">RH</Select.Option>
              <Select.Option value="moderador">Moderador</Select.Option>
            </Select>
          </Form.Item>
        </Form>
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
        open={isRemoveMemberModalOpen}
        onOk={(e) => {
          setIsRemoveMemberModalOpen(false);
          message.success("Membro removido com sucesso!");
        }}
        onCancel={(e) => setIsRemoveMemberModalOpen(false)}
        zIndex={1001}
        okText="Sim"
      >
        Você tem certeza que deseja remover esse membro? <br />
        Essa ação não pode ser desfeita.
      </Modal>
    </>
  );
};

export default Administracao;
