import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Input,
  Divider,
  DatePicker,
  Modal,
  Avatar,
} from "antd";
import { useLocation} from 'react-router-dom';
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";

const EditarDevAdm = (props) => {
  let location = useLocation();
  let pageNameOriginal = location.pathname.split("/")[4];
  let pageName = pageNameOriginal.replace(/%20/g, " ");
  let userNameFixed = pageNameOriginal.replace(/%20/g, "_");


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
          icon={<ArrowLeftOutlined style={{color:"black"}}/>} 
          href="/adm/desenvolvedores" 
          style={{marginRight:"1%"}}
        />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          {pageName}
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Typography.Text strong style={{marginRight:"2%"}}>Perfil do desenvolvedor</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row style={{marginBottom:"4%"}}>
            <Col span={3}>
              <Avatar size={100} icon={<UserOutlined />} />
            </Col>
            <Col span={21} style={{marginTop:"1%"}}>
              <Row>
                  <Typography.Text style={{marginLeft:"1%"}}>{pageName}</Typography.Text>
              </Row>
              <Row>
                  <Typography.Text style={{marginLeft:"1%"}}>23 anos</Typography.Text>
              </Row>
              <Row>
                  <Typography.Text style={{marginLeft:"1%"}}>Maringá - PR</Typography.Text>
              </Row>
            </Col>
          </Row>
          <Typography.Text>Formação</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row>
            <Typography.Text>Graduação em Ciência da Computação - UEM 2018</Typography.Text>
          </Row>
          <Row style={{marginBottom:"4%"}}>
            <Typography.Link>Acessar currículo</Typography.Link>
          </Row>
          <Typography.Text>Links</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row>
            <Typography.Link>{"www.linkedin.com/"+userNameFixed}</Typography.Link>
          </Row>
          <Row style={{marginBottom:"4%"}}>
            <Typography.Link>{"www.github.com/"+userNameFixed}</Typography.Link>
          </Row>
          <Typography.Text>Ações na plataforma</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Row style={{marginBottom:"3%"}}>
            <Typography.Text>Candidatou-se em 32 vagas</Typography.Text>
          </Row>
          <Row justify="end">
            <Button
              type="primary"
              htmlType="submit"
              danger
              style={{ display: "block", marginLeft: "auto" }}
              onClick={showModalOpenRemove}
            >
              Remover conta
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
            href="/adm/desenvolvedores"
            type="primary"
            onClick={handleOkAccept}
          >
            Confirmar
          </Button>
        ]}
      >
        <p>Você tem certeza que deseja remover esse desenvolvedor?</p>
        <Typography.Text strong>Essa ação é irreversível</Typography.Text>
        <p>As candidaturas já enviadas às empresas não serão removidas.</p>
      </Modal>
      
    </>
  );
};

export default EditarDevAdm;