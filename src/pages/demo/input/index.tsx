import React,{Component} from 'react';
import {GridContent} from '@ant-design/pro-layout'
import Icon from '@ant-design/icons';
import {Button, Card, Input} from 'antd'

class Index extends Component{
    render(){
        return (
            <GridContent>
                <Card bordered={false}>
                    <Input prefix={<Icon type="user" />} />
                    <Button type="primary">Primary Button</Button>
                </Card>
            </GridContent>
        )
    }
}

export default Index;