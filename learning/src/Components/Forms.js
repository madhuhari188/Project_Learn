import React, { Component } from "react";
import { ToWords } from 'to-words';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import {Box, Button, Container, Paper, TextField} from '@mui/material'
const Money = props =>(
    <tr>
        <td>{props.money.title}</td>
        <td>{props.money.twoThous}</td>
        <td>{props.money.fiveHun}</td>
        <td>{props.money.twoHun}</td>
        <td>{props.money.oneHun}</td>
        <td>{props.money.fifty}</td>
        <td>{props.money.totalNotes}</td>
        <td>{props.money.totalAmt}</td>
        <td>{props.money.words}</td>
        <td><button className="btn-primary" onClick={()=>{props.deleteMoney(props.money._id)}}>Delete</button></td>
    </tr>
)

class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {title:'',twoThous:'',fiveHun:'',twoHun:'',oneHun:'',fifty:'',res:0,count:0,inWord:''};
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state ={money:[]};
        this.deleteMoney = this.deleteMoney.bind(this);
    }

    handleChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value,
            
    })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var {twoThous,fiveHun,twoHun,oneHun,fifty,title} =(this.state);
        var two = 2000*twoThous;
        var five = 500*fiveHun;
        var twoH = 200*twoHun;
        var one = 100*oneHun;
        var fif = 50*fifty;
        var totalNotes = (twoThous*1)+(fiveHun*1)+(twoHun*1)+(oneHun*1)+(fifty*1);
        var totalAmt =two+five+twoH+one+fif;
        // const toWords = new ToWords({
        //     localeCode: 'en-IN',
        //     converterOptions: {
        //       currency: true,
        //       ignoreDecimal: false,
        //       ignoreZeroCurrency: false,
        //       doNotAddOnly: false,
        //     }
        //   })
        const userId = (localStorage.getItem('userId'));
          const toWords = new ToWords();
          let words = toWords.convert(totalAmt, { currency: true });
          console.log(words)
        const money ={
            title:title,
            twoThous:twoThous,
            fiveHun:fiveHun,
            twoHun:twoHun,
            oneHun:oneHun,
            fifty:fifty,
            totalNotes:totalNotes,
            totalAmt:totalAmt,
            words:words,
            userId:userId
        }
        console.log(money)

        axios.post('http://localhost:5000/money/add',money)
        .then(res=>console.log(res.data));

        this.setState({
            res: totalAmt,
            count:totalNotes,
            inWord: words
         } )
         
    }

    componentDidMount(){
    //     const {user,isAuthenticated} = this.props.auth0;
    //     if(isAuthenticated) {const userId = user.sub.replace(/google-oauth2\|/g,"").replace(/auth0\|/g,"");
    //     return userId
    // }
    const userId = localStorage.getItem('userId');
    // this.setState({userId:localStorage.getItem(profile)})
        axios.get('http://localhost:5000/money/list?userId='+userId)
        .then(response => {
            this.setState({money: response.data});
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    
    // us(){
    //      const {user} = this.props.auth0;
    //     var userId = user.sub.replace(/google-oauth2\|/g,"").replace(/auth0\|/g,"");
    //     console.log(userId)
    // }
    deleteMoney(id){
        axios.delete('http://localhost:5000/money/'+id)
        .then(res => console.log(res.data));
        this.setState({
            money: this.state.money.filter(el => el._id !== id)
        })
    }

    moneyList() {
        return this.state.money.map(money =>{
            return <Money money={money} deleteMoney={this.deleteMoney}  key={money._id}/>;
        })
    }

    render(){
        
        return(
            <>
            
            <Container>
                <Paper elevation={3}>
                <Box  pt={3} pl={2}>   
            <form onSubmit={this.handleSubmit}  >
            
                <TextField fullWidth sx={{ width: 400 }} label="Give Some title" variant="outlined"  type="text" name="title" onChange={this.handleChange} value={this.state.title} margin="dense"/><br/>
                <TextField label="2000" variant="outlined"t type="text" pattern="[0-9]*" name="twoThous" onChange={this.handleChange} value={this.state.twoThous}  margin="dense"/>
                <TextField label="500" variant="outlined" type="text" name="fiveHun" onChange={this.handleChange} value={this.state.fiveHun} margin="dense" />
                <TextField label="200" variant="outlined" type="text" name="twoHun" onChange={this.handleChange} value={this.state.twoHun}  margin="dense"/>
                <TextField label="100" variant="outlined" type="text" name="oneHun" onChange={this.handleChange} value={this.state.oneHun}  margin="dense"/>
                <TextField label="50" variant="outlined" type="text" name="fifty" onChange={this.handleChange} value={this.state.fifty}  margin="dense"/><br/>
                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <p>  2000</p>
                <TextField id="input-with-sx" label="With sx" variant="outlined" />
                </Box> */}
                <Button variant="contained" type="submit" value="submit"> Click Me</Button>
                  </form>
            <p>Total Amount:₹{this.state.res}</p>
            <p>Total Notes:{this.state.count}</p>
            <p>Total Amount In Words:{this.state.inWord}</p></Box></Paper>
           
            <div>
                <h2>History</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>2000</th>
                            <th>500</th>
                            <th>200</th>
                            <th>100</th>
                            <th>50</th>
                            <th>TotalNotes</th>
                            <th>TotalAmount</th>
                            <th>In Words</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.moneyList()}
                    </tbody>
                </table>
            </div> </Container>
            </>
        )
        
    }
}

export default withAuth0(Forms);