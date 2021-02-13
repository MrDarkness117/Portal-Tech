import React, { Component } from 'react';

import styles from './RequestForm.module.css';
import Container from '../../../hoc/Container/Container';
import axios from '../../../axios-orders';
import $ from 'jquery';

class RequestForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            company: '',
            phone: '',  
            developer: '',
            description: '',
        };
        this.formRef = null
      }

    clearForms = (event) => {
        this.setState({
            name: '',
            company: '',
            phone: '',
            developer: '',
            description: '',
        })
        for (let form of $('form')) {
            form.reset()
        }
    }
    
    sendCompanyFormData = (event) => {
        const request = {
            name: this.state.name,
            company: this.state.company,
            tel: this.state.phone,
            description: this.state.description,
        }
        axios.post('db/Companies/' + request.company.replace(/\s+/g, '-').toLowerCase() + '.json', request)
        .catch(error => (console.log(error), alert('Возникла ошибка по отправке заявки!')));

        event.preventDefault();
        this.clearForms();
        alert('Заявка успешно отправлена!')
    }
    
    sendDevFormData = (event) => {
        const request = {
            name: this.state.name,
            company: this.state.developer,
            tel: this.state.phone,
            description: this.state.description
        }
        axios.post('db/Devs/' + request.company.replace(/\s+/g, '-').toLowerCase() + '.json', request)
            .catch(error => (console.log(error), alert('Возникла ошибка по отправке заявки!')));

        event.preventDefault();
        this.clearForms();
        alert('Заявка успешно отправлена!')
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render () {
        if (this.props.formType === 'company') {
            return (
                <React.Fragment>
                    <h1 className={styles.Title}>Ищете разработчика?</h1>
                    <div className={styles.RequestForm} style={{backgroundImage: this.props.bgimage}}>
                        <Container>
                            <div className={styles.InnerContainer}>
                                <p>{this.props.text}</p>
                                <form method='get' onSubmit={this.sendCompanyFormData}>
                                    <div className='Form'>
                                        <input type='text' value={this.state.value} name='name' id='name' placeholder='Ваше имя' onChange={this.handleChange} required />
                                    </div>
                                    <div className='Form'>
                                        <input type='text' value={this.state.value} name='company' id='company' placeholder="Название проекта/компании" onChange={this.handleChange} required />
                                    </div>
                                    <div className='Form'>
                                        <input type='text' value={this.state.value} name='phone' id='phone' placeholder="Ваш номер телефона" onChange={this.handleChange} required />
                                    </div>
                                    <div className='Form'>
                                        <textarea className={styles.Description} type='text' value={this.state.value} name='description' id='description' placeholder="Опишите потребность в VR/AR" onChange={this.handleChange} />
                                    </div>
                                    <div className='Form'>
                                        <input type='submit' className={styles.Submit} />
                                    </div>
                                </form>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
            )
        }
        else if (this.props.formType === 'dev') {
            return (
                <React.Fragment>
                    <h1 className={styles.Title}>Ищете клиентов?</h1>
                    <div className={styles.RequestForm} style={{backgroundImage: this.props.bgimage}}>
                        <Container>
                            <div className={styles.InnerContainer}>
                                <p>{this.props.text}</p>
                                <form method='get' onSubmit={this.sendDevFormData}>
                                    <div className='Form'>
                                        <input type='text' value={this.state.value} name='name' id='name' placeholder='Ваше имя' onChange={this.handleChange} required />
                                    </div>
                                    <div className='Form'>
                                        <input type='text' value={this.state.value} name='developer' id='company' placeholder="Название проекта/компании" onChange={this.handleChange} required />
                                    </div>
                                    <div className='Form'>
                                        <input type='text' value={this.state.value} name='phone' id='phone' placeholder="Ваш номер телефона" onChange={this.handleChange} required />
                                    </div>
                                    <div className='Form'>
                                        <textarea className={styles.Description} type='text' value={this.state.value} name='description' id='description' placeholder="Опишите ваш проект" onChange={this.handleChange} />
                                    </div>
                                    <div className='Form'>
                                        <input type='submit' className={styles.Submit} />
                                    </div>
                                </form>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return null
        }
    }    
};

export default RequestForm;