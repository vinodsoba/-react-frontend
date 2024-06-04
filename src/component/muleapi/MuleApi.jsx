import React, { Component } from 'react'
import axios from 'axios'


class MuleApi extends Component {
    state = { 
        data: [],
        isLoading: false
     } 

     componentDidMount(){
        axios.get("https://anypoint.mulesoft.com/mocking/api/v1/links/6f149875-3a2b-462f-a452-b45b82b1274b/payments")
        .then(res => this.setState({
            data: res.data,
            isLoading: true
        }))
        .catch(err => console.log(err))
        
     }
     
    render() { 
        const { data } = this.state;
        console.log(data);
        return (
            <>
            <h1>Api Fetch</h1>
            {
                data.map(item => <div key={item.price}>{item.price}</div>)
            }
            </>
        );
    }
}
 
export default MuleApi;





