import React, { Component } from 'react';
import axios from 'axios';
import { Input,Button,Table } from 'antd';
import { parse } from 'mathjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import './RooT.css';

let children = []
var arr_xl = []
var arr_xr = []
var children2 = []
var xr = 0
var xl = 0 
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

    
class Bisection extends Component
{
    
        constructor(props) {
            super(props);
            this.state = {
                users:"",
                fx: "",
                fxx: "",
                xll: 0,
                xrr: 0,
                update: 0,
                check:0,
        };
          }
    
        Myxl = (event) => {
            xl = event.target.value; 
        
        }
        Myxr = (event) => {
           xr = event.target.value; 
           
        }
        Myfx = (event) => {
            fx = event.target.value;
            this.setState({fx: event.target.value});
            
        }
        bisections = () =>{
            console.log("xl : " + xl + "xr : " + xr + "fx :"+fx)
            const funtion = (fx, value) => parse(fx).evaluate({ x: value });
           
            
            arr_iteration = []
            arr_x = []
            arr_y = []
            arr_error = []
            // console.log("xl ; " + window.$xl + "xr : " + window.$xr)
            // const funtion = (fx, value) => (value**4)-13
             
            const error = (xm_new, xm_old) => Math.abs((xm_new - xm_old) / xm_new)  
            const funtionxm = (xl, xr) => (xl + xr) / 2
            var xm_new
            var xm_old
            var i = 0
            var ans
        
            
            if(  this.state.check == 1)
            {
                while (i <= 1 || error(xm_new, xm_old) > 0.000001){
                    xm_old = xm_new
                    xm_new = funtionxm(parseFloat(xl), parseFloat(xr))
                    if ( funtion(fx2, parseFloat(xm_new)) * funtion(fx2, parseFloat(xl)) > 0){
                        xl = xm_new
                    } else {
                        xr = xm_new
                    }
                    arr_iteration.push(i)
                    arr_x.push(xm_new.toFixed(6))
                    arr_y.push(funtion(fx2, parseFloat(xm_new)).toFixed(6))
                    arr_error.push(error(parseFloat(xm_new), parseFloat(xm_old)).toFixed(6))
                    i++
                } 
            }
            else {
                while (i <= 1 || error(xm_new, xm_old) > 0.000001){
                    xm_old = xm_new
                    xm_new = funtionxm(parseFloat(xl), parseFloat(xr))
                    if ( funtion(this.state.fx, parseFloat(xm_new)) * funtion(this.state.fx, parseFloat(xl)) > 0){
                        xl = xm_new
                    } else {
                        xr = xm_new
                    }
                    arr_iteration.push(i)
                    arr_x.push(xm_new.toFixed(6))
                    arr_y.push(funtion(this.state.fx, parseFloat(xm_new)).toFixed(6))
                    arr_error.push(error(parseFloat(xm_new), parseFloat(xm_old)).toFixed(6))
                    i++
                }      
            
            }
            ans = xm_new.toFixed(6)
            console.log(ans);
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
    
              data = () => {
                  fx2 = this.state.fxx
                  xl = this.state.xll
                  xr = this.state.xrr
                  this.setState({check: 1})
              }
              componentDidMount(){
                axios.get("http://192.168.99.100:3001/api/dobisection").then(res=>{
                    console.log(res.data);
                    console.log(res.data.data.fx);
                    this.setState({users: res.data.data});
                    this.setState({fxx: res.data.data[0].fx});
                    this.setState({xll: res.data.data[0].XL});
                    this.setState({xrr: res.data.data[0].XR});
    
                    console.log("user : " + this.state.users[0].fx);
                })
                arr_iteration = []
                arr_x = []
                arr_y = []
                arr_xl = []
                arr_xr = []
                arr_error = []
                xr = 0
                xl = 0 
                ans = 0
                fx = ""
                }
 
        render()
        {
        return(
            <div className="textbox1" style={{paddingLeft:'40px'}}>
    
                <center>
                    <label style= {{paddingleft:'2px'}}>Input : </label>
                        <Input placeholder="Bisection" onChange={this.Myfx}  style={{width:'500px ',marginRight:'20px'}}/><br/><br/>
                        
                    <label>XR : </label>
                        <Input placeholder="XR"  onChange={this.Myxr} style={{width:'500px '}}/><br/><br/>
    
                    <label>XL : </label>
                        <Input placeholder="XL" onChange={this.Myxl} style={{width:'500px '}}/><br/><br/>
                   
                    <Button type="primary" onClick={this.bisections} style={{backgroundColor:'#FFD700',color:'#000000',borderColor:'#DAA520'}} >Summit</Button><br/><br/>
                    
                    <div className= "mongoDB">
                            <h1>input</h1>
            
                            <Button onClick={this.data}>fx: {this.state.fxx} xl: {this.state.xll} xr: {this.state.xrr} </Button>
                    </div> 
    
                    <br/><br/>
    
                    <table id="customers">
                                {this.createTable()}
                    </table>

                    <br /><br /> 
                    <Table style={{ width: 800 }} columns={columns} dataSource={children} pagination={{ pageSize: 10 }} >

                    </Table>
    
                    <br/><br/>
    
                    { <LineChart
                        width={1100}
                        height={450}
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
                        <Line type="monotone"  dataKey="y" stroke="#8884d8" />
                        </LineChart>
                     }
                           
                            
                      
                        
                </center>
            </div>
        );
        }
}
export default Bisection;