import React, { useState } from "react";
import {
  Row,
  Typography,
  Card,
  Button,
  Divider,
  Modal,
  Select,
} from "antd";
import { useLocation } from 'react-router-dom';
import { ArrowLeftOutlined } from "@ant-design/icons";

const EditarEmpresaAdm = (props) => {
  let location = useLocation();
  let pageNameOriginal = location.pathname.split("/")[4];
  let pageName = pageNameOriginal.replace(/%20/g, " ");


  const [isModalOpenRemove, setisModalOpenRemove] = useState(false);

  const showModalOpenRemove = () => {
    setisModalOpenRemove(true);
  };
  const handleOkAccept = () => {
    setisModalOpenRemove(false);
  };
  const handleCancelAccept = () => {
    setisModalOpenRemove(false);
  };


  return (
    <>
      <Row>
        <Button
          icon={<ArrowLeftOutlined style={{ color: "black" }} />}
          href="/adm/empresas"
          style={{ marginRight: "1%" }}
        />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          {pageName}
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Typography.Text strong style={{ marginRight: "2%" }}>Perfil do administrador da empresa</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />

          <Typography.Text>Ações na plataforma</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row>
            <Typography.Text>500 vagas criadas</Typography.Text>
          </Row>
          <Row>
            <Typography.Text>85 vagas abertas</Typography.Text>
          </Row>
          <Row>
            <Typography.Text>50 vagas não publicadas</Typography.Text>
          </Row>
          <Row>
            <Typography.Text>2 vagas pausadas</Typography.Text>
          </Row>
          <Row style={{ marginBottom: "3%" }}>
            <Typography.Text>20 vagas preenchidas</Typography.Text>
          </Row>

          <Typography.Text>Plano</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row>
            <Typography.Text>Plano intermediário</Typography.Text>
          </Row>
          <Row style={{ marginBottom: "3%" }}>
            <Typography.Text>Próxima cobrança em 20 de novembro de 2021 por R$187,90</Typography.Text>
          </Row>
          
          <Row style={{marginBottom:"4%"}}>
            <Select defaultValue="Notas Fiscais" style={{ width: "100%" }} >
              <Select.Option value="Notas Fiscais">Notas Fiscais</Select.Option>
              <Select.Option value="111111111">Nota 001</Select.Option>
              <Select.Option value="222222222">Nota 002</Select.Option>
              <Select.Option value="333333333">Nota 003</Select.Option>
            </Select>
          </Row>

          <Row justify="end">
            <Button
              type="primary"
              htmlType="submit"
              danger
              style={{ display: "block", marginLeft: "auto" }}
              onClick={showModalOpenRemove}
            >
              Remover empresa
            </Button>
          </Row>

        </Card>
      </Row>

      <Modal
        title="Atenção"
        open={isModalOpenRemove}
        onOk={handleOkAccept}
        onCancel={handleCancelAccept}
        mask={false}
        footer={[
          <Button
            onClick={handleCancelAccept}
          >
            Cancelar
          </Button>,
          <Button
            key="link"
            href="/adm/empresas"
            type="primary"
            onClick={handleOkAccept}
          >
            Confirmar
          </Button>
        ]}
      >
        <p>Você tem certeza que deseja remover essa empresa?</p>
        <Typography.Text strong>Essa ação é irreversível</Typography.Text>
        <p>Todas as vagas listadas e processos seletivos serão suspensos.</p>
      </Modal>

    </>
  );
};

export default EditarEmpresaAdm;