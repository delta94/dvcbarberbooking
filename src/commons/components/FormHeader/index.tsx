import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import React from 'react';
import './style.scss';

export default function FormHeader(props: CardProps) {
  return (
    <Card className="form-header-style" bordered={false} {...props}>
      {props.children}
    </Card>
  );
}
