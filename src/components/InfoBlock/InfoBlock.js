import React, { Component } from 'react';

import Container from '../../hoc/Container/Container';
import Text from './Text/Text';
import Neon from '../Decoration/Borders/Neon/Neon';
import Image from '../Decoration/Borders/Images/Image/Image'
import styles from './InfoBlock.module.css';
import Desc1 from '../../assets/img/desc1.jpg';
import Desc2 from '../../assets/img/desc2.jpg';
import Desc3 from '../../assets/img/desc3.jpg';
import Desc4 from '../../assets/img/desc4.jpg';
import InfoHalf from './InfoHalf/InfoHalf';

class InfoBlock extends Component {

    state = {
        text: 'Команда энтузиастов, вдохновленная перспективами и возможностями виртуальной и дополненной реальности. В атриуме Инновационного Центра Сколково наш VR-AR шоурум, в котором мы агрегируем различные решения оборудования и ПО для VR/AR различных отраслей. Являемся проводниками между разработчиками, бизнесом и государственными учреждениями, с лучшими решениями для самых разных сфер. ',
    }

    render () {
        return (
            <div className={styles.InfoBlock}>
                <Container>
                    <Neon 
                    width='17%' 
                    height='200px' 
                    left='70%' 
                    top='+290px' 
                    shadow='0px 0px 30px 2px rgba(48, 144, 255, 0.3)' 
                    bradius='15px' 
                    border='2px solid rgba(48, 144, 255, 0.3)'
                    bgcolor='#212121'
                    zindex='100'/>
                    <Neon 
                    width='17%' 
                    height='200px' 
                    left='72%' 
                    top='+260px' 
                    shadow='0px 0px 30px 2px rgba(255, 255, 255, 0.3)' 
                    bradius='15px' 
                    border='2px solid rgba(255, 255, 255, 0.3)'
                    bgcolor = 'rgba(255, 255, 255, 0.6)'
                    zindex='99'/>
                    <Neon 
                    width='30%' 
                    height='300px' 
                    right='16%' 
                    bottom='10px' 
                    shadow='0px 0px 30px 2px rgba(48, 144, 255, 0.3)' 
                    bradius='15px' 
                    border='2px solid rgba(48, 144, 255, 0.3)'
                    bgcolor='#212121'
                    zindex='100'/>
                    <Neon 
                    width='30%' 
                    height='300px' 
                    right='14%' 
                    bottom='-20px' 
                    shadow='0px 0px 30px 2px rgba(255, 255, 255, 0.3)' 
                    bradius='15px' 
                    border='2px solid rgba(255, 255, 255, 0.3)'
                    bgcolor='#212121'
                    zindex='99'/>
                    <InfoHalf>
                        <Text text={this.state.text}/>
                    </InfoHalf>
                    <InfoHalf>
                        <div>
                            <img src={Desc4}></img>
                            <img src={Desc2}></img>
                            <img src={Desc3}></img>
                            <img src={Desc1}></img>
                        </div>
                    </InfoHalf>
                </Container>
                {/* <div className={styles.InfoVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3yqVphk6oJ8"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{position: 'relative', zIndex: 200}}></iframe>
                </div> */}
            </div>
        )
    }
};

export default InfoBlock;