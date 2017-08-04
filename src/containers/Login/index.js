import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Layout, Row, Col } from 'antd';
import Style from './style'
const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.username === 'admin' && values.password === 'admin') {
          this.props.history.push('/monitor')
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={Style.root}>
        <Row type="flex" justify="center" align="middle" style={{height: '80vh'}}>
          <Col span={6}>
            <Form onSubmit={this.handleSubmit} style={Style.form}>
              <FormItem>
                <span style={Style.title}>后台监控系统</span>
              </FormItem>
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名！' }],
                })(
                  <Input prefix={<Icon type="user" />} placeholder="用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码！' }],
                })(
                  <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                <Layout>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                </Layout>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login