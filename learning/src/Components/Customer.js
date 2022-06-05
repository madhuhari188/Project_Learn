import React,{Component} from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';


export default class Customer extends Component{
    constructor(props){
        super(props);
        this.state = {name:'',phone:'',address:'',userId:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {showSuccessAlert:true,show:false}
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value,
            
    })
    }
    handleClose(){
        this.setState({showSuccessAlert:false});
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        var {name,phone,address} = this.state;
        const userId = (localStorage.getItem('userId'));
        const customer = {
            name:name,
            phone:Number(phone),
            address:address,
            userId:userId
        }

        axios.post('http://localhost:5000/customer/add',customer)
        .then(res=>this.setState({showSuccessAlert:true}))

        this.setState({name:'',phone:'',address:''})
    }

    render(){
        return(
            <>
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <span className='input-group-text'>Name: </span>
                        <input type="text" name='name' onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <div className='input-group'>
                        <span className='input-group-text'>PhoneNumber: </span>
                        <input type="text" name='phone' onChange={this.handleChange} value={this.state.phone}/>
                    </div>
                    <div className='input-group'>
                        <span className='input-group-text'>Address: </span>
                        <textarea type="text" name='address' onChange={this.handleChange} value={this.state.address}/>
                    </div>
                    <button className='btn btn-primary' type="submit" value="submit"> Click Me</button>
                </form>
                <Alert show={this.state.showSuccessAlert} onClose={this.handleClose} variant="success" dismissible>
        This is a success Message
      </Alert>
            </div>
            </>
        )
    }
}
