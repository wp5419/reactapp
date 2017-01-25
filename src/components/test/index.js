require('styles/index.less');
let data = require('../../json/test.json');
import React from 'react';
import {connect} from 'react-redux';
import Table from 'antd/lib/table';
import Spin from 'antd/lib/spin';
import Button from 'antd/lib/button';
import {browserHistory} from 'react-router'
class Test  extends React.Component{

    constructor(props){
        super(props);
        this.return = this.return.bind(this);
    }

    componentWillMount(){
        this.columns =[{
            title:'序号',
            dataIndex: 'number',
            key:'number'
        },{
            title:'姓名',
            dataIndex: 'name',
            key:'name'
        },{
            title:'年龄',
            dataIndex: 'age',
            key:'age'
        }];

        this.datasource = data.data;
        console.log(this.datasource);
    }
    return(){
         browserHistory.push('/');
    }
    render() {
        return (               
                <div className ="tStyle">
                    <Table columns = {this.columns} bordered dataSource = {this.datasource} size = 'default' bordered scroll={{x: 1000}}/>          
                    <Button style={{width:'100%',margin:'30px 0px 0px 0px',height:40,fontSize:16}} type="primary" onClick = {this.return    }>返回</Button>
                </div>
         
                
        );
    }
}

export default connect()(Test);
