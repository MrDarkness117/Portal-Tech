import React, { Component } from 'react';

import Container from '../../hoc/Container/Container';
import RequestForm from "../Requests/RequestForm/RequestForm";
import styles from './Requests.module.css';
import Business from '../../assets/img/business.jpg';

class Requests extends Component {

    // sendCompanyFormData = () => {
    //     const request = {
    //         name: this.state.name,
    //         company: this.state.company,
    //         tel: this.state.phone,
    //     }
    //     axios.post('/requestCompany', request);
    // }
    
    // sendDevFormData = () => {
    //     const request = {
    //         name: this.state.name,
    //         company: this.state.company,
    //         tel: this.state.phone,
    //     }
    //     axios.post('/requestDev', request);
    // }

    render () {
        return (
            <div className={styles.Requests}>
                <Container>
                    <h1 style={{color: 'white'}}>Подать заявку</h1>
                    <div style={{width: '70%', textAlign: 'center', margin: '0 auto', color: 'white', fontWeight: '600', fontSize: '22px', paddingBottom: '20px'}}>
                        <p>У вас интересный проект, что ищет клиентов? Или вы являетесь предпринимателем и желаете подобрать себе нужный вам проект? Оставьте свои контакты ниже и мы с вами обязательно свяжемся!</p>
                    </div>
                    <RequestForm formType='company' bgimage={Business} text='Желаете подобрать себе разработчика, либо их готовое решение? Оставьте заявку здесь!'/>
                    <RequestForm formType='dev' bgimage={Business} text='Вы разработчик и хотите получать заявки на разработку? Оставьте заявку здесь!' />
                </Container>
            </div>
        )
    }
};

export default Requests;