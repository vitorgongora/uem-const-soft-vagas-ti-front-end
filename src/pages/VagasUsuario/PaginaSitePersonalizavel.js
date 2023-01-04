import React, { useState } from "react";
import {Row, Col, Typography, Card, Button, Input, Layout, Form, Select, Pagination, Space, Tree} from "antd";
import "../../sass/layout-header.scss";
import { LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import "../../sass/justifica.scss";

const PaginaSitePersonalizavel = (props) => {
  let loading = false;

  const { Title, Paragraph, Text, Link } = Typography;
  const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-1-0','0-2-0']);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  const treeData = [
    {
      title: 'Escolaridade',
      key: '0-0',
      children: [
        {
          title: 'Técnico',
          key: '0-0-0',
        },
        {
          title: 'Ensino superior (cursando)',
          key: '0-0-1',
        },
        {
          title: 'Ensino superior (completo)',
          key: '0-0-2',
        },
        {
          title: 'Pós graduação',
          key: '0-0-3',
        },
      ],
    },
    {
      title: 'Benefícios',
      key: '0-1',
      children: [
        {
          title: 'Vale Refeição',
          key: '0-1-0',
        },
        {
          title: 'Gym pass',
          key: '0-1-1',
        },
        {
          title: 'Plano de saúde',
          key: '0-1-2',
        },
      ],
    },
    {
      title: 'Tipo da vaga',
      key: '0-2',
      children: [
        {
          title: 'Vale Refeição',
          key: '0-2-0',
        },
        {
          title: 'Gym pass',
          key: '0-2-1',
        }
      ],
    }
  ];

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const logo = (
    <svg
      width="155"
      height="33"
      viewBox="0 0 139 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.0547 20.7969C55.0547 21.8594 54.7852 22.8047 54.2461 23.6328C53.707 24.4531 52.9297 25.0938 51.9141 25.5547C50.8984 26.0078 49.707 26.2344 48.3398 26.2344C47.1992 26.2344 46.2422 26.1562 45.4688 26C44.6953 25.8359 43.8906 25.5547 43.0547 25.1562V21.0312C43.9375 21.4844 44.8555 21.8398 45.8086 22.0977C46.7617 22.3477 47.6367 22.4727 48.4336 22.4727C49.1211 22.4727 49.625 22.3555 49.9453 22.1211C50.2656 21.8789 50.4258 21.5703 50.4258 21.1953C50.4258 20.9609 50.3594 20.7578 50.2266 20.5859C50.1016 20.4062 49.8945 20.2266 49.6055 20.0469C49.3242 19.8672 48.5664 19.5 47.332 18.9453C46.2148 18.4375 45.375 17.9453 44.8125 17.4688C44.2578 16.9922 43.8438 16.4453 43.5703 15.8281C43.3047 15.2109 43.1719 14.4805 43.1719 13.6367C43.1719 12.0586 43.7461 10.8281 44.8945 9.94531C46.043 9.0625 47.6211 8.62109 49.6289 8.62109C51.4023 8.62109 53.2109 9.03125 55.0547 9.85156L53.6367 13.4258C52.0352 12.6914 50.6523 12.3242 49.4883 12.3242C48.8867 12.3242 48.4492 12.4297 48.1758 12.6406C47.9023 12.8516 47.7656 13.1133 47.7656 13.4258C47.7656 13.7617 47.9375 14.0625 48.2812 14.3281C48.6328 14.5938 49.5781 15.0781 51.1172 15.7812C52.5938 16.4453 53.6172 17.1602 54.1875 17.9258C54.7656 18.6836 55.0547 19.6406 55.0547 20.7969ZM66.8906 26L66.3164 24.3477H66.0469C65.6641 24.957 65.1289 25.4258 64.4414 25.7539C63.7617 26.0742 62.9609 26.2344 62.0391 26.2344C60.5781 26.2344 59.4414 25.8125 58.6289 24.9688C57.8164 24.1172 57.4102 22.918 57.4102 21.3711V12.7227H61.9922V19.9766C61.9922 20.8438 62.1133 21.5 62.3555 21.9453C62.6055 22.3906 63.0117 22.6133 63.5742 22.6133C64.3633 22.6133 64.9258 22.3047 65.2617 21.6875C65.5977 21.0625 65.7656 20.0117 65.7656 18.5352V12.7227H70.3477V26H66.8906ZM82.1719 26L81.293 24.2422H81.1992C80.582 25.0078 79.9531 25.5312 79.3125 25.8125C78.6719 26.0938 77.8438 26.2344 76.8281 26.2344C75.5781 26.2344 74.5938 25.8594 73.875 25.1094C73.1562 24.3594 72.7969 23.3047 72.7969 21.9453C72.7969 20.5312 73.2891 19.4805 74.2734 18.793C75.2578 18.0977 76.6836 17.707 78.5508 17.6211L80.7656 17.5508V17.3633C80.7656 16.2695 80.2266 15.7227 79.1484 15.7227C78.1797 15.7227 76.9492 16.0508 75.457 16.707L74.1328 13.6836C75.6797 12.8867 77.6328 12.4883 79.9922 12.4883C81.6953 12.4883 83.0117 12.9102 83.9414 13.7539C84.8789 14.5977 85.3477 15.7773 85.3477 17.293V26H82.1719ZM78.7734 23C79.3281 23 79.8008 22.8242 80.1914 22.4727C80.5898 22.1211 80.7891 21.6641 80.7891 21.1016V20.0703L79.7344 20.1172C78.2266 20.1719 77.4727 20.7266 77.4727 21.7812C77.4727 22.5938 77.9062 23 78.7734 23ZM88.7344 26V8.86719H93.3633V22.2617H99.9609V26H88.7344ZM115.113 19.332C115.113 21.5039 114.527 23.1992 113.355 24.418C112.191 25.6289 110.559 26.2344 108.457 26.2344C106.441 26.2344 104.836 25.6133 103.641 24.3711C102.453 23.1289 101.859 21.4492 101.859 19.332C101.859 17.168 102.441 15.4883 103.605 14.293C104.777 13.0898 106.418 12.4883 108.527 12.4883C109.832 12.4883 110.984 12.7656 111.984 13.3203C112.984 13.875 113.754 14.6719 114.293 15.7109C114.84 16.7422 115.113 17.9492 115.113 19.332ZM106.512 19.332C106.512 20.4727 106.664 21.3438 106.969 21.9453C107.273 22.5391 107.785 22.8359 108.504 22.8359C109.215 22.8359 109.715 22.5391 110.004 21.9453C110.301 21.3438 110.449 20.4727 110.449 19.332C110.449 18.1992 110.301 17.3438 110.004 16.7656C109.707 16.1875 109.199 15.8984 108.48 15.8984C107.777 15.8984 107.273 16.1875 106.969 16.7656C106.664 17.3359 106.512 18.1914 106.512 19.332ZM130.266 12.7227V14.9375L128.449 15.6055C128.699 16.0586 128.824 16.5859 128.824 17.1875C128.824 18.6172 128.32 19.7266 127.312 20.5156C126.312 21.3047 124.816 21.6992 122.824 21.6992C122.332 21.6992 121.941 21.668 121.652 21.6055C121.543 21.8086 121.488 22 121.488 22.1797C121.488 22.4062 121.672 22.582 122.039 22.707C122.406 22.8242 122.887 22.8828 123.48 22.8828H125.684C128.66 22.8828 130.148 24.1367 130.148 26.6445C130.148 28.2617 129.457 29.5195 128.074 30.418C126.699 31.3164 124.766 31.7656 122.273 31.7656C120.391 31.7656 118.938 31.4492 117.914 30.8164C116.898 30.1914 116.391 29.2891 116.391 28.1094C116.391 26.5234 117.375 25.5 119.344 25.0391C118.938 24.8672 118.582 24.5898 118.277 24.207C117.98 23.8242 117.832 23.4453 117.832 23.0703C117.832 22.6562 117.945 22.293 118.172 21.9805C118.398 21.6602 118.871 21.2812 119.59 20.8438C118.902 20.5391 118.359 20.0625 117.961 19.4141C117.57 18.7656 117.375 17.9766 117.375 17.0469C117.375 15.6016 117.867 14.4805 118.852 13.6836C119.836 12.8867 121.242 12.4883 123.07 12.4883C123.312 12.4883 123.73 12.5156 124.324 12.5703C124.918 12.625 125.355 12.6758 125.637 12.7227H130.266ZM120.258 27.6523C120.258 28.0273 120.461 28.3281 120.867 28.5547C121.273 28.7891 121.816 28.9062 122.496 28.9062C123.605 28.9062 124.492 28.7656 125.156 28.4844C125.828 28.2109 126.164 27.8555 126.164 27.418C126.164 27.0664 125.961 26.8164 125.555 26.668C125.148 26.5273 124.566 26.457 123.809 26.457H122.016C121.523 26.457 121.105 26.5703 120.762 26.7969C120.426 27.0312 120.258 27.3164 120.258 27.6523ZM121.699 17.0703C121.699 18.4297 122.172 19.1094 123.117 19.1094C123.555 19.1094 123.891 18.9414 124.125 18.6055C124.367 18.2695 124.488 17.7656 124.488 17.0938C124.488 15.7188 124.031 15.0312 123.117 15.0312C122.172 15.0312 121.699 15.7109 121.699 17.0703ZM144.973 19.332C144.973 21.5039 144.387 23.1992 143.215 24.418C142.051 25.6289 140.418 26.2344 138.316 26.2344C136.301 26.2344 134.695 25.6133 133.5 24.3711C132.312 23.1289 131.719 21.4492 131.719 19.332C131.719 17.168 132.301 15.4883 133.465 14.293C134.637 13.0898 136.277 12.4883 138.387 12.4883C139.691 12.4883 140.844 12.7656 141.844 13.3203C142.844 13.875 143.613 14.6719 144.152 15.7109C144.699 16.7422 144.973 17.9492 144.973 19.332ZM136.371 19.332C136.371 20.4727 136.523 21.3438 136.828 21.9453C137.133 22.5391 137.645 22.8359 138.363 22.8359C139.074 22.8359 139.574 22.5391 139.863 21.9453C140.16 21.3438 140.309 20.4727 140.309 19.332C140.309 18.1992 140.16 17.3438 139.863 16.7656C139.566 16.1875 139.059 15.8984 138.34 15.8984C137.637 15.8984 137.133 16.1875 136.828 16.7656C136.523 17.3359 136.371 18.1914 136.371 19.332Z"
        fill="#6D6D6D"
      />
      <rect y="2" width="28" height="28" fill="#E93E3E" />
    </svg>
  );

  const logo_vaga = (
    <svg width="37" height="37" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.7319 6C28.5757 6 29.2788 6.30469 29.8413 6.91406C30.4038 7.47656 30.6851 8.17969 30.6851 9.02344V25.4766C30.6851 26.3203 30.4038 27.0469 29.8413 27.6562C29.2788 28.2188 28.5757 28.5 27.7319 28.5H3.68506C2.84131 28.5 2.13818 28.2188 1.57568 27.6562C1.01318 27.0469 0.731934 26.3203 0.731934 25.4766V9.02344C0.731934 8.17969 1.01318 7.47656 1.57568 6.91406C2.13818 6.30469 2.84131 6 3.68506 6H9.73193V2.97656C9.73193 2.13281 10.0132 1.42969 10.5757 0.867188C11.1382 0.304688 11.8413 0.0234375 12.6851 0.0234375H18.7319C19.5757 0.0234375 20.2788 0.304688 20.8413 0.867188C21.4038 1.42969 21.6851 2.13281 21.6851 2.97656V6H27.7319ZM3.68506 9.02344V25.4766H27.7319V9.02344H3.68506ZM18.7319 6V2.97656H12.6851V6H18.7319Z" fill="#7E7E7E"/>
    </svg>

  );
  
  return (
    <>
      <Layout.Header className="site-layout-sub-header-background layout-header" style={{ height: "80px" }}>
        <Row justify="center" style={{ width: "100%" }}>
          <Col span={8} style={{ marginTop: "1%" }}>
            <Row>
              <div style={{ marginLeft: "35%"}}>{logo}</div>
            </Row>
          </Col>
          <Col span={8} style={{ marginTop: "1%", display: "flex", flexDirection: "row" }}>
            <Row justify="center" style={{ width: "100%" }}>
              <h3 style={{ marginRight: "1%" }}>Vagas</h3>
              <h3 style={{ marginLeft: "1%", fontWeight: "bold" }}>Planos para empresas</h3>
            </Row>
          </Col>
          <Col span={8} style={{ marginTop: "1%" }}>
            <Row justify="center" style={{ marginLeft: "8%" }}>
              <Button type="secondary" style={{ marginLeft: "5%", marginTop: "1%" }} href="/cadastro">Criar nova conta</Button>
              <Button type="primary" color="#E93E3E" style={{ marginLeft: "5%", marginTop: "1%" }} href="/login" danger>Entrar</Button>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
      <Layout >
        <Row style={{marginTop:"1%", marginLeft:"1%"}} justify="center">
          <Col span={8}>
              <Input.Search 
                placeholder="Pesquisar por vaga"
                allowClear>
              </Input.Search>
          </Col>
        </Row>
        <Row justify="center" style={{marginTop:"2%", marginBottom: 10}}  gutter={25}>
          <Col span={4}>
            <Card>
              <Row>
                <Typography.Title level={3} style={{ marginBottom: 20 }}>
                  Filtrar Vagas
                </Typography.Title>
              </Row> 
              <Row>
                <Tree
                  checkable
                  onExpand={onExpand}
                  expandedKeys={expandedKeys}
                  autoExpandParent={autoExpandParent}
                  onCheck={onCheck}
                  checkedKeys={checkedKeys}
                  onSelect={onSelect}
                  selectedKeys={selectedKeys}
                  treeData={treeData}
                />
              </Row>
              <Row justify="start">
                <font face= "Open Sans" size = "3" style={{marginTop:"5%"}}>Tecnologias</font>
                <Form.Item
                        name="Tecnologias"
                        style={{width:"100%", marginBottom:"10%"}}
                        rules={
                          [
                          ]
                        }
                      >
                        <Select
                          placeholder="Selecione uma tecnologia"
                          allow="React"
                        >
                    <Select.Option value="React">React</Select.Option>
                    <Select.Option value="Angular">Angular</Select.Option>
                    <Select.Option value="Vue">Vue</Select.Option>
                    <Select.Option value="Bootstrap">Bootstrap</Select.Option>
                    </Select>
                  </Form.Item>
                  <Row>
                    <font face= "Open Sans" size = "3">Localização</font>
                    <Form.Item
                        name="Localização"
                        style={{width:"100%", marginBottom:"10%"}}
                        rules={
                          [
                          ]
                        }
                      >
                        <Select
                          placeholder="Selecione seu estado"
                          allow="React"
                        >
                      <Select.Option value="São Paulo">São Paulo</Select.Option>
                      <Select.Option value="Rio de Janeiro">Rio de Janeiro</Select.Option>
                      <Select.Option value="Minas Gerais">Minas Gerais</Select.Option>
                      <Select.Option value="Paraná">Paraná</Select.Option>
                      </Select>
                    </Form.Item>
                  </Row>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
            <Row justify="start">
              <div>{logo}</div>
            </Row>
            <Row justify="start">
              <Paragraph class="justificado">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec arcu ac neque dictum pulvinar. Donec ut congue tellus. Nam gravida enim a sem euismod placerat. Duis lacinia mi eget leo posuere, in consequat eros aliquet. Cras placerat tempor odio, ut elementum nunc varius semper. Etiam lacus augue, porttitor accumsan ligula vitae, interdum tempus risus. Praesent condimentum, arcu eget accumsan luctus, ligula nisi commodo turpis.
              </Paragraph>
            </Row>
              <Row align="middle">
                <Col>
                  <Typography.Title level={3} style={{marginTop:"10px"}}>
                      Vagas disponíveis
                  </Typography.Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{
                      display: 'flex',
                    }}
                  >
                    <Button style={{height:"125px", width:"100%", marginBottom:"15px"}} href="user/vagaSelecionada">
                      <div style={{marginTop:"1%"}}>
                      <Row align="middle" justify="start">
                        <Col span={4}>
                            <Col><div class="imagemGreen">{logo_vaga}</div></Col>
                        </Col>
                        <Col span={20}>
                          <Row align="middle">
                            <Typography.Title level={4}>
                              Desenvolvedor Back-end Java Júnior
                            </Typography.Title></Row>
                            <Row>
                            <font face= "Open Sans" size = "2">Ensino superior completo</font>
                            </Row>
                            <Row>
                              <font face= "Open Sans" size = "2" style={{marginTop:"1%"}}>Benefícios: Vale-refeição, gym pass, plano de saúde e convênio com escola</font>
                            </Row>
                        </Col>
                      </Row>
                      </div>
                    </Button>
                    <Button style={{height:"125px", width:"100%", marginBottom:"15px"}}>
                      <Row align="middle" justify="start">
                        <Col span={4}>
                            <Col><div class="imagemGreen">{logo_vaga}</div></Col>
                        </Col>
                        <Col span={20}>
                          <Row align="middle">
                            <Typography.Title level={4}>
                              Desenvolvedor Front-end React
                            </Typography.Title></Row>
                            <Row>
                            <font face= "Open Sans" size = "2">Ensino superior completo</font>
                            </Row>
                            <Row>
                              <font face= "Open Sans" size = "2" style={{marginTop:"2%"}}>Benefícios: Vale-refeição, gym pass, plano de saúde e convênio com escola</font>
                            </Row>
                        </Col>
                      </Row>
                    </Button>
                    <Button style={{height:"125px", width:"100%", marginBottom:"15px"}}>
                      <Row align="middle" justify="start">
                        <Col span={4}>
                            <Col><div class="imagemGreen">{logo_vaga}</div></Col>
                        </Col>
                        <Col span={20}>
                          <Row align="middle">
                            <Typography.Title level={4}>
                              Desenvolvedor Back-end Java Senior
                            </Typography.Title></Row>
                            <Row>
                            <font face= "Open Sans" size = "2">Ensino superior completo</font>
                            </Row>
                            <Row>
                              <font face= "Open Sans" size = "2" style={{marginTop:"2%"}}>Benefícios: Vale-refeição, gym pass, plano de saúde e convênio com escola</font>
                            </Row>
                        </Col>
                      </Row>
                    </Button>
                    <Button style={{height:"125px", width:"100%", marginBottom:"15px"}}>
                      <Row align="middle" justify="start">
                        <Col span={4}>
                            <Col><div class="imagemGreen">{logo_vaga}</div></Col>
                        </Col>
                        <Col span={20}>
                          <Row align="middle">
                            <Typography.Title level={4}>
                              Desenvolvedor Front-end Angular
                            </Typography.Title></Row>
                            <Row>
                            <font face= "Open Sans" size = "2">Ensino superior completo</font>
                            </Row>
                            <Row>
                              <font face= "Open Sans" size = "2" style={{marginTop:"2%"}}>Benefícios: Vale-refeição, gym pass, plano de saúde e convênio com escola</font>
                            </Row>
                        </Col>
                      </Row>
                    </Button>
                    <Button style={{height:"125px", width:"100%", marginBottom:"15px"}}>
                      <Row align="middle" justify="start">
                        <Col span={4}>
                            <Col><div class="imagemGreen">{logo_vaga}</div></Col>
                        </Col>
                        <Col span={20}>
                          <Row align="middle">
                            <Typography.Title level={4}>
                              Desenvolvedor Back-end Python Pleno
                            </Typography.Title></Row>
                            <Row>
                            <font face= "Open Sans" size = "2">Ensino superior completo</font>
                            </Row>
                            <Row>
                              <font face= "Open Sans" size = "2" style={{marginTop:"2%"}}>Benefícios: Vale-refeição, gym pass, plano de saúde e convênio com escola</font>
                            </Row>
                        </Col>
                      </Row>
                    </Button>
                  </Space>
                  <Row align="bottom" justify="end">
                    <Pagination sdefaultCurrent={1} total={50} />
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Layout>
      <Layout.Footer style={{ textAlign: "center", marginTop: "5%", position:"relative", width:"100%", bottom:0 }}>
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
              <Link>Politica de Privacidade</Link>
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
  
  export default PaginaSitePersonalizavel;