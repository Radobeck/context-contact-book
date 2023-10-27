import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useContext } from 'react';
import { contactContext } from '../contexts/ContactContextProvider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddForm = () => {
  const { addContact } = useContext(contactContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    addContact(values);
    navigate('/contacts');
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        margin: 'auto',
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input contact name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input contacts last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input contact phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contacts Photo"
        name="imageUrl"
        rules={[
          {
            required: true,
            message: 'Please input contact imageUrl!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add contact
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddForm;
