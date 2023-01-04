import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Layout,
  Select,
  Input,
} from "antd";
import "../../sass/layout-header.scss";
import { Link } from "react-router-dom";
import imagem1 from '../../images/Group-16.png';
import imagem2 from '../../images/Group-28.png';
import imagem3 from '../../images/Group-29.png';
import imagem4 from '../../images/Group-30.png';
import imagem5 from '../../images/Vector-2.png';
import imagem6 from '../../images/Group-39.png';

const { Text } = Typography;

const PaginaInicial = (props) => {

  const logo = (
    <svg
      width="139"
      height="33"
      viewBox="0 0 139 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.6523 8.86719L53.0391 26H47.5898L42 8.86719H47.2031L49.5352 17.5508C49.6211 17.8789 49.7188 18.3008 49.8281 18.8164C49.9453 19.3242 50.0508 19.832 50.1445 20.3398C50.2461 20.8477 50.3086 21.2617 50.332 21.582C50.3633 21.2617 50.4219 20.8516 50.5078 20.3516C50.5938 19.8516 50.6875 19.3516 50.7891 18.8516C50.8984 18.3438 51 17.9258 51.0938 17.5977L53.4727 8.86719H58.6523ZM66.7266 12.4883C68.4062 12.4883 69.7188 12.9062 70.6641 13.7422C71.6094 14.5703 72.082 15.7539 72.082 17.293V26H68.9062L68.0273 24.2422H67.9336C67.5586 24.7109 67.1719 25.0938 66.7734 25.3906C66.3828 25.6797 65.9336 25.8906 65.4258 26.0234C64.918 26.1641 64.2969 26.2344 63.5625 26.2344C62.7969 26.2344 62.1094 26.0781 61.5 25.7656C60.8906 25.4531 60.4102 24.9805 60.0586 24.3477C59.707 23.7148 59.5312 22.9141 59.5312 21.9453C59.5312 20.5234 60.0234 19.4688 61.0078 18.7812C61.9922 18.0938 63.418 17.707 65.2852 17.6211L67.5 17.5508V17.3633C67.5 16.7695 67.3516 16.3477 67.0547 16.0977C66.7656 15.8477 66.375 15.7227 65.8828 15.7227C65.3594 15.7227 64.7734 15.8164 64.125 16.0039C63.4844 16.1836 62.8398 16.418 62.1914 16.707L60.8672 13.6836C61.6328 13.293 62.5 12.9961 63.4688 12.793C64.4375 12.5898 65.5234 12.4883 66.7266 12.4883ZM67.5234 20.0703L66.4688 20.1172C65.625 20.1484 65.0312 20.2969 64.6875 20.5625C64.3516 20.8203 64.1836 21.1914 64.1836 21.6758C64.1836 22.1289 64.3047 22.4648 64.5469 22.6836C64.7891 22.8945 65.1094 23 65.5078 23C66.0625 23 66.5352 22.8242 66.9258 22.4727C67.3242 22.1211 67.5234 21.6641 67.5234 21.1016V20.0703ZM79.7344 31.7656C77.8516 31.7656 76.3984 31.4492 75.375 30.8164C74.3594 30.1914 73.8516 29.2891 73.8516 28.1094C73.8516 27.3203 74.0977 26.668 74.5898 26.1523C75.082 25.6367 75.8203 25.2656 76.8047 25.0391C76.3984 24.8672 76.043 24.5898 75.7383 24.207C75.4414 23.8242 75.293 23.4453 75.293 23.0703C75.293 22.6562 75.4062 22.293 75.6328 21.9805C75.8594 21.6602 76.332 21.2812 77.0508 20.8438C76.3633 20.5391 75.8203 20.0625 75.4219 19.4141C75.0312 18.7656 74.8359 17.9766 74.8359 17.0469C74.8359 16.0859 75.0547 15.2656 75.4922 14.5859C75.9375 13.9062 76.582 13.3867 77.4258 13.0273C78.2773 12.668 79.3125 12.4883 80.5312 12.4883C80.6953 12.4883 80.9453 12.5039 81.2812 12.5352C81.6172 12.5586 81.957 12.5898 82.3008 12.6289C82.6445 12.6602 82.9102 12.6914 83.0977 12.7227H87.7266V14.9375L85.9102 15.6055C86.0352 15.832 86.1289 16.0781 86.1914 16.3438C86.2539 16.6094 86.2852 16.8906 86.2852 17.1875C86.2852 18.6172 85.7812 19.7266 84.7734 20.5156C83.7734 21.3047 82.2773 21.6992 80.2852 21.6992C79.793 21.6992 79.4023 21.668 79.1133 21.6055C79.0586 21.707 79.0156 21.8086 78.9844 21.9102C78.9609 22.0039 78.9492 22.0938 78.9492 22.1797C78.9492 22.3594 79.0547 22.5039 79.2656 22.6133C79.4844 22.7148 79.7461 22.7852 80.0508 22.8242C80.3633 22.8633 80.6602 22.8828 80.9414 22.8828H83.1445C84.6367 22.8828 85.7539 23.1953 86.4961 23.8203C87.2383 24.4453 87.6094 25.3867 87.6094 26.6445C87.6094 28.2617 86.918 29.5195 85.5352 30.418C84.1602 31.3164 82.2266 31.7656 79.7344 31.7656ZM79.957 28.9062C80.5117 28.9062 81.0703 28.8555 81.6328 28.7539C82.1953 28.6602 82.668 28.5039 83.0508 28.2852C83.4336 28.0664 83.625 27.7773 83.625 27.418C83.625 27.1445 83.5117 26.9375 83.2852 26.7969C83.0586 26.6641 82.7656 26.5742 82.4062 26.5273C82.0469 26.4805 81.668 26.457 81.2695 26.457H79.4883C79.1602 26.457 78.8594 26.5078 78.5859 26.6094C78.3203 26.7188 78.1094 26.8633 77.9531 27.043C77.7969 27.2227 77.7188 27.4258 77.7188 27.6523C77.7188 28.0273 77.9219 28.3281 78.3281 28.5547C78.7344 28.7891 79.2773 28.9062 79.957 28.9062ZM80.5781 19.1094C81.0156 19.1094 81.3516 18.9414 81.5859 18.6055C81.8281 18.2695 81.9492 17.7656 81.9492 17.0938C81.9492 16.4062 81.8359 15.8906 81.6094 15.5469C81.3828 15.2031 81.0391 15.0312 80.5781 15.0312C80.1016 15.0312 79.7461 15.2031 79.5117 15.5469C79.2773 15.8828 79.1602 16.3906 79.1602 17.0703C79.1602 17.75 79.2773 18.2617 79.5117 18.6055C79.7461 18.9414 80.1016 19.1094 80.5781 19.1094ZM96.2344 12.4883C97.9141 12.4883 99.2266 12.9062 100.172 13.7422C101.117 14.5703 101.59 15.7539 101.59 17.293V26H98.4141L97.5352 24.2422H97.4414C97.0664 24.7109 96.6797 25.0938 96.2812 25.3906C95.8906 25.6797 95.4414 25.8906 94.9336 26.0234C94.4258 26.1641 93.8047 26.2344 93.0703 26.2344C92.3047 26.2344 91.6172 26.0781 91.0078 25.7656C90.3984 25.4531 89.918 24.9805 89.5664 24.3477C89.2148 23.7148 89.0391 22.9141 89.0391 21.9453C89.0391 20.5234 89.5312 19.4688 90.5156 18.7812C91.5 18.0938 92.9258 17.707 94.793 17.6211L97.0078 17.5508V17.3633C97.0078 16.7695 96.8594 16.3477 96.5625 16.0977C96.2734 15.8477 95.8828 15.7227 95.3906 15.7227C94.8672 15.7227 94.2812 15.8164 93.6328 16.0039C92.9922 16.1836 92.3477 16.418 91.6992 16.707L90.375 13.6836C91.1406 13.293 92.0078 12.9961 92.9766 12.793C93.9453 12.5898 95.0312 12.4883 96.2344 12.4883ZM97.0312 20.0703L95.9766 20.1172C95.1328 20.1484 94.5391 20.2969 94.1953 20.5625C93.8594 20.8203 93.6914 21.1914 93.6914 21.6758C93.6914 22.1289 93.8125 22.4648 94.0547 22.6836C94.2969 22.8945 94.6172 23 95.0156 23C95.5703 23 96.043 22.8242 96.4336 22.4727C96.832 22.1211 97.0312 21.6641 97.0312 21.1016V20.0703ZM114.574 21.9219C114.574 22.7656 114.387 23.5117 114.012 24.1602C113.637 24.8086 113.035 25.3164 112.207 25.6836C111.387 26.0508 110.305 26.2344 108.961 26.2344C108.016 26.2344 107.168 26.1836 106.418 26.082C105.676 25.9805 104.922 25.7852 104.156 25.4961V21.8281C104.992 22.2109 105.844 22.4883 106.711 22.6602C107.578 22.8242 108.262 22.9062 108.762 22.9062C109.277 22.9062 109.652 22.8516 109.887 22.7422C110.129 22.625 110.25 22.4531 110.25 22.2266C110.25 22.0312 110.168 21.8672 110.004 21.7344C109.848 21.5938 109.562 21.4336 109.148 21.2539C108.742 21.0742 108.168 20.832 107.426 20.5273C106.691 20.2227 106.078 19.8906 105.586 19.5312C105.102 19.1719 104.738 18.7422 104.496 18.2422C104.254 17.7422 104.133 17.1289 104.133 16.4023C104.133 15.1055 104.633 14.1289 105.633 13.4727C106.633 12.8164 107.957 12.4883 109.605 12.4883C110.48 12.4883 111.305 12.5859 112.078 12.7812C112.852 12.9688 113.652 13.2461 114.48 13.6133L113.227 16.5664C112.57 16.2695 111.906 16.0312 111.234 15.8516C110.562 15.6719 110.027 15.582 109.629 15.582C109.27 15.582 108.992 15.6289 108.797 15.7227C108.602 15.8164 108.504 15.9531 108.504 16.1328C108.504 16.2969 108.57 16.4414 108.703 16.5664C108.844 16.6914 109.105 16.8359 109.488 17C109.871 17.1641 110.43 17.3945 111.164 17.6914C111.938 18.0039 112.574 18.3398 113.074 18.6992C113.582 19.0508 113.957 19.4805 114.199 19.9883C114.449 20.4961 114.574 21.1406 114.574 21.9219ZM124.957 26H120.328V12.6523H116.145V8.86719H129.129V12.6523H124.957V26ZM131.578 26V8.86719H136.23V26H131.578Z"
        fill="#6D6D6D"
      />
      <rect y="2" width="28" height="28" fill="#38B000" />
    </svg>
  );

  return (
    <>
      <Layout.Header className="site-layout-sub-header-background layout-header" style={{ height: "80px" }}>
        <Row justify="center" style={{ width: "100%" }}>
          <Col span={8} style={{ marginTop: "2%" }}>
            <Row>
              <a style={{ marginLeft: "35%" }} href="/PaginaInicial">
              <div>{logo}</div>
              </a>
            </Row>
          </Col>
          <Col span={8} style={{ marginTop: "1%", display: "flex", flexDirection: "row" }}>
            <Row justify="center" style={{ width: "100%" }}>
              <Button type="text" style={{ marginRight: "1%", marginTop: "10px" }} href="/vagas">Vagas</Button>
              <Button type="text" style={{ marginLeft: "1%", marginRight: "8%", marginTop: "10px" }} href="/PaginaDePlanos">Planos para empresas</Button>
            </Row>
          </Col>
          <Col span={8} style={{ marginTop: "1%" }}>
            <Row justify="center" style={{ marginLeft: "8%" }}>
              <Button type="secondary" style={{ marginLeft: "5%", marginTop: "1%" }}href="/cadastro">Criar nova conta</Button>
              <Button type="primary" style={{ marginLeft: "5%", marginTop: "1%" }} href="/login">Entrar</Button>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout>
        <Card bordered={false} style={{ height: "600px", width: "100%", alignContent: "center" }}>
          <Row style={{ width: "100%" }}>
            <Col span={8} style={{ marginTop: "2%", marginLeft: "11%" }}>
              <h3 >
                🚀 Acelere sua carreira profissional
              </h3>
              <Typography.Title level={1}>
                Seja contratado pelas melhores empresas de TI
              </Typography.Title>
              <Row>
                <Select
                  placeholder="Selecione a linguagem de programação"
                  style={{ width: "60%" }}
                >
                  <Select.Option value="java">
                    Java
                  </Select.Option>
                  <Select.Option value="react">
                    React
                  </Select.Option>
                  <Select.Option value="php">
                    PHP
                  </Select.Option>
                </Select>
                <Button type="primary" style={{ marginLeft: "2%"}}>Buscar vaga</Button>
              </Row>
            </Col>
            <div>
              <Col span={16} style={{marginLeft: "60%"}}>
                <img src={imagem1} className="imagem1" alt="" />
              </Col>
            </div>
          </Row>
        </Card>
        <Row style={{marginTop: "2%", }}>
          <Col span={24}>
          <Typography.Title level={4} style={{textAlign: 'center' }}>
            Empresas que confiam em nós
          </Typography.Title>
          </Col>
        </Row>
        <Row style={{marginTop: "1%"}}>
          <Col span={9} style={{marginLeft: "3%"}}>
          </Col>
          <Col span={2} >
            <Text type="secondary">
              LoremTI
            </Text>
          </Col>
          <Col span={2}>
            <Text type="secondary">
              Ipsum
            </Text>
          </Col>
          <Col span={2}>
            <Text type="secondary">
             Orci
            </Text>
          </Col>
        </Row>
        <Card bordered={false} style={{ height: "450px", width: "100%", alignContent: "center", marginTop: "2%"}}>
          <Row style={{ width: "100%" }}>
            <Col span = {9}> 
            </Col>
            <Col span= {6}>
              <Typography.Title level={1} style={{textAlign: 'center', marginTop: "5%"}}>
                Como podemos ajudar sua empresa?
              </Typography.Title>
            </Col>
          </Row>
            <div>
            <Row style={{ marginTop: "3%" }}>
              <Col span={4} style={{position: "static"}}>
              </Col>
              <Col span={6} style={{ alignContent: "center" }}>
                <img src={imagem2} className="imagem2" alt="" />
              </Col>
              <Col span={6}>
                <img src={imagem3} className="imagem3" alt="" />
              </Col>
              <Col span={6}>
                <img src={imagem4} className="imagem4" alt="" />
              </Col>
            </Row>
            </div>
        </Card>
        <Row style={{ width: "100%" }}>
            <Col span={6} style={{ marginTop: "2%", marginLeft: "11%", marginRight: "10%" }}>
              <Typography.Title level={1}>
                Impulsione sua empresa com novas contratações
              </Typography.Title>
              <h4>
                Acelere o processo de contratação com o uso da nossa plataforma
              </h4>
              <h3 style={{ marginTop: "5%" }}>
                ✓ Criação ilimitada de vagas
                </h3>
                <h3>
                ✓ Portal para o processo de entrevista
                </h3>
                <h3>
                ✓ Visualização geral de todos candidatos
                </h3>
                <h3>
                ✓ Site com identidade da empresa para listagem de vagas
                </h3>
                <h3>
                ✓ Liste suas vagas em nossa plataforma para atingir um público maior
                </h3>
              <Row>
                <Button type="primary" style={{ marginTop: "2%"}} href="/PaginaDePlanos">Ver planos</Button>
              </Row>
            </Col>
            <div>
              <Col span={24} style={{ marginLeft: "100%", marginTop: "15%" }}>
                <img src={imagem6} className="imagem6" alt="" />
              </Col>
            </div>
          </Row>
        <Card bordered={false} style={{ height: "300px", width: "100%", alignContent: "center", marginTop: "2%" }}>
          <Row>
            <Col span = {9}> 
            </Col>
            <Col span= {6}>
              <Typography.Title level={1} style={{textAlign: 'center', marginTop: "5%"}}>
                Entre em contato com nossa equipe de vendas
              </Typography.Title>
            </Col>
          </Row>
          <Row style={{ marginTop: "1%" }}>
            <Col span={8}>
            </Col>
            <Col span={6}>
              <Input style={{width: "95%"}} placeholder="Insira seu e-mail">
              </Input>
            </Col>
            <Col span={4}>
              <Button type="primary">Solicitar Contato</Button>
            </Col>
          </Row>
        </Card>
      </Layout>
      <Layout.Footer style={{ textAlign: "center", marginTop: "5%", position:"absolute", width:"100%", bottom:-1350 }}>
        <Row justify="center" style={{ width: "100%" }} align="bottom">
          <Col span={8}>
            <Row>
              <div style={{ marginLeft: "30%" }}>{logo}</div>
            </Row>
            <Row>
              <p style={{ marginLeft: "30%" }}>CNPJ 00.000.000/000-00</p>
            </Row>

          </Col>
          <Col span={8}>
            <Row justify="center" style={{ width: "100%", position: "absolute", bottom: "1px" }} align="bottom">
              <p>VagasTI - 2022</p>
            </Row>
          </Col>
          <Col span={8} style={{ marginTop: "1%", display: "flex", flexDirection: "column" }}>
            <Row justify="end" style={{ marginRight: "30%" }}>
              <Link>Termos de Serviço</Link>
            </Row >
            <Row justify="end" style={{ marginRight: "30%" }}>
              <Link>Polpitica de Privacidade</Link>
            </Row>
            <Row justify="end" style={{ marginRight: "30%" }}>
              <Link>Sobre Nós</Link>
            </Row >
          </Col>
        </Row>
      </Layout.Footer>
    </>
  );
};

export default PaginaInicial;