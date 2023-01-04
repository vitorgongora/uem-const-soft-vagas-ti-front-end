import React from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Table,
  Radio,
  Button,
  Space,
  Form,
  Checkbox,
  Input,
  Upload,
  Divider,
  message,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import CircleStat from "../../components/CircleStat/CircleStat";
import FilterButtonsContainer from "../../components/FilterButtonsContainer/FilterButtonsContainer";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import RichTextInput from "../../components/layout/RichTextInput/RichTextInput";

const SitePersonalizavel = (props) => {
  let loading = false;

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Site personalizável
        </Typography.Title>
      </Row>
      <Row>
        <Card bordered={false} style={{ width: "100%", marginTop: 12 }}>
          <Typography.Text strong>Dados da empresa</Typography.Text>
          <Divider style={{ marginTop: "6px" }} />
          <Form
            name="basic"
            layout={"vertical"}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col span={10}>
                <Form.Item
                  label="Nome"
                  name="nome"
                  rules={
                    [
                      //{ required: true, message: "Please input your username!" },
                    ]
                  }
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Logo" name="logo">
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  >
                    {false ? (
                      <img alt="avatar" style={{ width: "100%" }} />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Descrição" name="descricao">
              <RichTextInput />
            </Form.Item>

            <Typography.Text strong>Layout da página</Typography.Text>
            <Divider style={{ marginTop: "6px" }} />
            <Form.Item label="Cor primária" name="cor_primaria">
              <ColorPicker />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ display: "block", marginLeft: "auto" }}
                onClick={(e) =>
                  message.success("Site personalizável alterado com sucesso")
                }
              >
                Salvar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default SitePersonalizavel;
