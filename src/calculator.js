import React from "react"
import "./App.css"

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = {
            weight:0,
            height:0,
            bmi:0
        }
        this.handleHeight = this.handleHeight.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleHeight = (event)=>{
        event.preventDefault();
        this.setState({
            height: event.target.value,
              
        })
    }
    handleWeight = (event)=>{
        event.preventDefault();
        this.setState({
            weight: event.target.value,    
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        // alert(`your BMI is ${this.state.bmi}`)
        this.setState({
            bmi: this.state.weight / (this.state.height/100) ** 2
        })
    }
    render(){
        return(
            <div className="Container">
                <form action="submit" onSubmit={this.handleSubmit}>
                <label className="InputLabel">Height
                    <input type="number" 
                    name="height"
                    onChange={this.handleHeight}
                    placeholder="in Centimeters"
                    className="InputRow"
                    />
                    </label>
                    <br/>
                <label className="InputLabel">Weight
                    <input type="number" 
                    name="weight"
                    onChange={this.handleWeight}
                    placeholder="in Kilograms"
                    className="InputRow"
                    />
                    </label>
                    <br/>
                <label> 
                    <input type="submit" 
                    name="Calculate" onSubmit={this.handleSubmit}
                    className="SubmitBtn"
                    />
                    </label>
                    <br/>
                    </form>
        <h1 className="Results">Your BMI is {Math.round(this.state.bmi * 100) / 100}</h1>
        {/* <h1>your height is {this.state.height}</h1>
        <h1>your weight is {this.state.weight}</h1> */}
        <img src={require('./bmi2.jpg')} className="ResultImg" />
            </div>
        )
    }
}


export default Calculator