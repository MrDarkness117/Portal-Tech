import React, { Component } from 'react';

import styles from './Companies.module.css';
import Container from '../../hoc/Container/Container';
import Company from './Company/Company';
import VRConcept from '../../assets/img/Companies/logo.png';
import Varwin from '../../assets/img/Companies/varwin.png';
import GeneralVR from '../../assets/img/Companies/generalvr.png';
import TAU from '../../assets/img/Companies/tau.svg';
import Varya from '../../assets/img/Companies/varya.png';
import SKM from '../../assets/img/Companies/skm.png'
import Neon from '../Decoration/Borders/Neon/Neon';

class Companies extends Component {
    
    state = {
        vrconcept: {
            name: 'VR Concept',
            desc: 'Компания, разрабатывающая более 6 лет свой проект VR Concept, подходит для работы с моделями промышленной сферы и обучения работы с ними. Также подходит для работы с интерьерами.',
            img: VRConcept,
        },
        varwin: {
            name: 'Varwin',
            desc: 'Varwin – это платформа, упрощающая разработку и внедрение VR-проектов. Создадут проект под любую вашу задачу и предоставят инструмент для управления контентом. Внести изменения будет так же легко, как собрать конструктор!',
            img: Varwin,
        },
        generalvr: {
            name: 'General VR',
            desc: 'Команда разработчиков комплексных проектов виртуальной и дополненной реальности для различных направлений в промышленности.',
            img: GeneralVR,
        },
        tau: {
            name: 'TAU Tracker',
            desc: 'Инновационный IT стартап, разрабатывающий продукты для взаимодействия с виртуальной и дополненной реальностью для игр, обучающих программ и др.',
            img: TAU,
        },
        varya: {
            name: 'Varya LLC',
            desc: 'Команда разработчиков, инженеров, дизайнеров, объединившихся для создания инфраструктурных решений в сферах VR/MR/AR, Motion Capture, Hardware, Machine Learning. Их цель - создание готовых продуктов и решений, которые помогут перейти на новый уровень проектам в отрасли развлечения, спорта, медицины и производства.',
            img: Varya,
        },
        skm: {
            name: 'SKM Tracking',
            desc: 'Cost-effective трекинг движений игрока для multiplayer  VR зон полного погружения,который помогает интеграторам, строящим и разворачивающим такие VR зоны охватить новые сегменты клиентов, которым сейчас они не доступны по цене.',
            img: SKM,
        },
    }
    
    render () {
        return (
            <div className={styles.Companies}>
                <Container>
                    <h1 style={{textAlign: 'center', paddingTop: '40px', paddingBottom: '20px', zIndex: '200'}}>Партнеры</h1>
                    <Company img={this.state.vrconcept.img} name={this.state.vrconcept.name} desc={this.state.vrconcept.desc} />
                    <Company img={this.state.varwin.img} name={this.state.varwin.name} desc={this.state.varwin.desc} />
                    <Company img={this.state.generalvr.img} name={this.state.generalvr.name} desc={this.state.generalvr.desc} />
                    <Company img={this.state.tau.img} name={this.state.tau.name} desc={this.state.tau.desc} />
                    <Company img={this.state.varya.img} name={this.state.varya.name} desc={this.state.varya.desc} />
                    <Company img={this.state.skm.img} name={this.state.skm.name} desc={this.state.skm.desc} />
                    <Neon width='80px' height='120px' left='-1%' top='30px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' />
                    <Neon width='100px' height='200px' left='95%' top='30px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' />
                    <Neon bgcolor='white' width='130px'  height='260px' left='99%' top='20px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' />
                    <Neon width='180px' height='260px' left='94%' top='500px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' />
                    <Neon width='180px' height='400px' left='6%' top='350px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' zIndex='100' />
                    <Neon width='130px' height='180px' left='13%' top='2px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' />
                    <Neon width='260px' height='150px' left='60%' top='2px' border='2px black solid' bradius='10%' shadow='0px 0px 20px 2px black, 0 0 10px inset black' />
                </Container>
            </div>
        )
    }
};

export default Companies;