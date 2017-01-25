require('styles/login.less');
var json = require('../json/login.json');
import React from 'react';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import {connect} from 'react-redux';
import {injectIntl} from 'react-intl';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:'',password:''};
    }

    login(){
        if(this.check(this.state)){
            this.props.dispatch();
        }
    }

    check(obj){
        if(obj.username == 'admin' && obj.password == 'admin'){
            return true;
        }else{
            return false;
        }
    }

    render() {
        return(
            <div>
                <div className = "login-top"><span>中文</span></div>
                <div className = "login-opacity"></div>
                <div className = "login-container">
                    <div className ="logo"> <img src = "../images/logo.png"/>WebApp</div>
                    <div className ="login-head">管理员登录</div>
                    <div className = "login-main">
                        <p><Input style={{height:40,width:'100%'}} type = "text"  className="inp mt28" placeholder = "账号"/></p>
                        <p><Input style={{height:40,width:'100%'} } type = "text"  className="inp mt28" placeholder = "密码"/></p>
                        <p><Button style={{width:'100%',margin:'30px 0px 0px 0px',height:40,fontSize:16}}  type="primary">登录</Button></p>
                    </div>
                </div>
                <div className="login-bottom">Copyright © 2016 Wafer Systems Inc. V2016101</div>
                <div className="login-bg"><img src="../images/login_bg.jpg"/></div>
            </div>
        );
    }
}

export default connect(
    state => {
        return state.loginData;
    }
)(Login);