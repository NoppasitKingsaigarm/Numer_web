import React, { Component } from 'react';
import axios from 'axios';
import { Input,Button,Table } from 'antd';
import { parse, create, all } from 'mathjs';


const mathjs = create(all)
const mathInt = require('mathjs-simple-integral');
mathjs.import(mathInt)

var real = 0
var b = 0
var a = 0
var I = 0
var h = 0
var n = 0
var err = 0
let fx = ""
let fx2 = ""
let Intes =""
class CompoTrapz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:"",
            fx: "",
            fxx: "",
            bb: 0,
            aa: 0,
            nn: 0,
            h: 0,
            update: 0,
            check:0,
    };
    }
    Myb = (event) => {
        b = event.target.value; 
       
    
    }
    Mya = (event) => {
        a = event.target.value;

    }

    Myn = (event) => {
        n = event.target.value; 
        
     }
    Myfx = (event) => {
        fx = event.target.value;
        this.setState({fx: event.target.value});
        
    }




    Single = () =>
    {   
        a = parseFloat(a)
        b = parseFloat(b)
        n = parseFloat(n)
        console.log("a"+ a + "b" + b + "n"+n)
        const funtion = (fx, value) => parse(fx).evaluate({ x: value });
        const funcsum = (h) => funtion(fx,h);
        const funtion2 = (fx2, value) => parse(fx2).evaluate({ x: value });
        const funcsum2 = (h) => funtion2(fx2,h);

        
        h = (b-a)/n;
        var sum = 0
        var counter = h+a

        if( this.state.check == 1)
        {
            for (var i=1 ; i<n ; i++) {
                sum += funcsum2(counter)
                counter += h
            }
            I = (h / 2) * (funcsum2(a) + funcsum2(b) + 2*sum)
            const Inte = mathjs.integral(fx2,'x')
            Intes = Inte.toString()

        }
        else{
            for (var i=1 ; i<n ; i++) {
            sum += funcsum(counter)
            counter += h
        }
            I = (h / 2) * (funcsum(a) + funcsum(b) + 2*sum)
            const Inte = mathjs.integral(fx,'x')
            Intes = Inte.toString()
        }
 
        var start = funtion(Intes,a)
        var stop = funtion(Intes,b)
        start = parseFloat(start)
        stop = parseFloat(stop)
        real = (stop - start)
        real = parseFloat(real)
        err = Math.abs((real-I)/real)
        console.log(real)
        console.log(I)

        this.setState({update: 1})
        this.setState({check:0})
    }

    data3 = () => {
        fx2 = this.state.fxx
        b = this.state.bb
        a = this.state.aa
        n = this.state.nn
        this.setState({check: 1})
        
    }

    componentDidMount(){
        axios.get("http://192.168.99.100:3001/api/docompotrapz").then(res=>{
            console.log(res.data);
            console.log(res.data.data.fx);
            this.setState({users: res.data.data});
            this.setState({fxx: res.data.data[0].fx});
            this.setState({bb: res.data.data[0].B});
            this.setState({aa: res.data.data[0].A});
            this.setState({nn: res.data.data[0].N});

            console.log("user : " + this.state.users[0].fx);
        })
        real = 0
        b = 0
        a = 0
        I = 0
        h = 0
        n = 0
        err = 0
        fx = ""
        
        }

    

    
    
    
    
    
    
    
    render()
    {
        return(
            <div className="textbox1" style={{paddingLeft:'40px'}}>
    
                <center>
                    <label style= {{paddingleft:'2px'}}>Input : </label>
                        <Input placeholder="Single-Trapzaidal" onChange={this.Myfx}  style={{width:'500px ',marginRight:'20px'}}/><br/><br/>
                        
                    <label>b : </label>
                        <Input placeholder="b"  onChange={this.Myb} style={{width:'500px '}}/><br/><br/>
    
                    <label>a : </label>
                        <Input placeholder="a" onChange={this.Mya} style={{width:'500px '}}/><br/><br/>
                    <label>n : </label>
                        <Input placeholder="n" onChange={this.Myn} style={{width:'500px '}}/><br/><br/>
                    
                    
                    <Button type="primary" onClick={this.Single} style={{backgroundColor:'#FFD700',color:'#000000',borderColor:'#DAA520'}} >Summit</Button><br/><br/>
                    
                    <div className= "mongoDB">
                        <h1>input</h1>
                           
                        <Button onClick={this.data3} style = {{color:'#000000',borderColor:'#9370DB'}}>fx: {this.state.fxx}  B: {this.state.bb}  A: {this.state.aa} N: {this.state.nn} </Button>
                    </div>

                    <br /><br /> 
                    <p style={{fontSize: "24px", fontWeight: "bold"}}>
                                Approximate = {I}<br/>
                                Exact = {real}<br/>
                                Error(ε) = {err}%<br/>
                    </p>
                    </center>
            </div>
        );


    }
}
export default CompoTrapz;