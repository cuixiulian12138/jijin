import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  Divider,
  message,
  Input,
  Form,
  Row,
  Col,
  Tabs,
  Card,
  Tag,
  Table,Tooltip
} from 'antd'
import { Link } from 'umi'
import React, { useState, useRef } from 'react'
import {
  PageContainer,
  FooterToolbar,
  PageHeaderWrapper,
} from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { QuestionCircleFilled } from '@ant-design/icons'
import { queryRule, updateRule, addRule, removeRule } from './service'
import styles from './index.less'
const routes = [
  {
    path: '/orderInfo',
    breadcrumbName: '订单信息',
  },
  {
    path: '/costInfo',
    breadcrumbName: '财富宝费用信息',
  },
  {
    breadcrumbName: '费用明细',
  },
]

const OrderInfo = () => {
  const actionRef = useRef()
  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 9) {
      obj.props.colSpan = 0;
    }
    return obj;
  };
  const columns = [
    {
      title: '日期',
      dataIndex: 'name',
      //   tip: '规则名称是唯一的 key',
      hideInSearch: true,
      align: 'center',
      render: (text, row, index) => {
        if (index == 0) {
          return '';
        }
          return text
      },
    },
    {
      title: '日终总资产（元）',
      dataIndex: 'desc',
      align: 'center',
      render: (text, row, index) => {
        if (index < 9) {
          return text;
        }
        return {
          children: text,
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: '服务费率（%）',
      dataIndex: 'callNo',
      hideInSearch: true,
      align: 'center',
      render: renderContent
    },
    {
      title: '日计提服务费（元）',
      dataIndex: 'callNo',
      hideInSearch: true,
      align: 'center',
      render: renderContent
    },
  ]
  return (
    // <PageHeaderWrapper breadcrumb={{ routes }}>
      <Card>
        <div className="setTableSty">
          <ProTable
            headerTitle={
              <>
              <div style={{marginBottom:20}}>
                <span style={{fontWeight:'bold'}}>精选基金</span>
               <Tooltip title="系统自动匹配基金标签及客户标签综合计算基金匹配度及客户意愿度得到推荐结果。" placement="right">
                <QuestionCircleFilled style={{ marginLeft: 10, color: "#ccc", cursor: 'pointer' }} />
               </Tooltip>
              </div>
              <div style={{marginBottom:15}}>
                <Tag color="#F0392F">主推</Tag>
                <span style={{ fontWeight: 'bold' }}>交银新生活力灵活配置混合</span>
                <span>（519772）</span>
                <Tag color="#FFF1EB"><span style={{color:'#FF914D'}}>混合型</span></Tag>
                <Tag color="#FFF1EB" style={{ marginRight: 50 }}><span style={{ color: '#FF914D' }}>R3(中风险)</span></Tag>
                <span  style={{ marginRight: 50 }}>
                  <span  style={{ marginRight: 10 }}>最新净值</span>
                  <span style={{color:"#F0392F"}}>1.5617</span>
                  <span>（08-28）</span>
                </span>
                <span>
                  <span  style={{ marginRight: 10 }}>日涨跌幅</span>
                  <span style={{color:"#F0392F"}}>2.89%</span>
                  <span>（08-28）</span>
                </span>
                </div>
              </>
            }
            actionRef={actionRef}
            rowKey="key"
            bordered={true}
            request={(params, sorter, filter) =>
              queryRule({ ...params, sorter, filter })
            }
            pagination={false}
            size="small"
            columns={columns}
            options={false}
            search={null}
          />
        </div>
      </Card>
    // </PageHeaderWrapper>
  )
}

export default OrderInfo
