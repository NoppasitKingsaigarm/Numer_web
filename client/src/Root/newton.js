import React, { Component } from 'react';
import { Input, Button,Table } from 'antd';
import { parse, derivative } from 'mathjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import axios from 'axios';

let children = []
var children2 = []
var xm_new= 0
var xm_old= 0
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
      title: 'X_old',
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
class newton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:"",
            fx: "",
            fxx:"",
            xm_oldd :0,
            update: 0,
            check:0,
    };
}

     MyxO = (event) => {
       xm_old = event.target.value; 
       
    }
    Myfx = (event) => {
        fx = event.target.value;
        this.setState({fx: event.target.value});
    }
    
    newtonrapson = () => {
        
        arr_iteration = []
        arr_x = []
        arr_y = []
        arr_error = []
        // console.log("xl ; " + window.$xl + "xr : " + window.$xr)
        // const funtion = (fx, value) => (value**4)-13
         
        const error = (xm_new, xm_old) => Math.abs((xm_new - xm_old) / xm_new)  
        const funtion = (fx, value) => parse(fx).evaluate({ x: value });
        const funtiondive = (fx, value) => derivative(fx, 'x').evaluate({ x: value })

        
        var i = 0
        var ans
       if( this.state.check == 1)
       {
        while (i <= 1|| error(xm_new, xm_old) > 0.000001){
            if (i > 0){
                xm_old = xm_new
            }
            xm_new = xm_old-(funtion(fx2,parseFloat(xm_old))/ (funtiondive(fx2,parseFloat(xm_old))))  
            arr_iteration.push(i)
            arr_x.push(xm_new.toFixed(6))
            arr_y.push(funtion(fx2, parseFloat(xm_new)).toFixed(6))
            arr_error.push(error(parseFloat(xm_new), parseFloat(xm_old)).toFixed(6))
            i++
            console.log(xm_new)
            console.log(xm_old)
            console.log(xm_old-(funtion(fx2,parseFloat(xm_old))/ (funtiondive(fx2,parseFloat(xm_old)))))
        } 
       }
       else{
          while (i <= 1|| error(xm_new, xm_old) > 0.000001){
            if (i > 0){
                xm_old = xm_new
            }
            xm_new = xm_old-(funtion(this.state.fx,parseFloat(xm_old))/ (funtiondive(this.state.fx,parseFloat(xm_old))))  
            arr_iteration.push(i)
            arr_x.push(xm_new.toFixed(6))
            arr_y.push(funtion(this.state.fx, parseFloat(xm_new)).toFixed(6))
            arr_error.push(error(parseFloat(xm_new), parseFloat(xm_old)).toFixed(6))
            i++
            console.log(xm_new)
            console.log(xm_old)
            console.log(xm_old-(funtion(this.state.fx,parseFloat(xm_old))/ (funtiondive(this.state.fx,parseFloat(xm_old)))))
        }  
       }
             
        ans = xm_new.toFixed(6)
        console.log(arr_error[3]);
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
      data3 = () => {
        fx2 = this.state.fxx
        xm_old = this.state.xm_oldd
        this.setState({check: 1})
        
    }
    componentDidMount(){
        axios.get("http://192.168.99.100:3001/api/donewton").then(res=>{
            console.log(res.data);
            console.log(res.data.data.fx);
            this.setState({users: res.data.data});
            this.setState({fxx: res.data.data[0].fx});
            this.setState({xm_oldd: res.data.data[0].x});

            console.log("user : " + this.state.users[0].fx);
        })
        arr_iteration = []
        arr_x = []
        arr_y = []
        arr_error = []
        ans = 0
        fx = ""
        xm_old = 0 
        }
      


    render()
    {
    return(
        <div className="textbox1" style={{paddingLeft:'40px'}}>

            <center>
                <label style= {{paddingleft:'2px'}}>Input F(x): </label>
                    <Input placeholder="Newton-Rapshon" onChange={this.Myfx} style={{width:'500px ',marginRight:'20px'}}/><br/><br/>
                

                <label>X: </label>
                    <Input placeholder="X-Begin" onChange={this.MyxO} style={{width:'500px ',marginLeft:'22px'}}/><br/><br/>

                    <Button type="primary" onClick={this.newtonrapson} style={{backgroundColor:'#FFA500',color:'#000000',borderColor:'#FFD700'}} >Summit</Button><br/><br/>

                    <br/><br/>

                    <div className= "mongoDB">
                            <h1>input</h1>
                 
                            <button onClick={this.data3}>fx: {this.state.fxx} <br/> x: {this.state.xm_oldd} </button>
                    </div> 




                    <br/><br/>
                <table id="customers">
                            {this.createTable()}
                </table>

                <br/><br/>

                <br /><br /> 
                    <Table style={{ width: 800 }} columns={columns} dataSource={children} pagination={{ pageSize: 10 }} >

                    </Table>

                    <br /><br /> 

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
export default newton;