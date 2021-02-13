import React, { Component } from 'react';

import Container from '../../hoc/Container/Container';
import Image from '../Decoration/Borders/Images/Image/Image';
import styles from './Footer.module.css';
// import Logo from '../Logo/Logo';
import Pnglogo from '../../assets/img/portal-tech.png'

class Footer extends Component {
    render () {
        return (
            <footer>
                <Container>
                    <div className={styles.InnerContainer}>
                        <div className={styles.FooterElement}>
                            <img src={Pnglogo} style={{width: '150px'}}></img>
                            {/* <Image src={Pnglogo} style={{width: '150px', margin: '0 10px'}}/> */}
                        </div>
                        <div className={styles.FooterElement}>
                            <p>Есть вопросы? Звоните по телефону:<br/><span>+7 (913) 122-28-02</span><br/><span>+7 (916) 716-33-00</span></p>
                        </div>
                        <div className={styles.FooterElement}>
                            <p>Cоц. сети:<br/>
                            Facebook: <a href='https://www.facebook.com/yaroslav.fert' target='_blank'>Ярослав</a> - Основатель Portal Tech<br/>
                            VK: <a href='https://vk.com/mrdarkness' target='_blank'>Михаил</a> - Разработчик сайта<br/></p>
                        </div>
                        <div className={styles.FooterElement} style={{verticalAlign: 'bottom'}}>
                        <p>@2021 Portal Tech</p>
                        </div>
                    </div>
                    {/* <div style={{textAlign: 'center', color: 'white'}}>
                    </div> */}
                </Container>
            </footer>
        )
    }
};

export default Footer;