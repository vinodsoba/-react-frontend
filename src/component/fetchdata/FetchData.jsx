import React, { Component } from "react"
import axios from 'axios'

class FetchData extends Component {
    state = { 
        data: [],
        isLoading: false
     } 

     componentDidMount(){
        axios.get('https://anypoint.mulesoft.com/mocking/api/v1/links/6f149875-3a2b-462f-a452-b45b82b1274b/payments/elements/1')
        .then(res => this.setState({
            data: res.data,
            isLoading: true

        }))
        .catch(err => console.log(err));
     }

    render() { 
        const { data } = this.state;
        console.log(data);
        return (
            <>
            <h1>Return API</h1>
           
            </>
           
            
        );
    }
}
 
export default FetchData;