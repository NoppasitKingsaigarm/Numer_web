import React, { Component } from 'react';
import { Input, Button,Table  } from 'antd';
import { parse } from 'mathjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import axios from 'axios';

let children = []
var xm_new = 0
var xm_old = 0 
var children2 = []
var arr_xr = []
var arr_xl = []
var arr_iteration = []
var arr_x = []
var arr_y = []
var arr_error = []
let fx = ""
let fx2 = ""
var ans = 0 

const columns = [
    {
      title: 'Iteration',
      dataIndex: 'iteration',
    },
    {
      title: 'Xm',
      dataIndex: 'xm',
    },
    {
      title: 'F(xm)',
      dataIndex: 'fxm',
    },
    {
        title: 'Error',
        dataIndex: 'error',
    },
  ];
class secant extends Component
{ 

    constructor(props) {
        super(props);
        this.state = {
            users:"",
            fx: "",
            fxx: "",
            xm_oldd: 0,
            xm_neww: 0,
            update: 0,
            check:0,
    };
}


    MyxO = (event) => {
        xm_old = event.target.value; 
    
    }
     MyxN = (event) => {
       xm_new = event.target.value; 
       
    }
    Myfx = (event) => {
        fx = event.target.value;
        this.setState({fx: event.target.value});
    }

    secantt = () =>
    {
        
            console.log("x_old : " + xm_old + "fx :"+fx)
            
           
            
            arr_iteration = []
            arr_x = []
            arr_y = []
            arr_error = []
            // console.log("xl ; " + window.$xl + "xr : " + window.$xr)
           
            const funtion = (fx, value) => parse(fx).evaluate({ x: value });
            const error = (xm_new, xm_old) => Math.abs((xm_new - xm_old) / xm_new)
            const funtionse = (xm_old,xm_new)  => ((funtion(this.state.fx, parseFloat(xm_old))-(funtion(this.state.fx, parseFloat(xm_new)))) / (xm_old-xm_new))
            const funtionsee = (xm_old,xm_new)  => ((funtion(fx2, parseFloat(xm_old))-(funtion(fx2, parseFloat(xm_new)))) / (xm_old-xm_new))
            var i = 0
            
            
            console.log(ans)
            console.log((xm_old-xm_new))
            console.log(-5/-1)
            console.log((funtion(this.state.fx, parseFloat(xm_old))-(funtion(this.state.fx, parseFloat(xm_new)))) / (xm_old-xm_new))
            if( this.state.check == 1)
            {
                while (i <= 1|| error(xm_new, xm_old) > 0.000001){
                    ans = funtionsee(xm_old,xm_new) 
                    console.log(ans)
                    if (i > 0){
                        xm_old = xm_new
                    } 
                    xm_new = xm_new-(funtion(fx2,parseFloat(xm_new)) / ans)
                    //console.log(xm_new)
                    arr_iteration.push(i)
                    arr_x.push(xm_new.toFixed(6))
                    arr_y.push(funtion(fx2, parseFloat(xm_new)).toFixed(6))
                    arr_error.push(error(parseFloat(xm_new), parseFloat(xm_old)).toFixed(6))
                    i++
                    
                } 
            }
           while (i <= 1|| error(xm_new, xm_old) > 0.000001){
                ans = funtionse(xm_old,xm_new) 
                console.log(ans)
                if (i > 0){
                    xm_old = xm_new
                } 
                xm_new = xm_new-(funtion(this.state.fx,parseFloat(xm_new)) / ans)
                //console.log(xm_new)
                arr_iteration.push(i)
                arr_x.push(xm_new.toFixed(6))
                arr_y.push(funtion(this.state.fx, parseFloat(xm_new)).toFixed(6))
                arr_error.push(error(parseFloat(xm_new), parseFloat(xm_old)).toFixed(6))
                i++
                
            }      
            //ans = xm_new.toFixed(6)
            this.setState({update: 1})
            this.setState({check: 0})
        
    }


    createTable = () => {
        children2 = []
        children = []
        for (let i = 1; i < arr_iteration.length; i++) {
         
    
            children.push({
                iteration: i,
                xm: arr_x[i],
                fxm: arr_y[i],
                error: arr_error[i],
            });
            
            children2.push({
                iteration: i + 1,
                x: arr_x[i],
                y: arr_y[i],
                error: arr_error[i],
            });
        }
      }


      data2 = () => {
        fx2 = this.state.fxx
        xm_old = this.state.xm_oldd
        xm_new = this.state.xm_neww
        this.setState({check: 1})
    }

    componentDidMount(){
        axios.get("http://192.168.99.100:3001/api/dosecant").then(res=>{
            console.log(res.data);
            console.log(res.data.data.fx);
            this.setState({users: res.data.data});
            this.setState({fxx: res.data.data[0].fx});
            this.setState({xm_oldd: res.data.data[0].XO});
            this.setState({xm_neww: res.data.data[0].XN});

            console.log("user : " + this.state.users[0].fx);
        })
        arr_iteration = []
        arr_x = []
        arr_y = []
        arr_xl = []
        arr_xr = []
        arr_error = []
        xm_new = 0
        xm_old = 0 
        ans = 0
        fx = ""
        }

    render()
    {
    return(
        <div className="textbox1" style={{paddingLeft:'40px'}}>

            <center>
                <label style= {{paddingleft:'2px'}}>Input : </label>
                    <Input placeholder="Secant " onChange={this.Myfx} style={{width:'500px ',marginRight:'20px'}}/><br/><br/>
                    
                    <label>XL : </label>
                    <Input placeholder="XR"  onChange={this.MyxO} style={{width:'500px '}}/><br/><br/>

                <label>XR : </label>
                    <Input placeholder="XL" onChange={this.MyxN} style={{width:'500px '}}/><br/><br/>
                    <Button type="primary" onClick={this.secantt}  style={{backgroundColor:'#CD5C5C',color:'#000000',borderColor:'#FFD700'}}>Sumit</Button>
            
                    <br/><br/>

                <div className= "mongoDB">
                            <h1>input</h1>
                           
                            <button onClick={this.data2}>fx: {this.state.fxx} <br/> xl: {this.state.xm_oldd} xr: {this.state.xm_neww} </button>
                </div>
                
                    <br/><br/>
                
                <table id="customers">
                            {this.createTable()}
                </table>

                <br /><br /> 
                    <Table style={{ width: 800 }} columns={columns} dataSource={children} pagination={{ pageSize: 10 }} >

                    </Table>

            <br/><br/>

                <LineChart
                    width={950}
                    height={400}
                    data={children2}
                    margin={{ top: 30, bottom: 10 }}
                    style={{ backgroundColor: "#fff" }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis
                        type="number"
                        dataKey="y"
                        domain={["auto", "auto"]}
                        allowDataOverflow="true"
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    </LineChart>
            
            </center>
        </div>
    );
    }
    
}
export default secant;