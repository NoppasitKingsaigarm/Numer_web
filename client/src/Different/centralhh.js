import React, { Component } from 'react';
import axios from 'axios';
import { Input,Button,Table } from 'antd';
import { parse,derivative } from 'mathjs';




var s = 0
var d = 0
var y = 0
var ex = 0
var h = 0
var ex2 = 0
var err = 0
var x = 0
let fx = ""
let fx2 = ""
class  Centralhh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:"",
            fx: "",
            fxx: "",
            dd: 0,
            xx: 0,
            hh: 0,
            update: 0,
            check:0,
    };
    }
    Myd = (event) => {
        d = event.target.value; 
       
    
    }
    Myh = (event) => {
        h = event.target.value;

    }

    Myx = (event) => {
        x = event.target.value; 
        
     }
    Myfx = (event) => {
        fx = event.target.value;
        this.setState({fx: event.target.value});
        
    }




    centrall = () =>
    {
        x = parseFloat(x)
        h = parseFloat(h)
        y = parseFloat(y)
        var trye = this.state.fx
        var trye2 = this.state.fxx
        const error = (xm_new, xm_old) => Math.abs((xm_new - xm_old) / xm_new) 
        const funtiondive = (fx, value) => derivative(fx, 'x').evaluate({ x: value })
        const funtion = (fx, value) => parse(fx).evaluate({ x: value });
        if( this.state.check == 1)
        {
            if(d==1){
                y = (-funtion(fx2,x+(2*h)) + 8*funtion(fx2,x+(1*h)) - 8*funtion(fx2,x-(1*h)) + funtion(fx2,x-(2*h))) / (12*h)
              }
              else if(d==2){
                y = (-funtion(fx2,x+(2*h)) + 16*funtion(fx2,x+(1*h)) - 30*funtion(fx2,x) + 16*funtion(fx2,x-(1*h)) - funtion(fx2,x-(2*h))) / (12*Math.pow(h, 2))
              }
              else if(d==3){
                y=(-funtion(fx2,x+(3*h)) + 8*funtion(fx2,x+(2*h)) - 13*funtion(fx2,x+(1*h)) + 13*funtion(fx2,x-(1*h)) - 8*funtion(fx2,x-(2*h)) + funtion(fx2,x-(3*h))) / (8*Math.pow(h, 3))
              }
              else if(d==4){
                y=(-funtion(fx2,x+(3*h)) + 12*funtion(fx2,x+(2*h)) - 39*funtion(fx2,x+(1*h)) + 56*funtion(fx2,x) - 39*funtion(fx2,x-(1*h)) + 12*funtion(fx2,x-(2*h)) +funtion(fx2,x-(3*h))) / (6*Math.pow(h, 4))
              }

            
              for(var i=1 ;i<d;i++)
              {
                  trye2 = derivative(trye2,'x')
                  ex2=trye2
              }
              ex = funtiondive(ex2,x)
              err = error(y,ex)
              console.log(ex)
              console.log(err)
              console.log(y)
            this.setState({update: 1}) 
        }
        else{
           if(d==1){
            y = (-funtion(fx,x+(2*h)) + 8*funtion(fx,x+(1*h)) - 8*funtion(fx,x-(1*h)) + funtion(fx,x-(2*h))) / (12*h)
          }
          else if(d==2){
            y = (-funtion(fx,x+(2*h)) + 16*funtion(fx,x+(1*h)) - 30*funtion(fx,x) + 16*funtion(fx,x-(1*h)) - funtion(fx,x-(2*h))) / (12*Math.pow(h, 2))
          }
          else if(d==3){
            y= (-funtion(fx,x+(3*h)) + 8*funtion(fx,x+(2*h)) - 13*funtion(fx,x+(1*h)) + 13*funtion(fx,x-(1*h)) - 8*funtion(fx,x-(2*h)) + funtion(fx,x-(3*h))) / (8*Math.pow(h, 3))
          }
          else if(d==4){
            y=(-funtion(fx,x+(3*h)) + 12*funtion(fx,x+(2*h)) - 39*funtion(fx,x+(1*h)) + 56*funtion(fx,x) - 39*funtion(fx,x-(1*h)) + 12*funtion(fx,x-(2*h)) +funtion(fx,x-(3*h))) / (6*Math.pow(h, 4))
          }
        
          for(var i=1 ;i<d;i++)
              {
                  trye = derivative(trye,'x')
                  ex2=trye
              }
              ex = funtiondive(ex2,x)
          err = error(y,ex)
          console.log(ex)
          console.log(err)
          console.log(y)
        this.setState({update: 1}) 
        }
        this.setState({check: 0})
        

    }
    data3 = () => {
        fx2 = this.state.fxx
        d = this.state.dd
        h = this.state.hh
        x = this.state.xx
        this.setState({check: 1})
        
    }

    componentDidMount(){
        axios.get("http://192.168.99.100:3001/api/dodifftwo").then(res=>{
            console.log(res.data);
            console.log(res.data.data.fx);
            this.setState({users: res.data.data});
            this.setState({fxx: res.data.data[0].fx});
            this.setState({dd: res.data.data[0].D});
            this.setState({hh: res.data.data[0].H});
            this.setState({xx: res.data.data[0].X});

            console.log("user : " + this.state.users[0].fx);
        })
        d = 0
        y = 0
        ex = 0
        h = 0
        err = 0
        x = 0
        fx = ""
        
        }

    
    
    
    
    
    
    
    render()
    {
        return(
            <div className="textbox1" style={{paddingLeft:'40px'}}>
    
                <center>
                    <label style= {{paddingleft:'2px'}}>Input : </label>
                        <Input placeholder="Centralh 2 " onChange={this.Myfx}  style={{width:'500px ',marginRight:'20px'}}/><br/><br/>
                        
                    <label>D : </label>
                        <Input placeholder="d"  onChange={this.Myd} style={{width:'500px '}}/><br/><br/>
    
                    <label>H : </label>
                        <Input placeholder="h" onChange={this.Myh} style={{width:'500px '}}/><br/><br/>
                    <label>X : </label>
                        <Input placeholder="x" onChange={this.Myx} style={{width:'500px '}}/><br/><br/>
                    
                    
                    <Button type="primary" onClick={this.centrall } style={{backgroundColor:'#FFD700',color:'#000000',borderColor:'#DAA520'}} >Summit</Button><br/><br/>
                    
                    <br /><br /> 

                    <div className= "mongoDB">
                            <h1>input</h1>
                           
                            <Button onClick={this.data3} style = {{color:'#000000',borderColor:'#9370DB'}}>fx: {this.state.fxx}  D: {this.state.dd}  H: {this.state.hh} X: {this.state.xx} </Button>
                    </div>
                    <br /><br /> 
                    <p style={{fontSize: "24px", fontWeight: "bold"}}>
                                Approximate = {y}<br/>
                                Exact = {ex}<br/>
                                Error(ε) = {err}%<br/>
                    </p>
                    </center>
            </div>
        );


    }
}
export default  Centralhh ;