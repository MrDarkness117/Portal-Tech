import React, { Component } from 'react';
import axios from '../../axios-orders';

class API extends Component {
    
    state = {
        data: '',
    }

    fetchAPI = () => {
        axios.get('https://portal-tech-react-default-rtdb.firebaseio.com/db.json')
            .then(response => this.setState({data: response.data}))
            .catch(error => console.log(error));
        return JSON.stringify(this.state.data)
    }

    render () {
        return(
            this.fetchAPI() 
        )
    }
};

export default API;