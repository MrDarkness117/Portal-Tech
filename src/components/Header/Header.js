import React, { Component } from 'react';

import $ from 'jquery';

import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Container from '../../hoc/Container/Container';
import Pnglogo from '../../assets/img/portal-tech.png';
// import LogoSk from '../../assets/img/skolkovo2.png';

class Header extends Component {

    scrollTo = (el) => {
        return $(el).scrollIntoView(alignToTop);
    }

    render () {

        return (
            <header className={styles.Header}>
                <Container>
                    <Logo img={Pnglogo} />
                    <nav className={styles.Navlist}>
                        <ul>
                            <li><a onClick={scrollTo('.InfoBlock_InfoBlock__2VgQg')}>О нас</a></li>
                            <li><a onClick={scrollTo('.Companies_Companies__2jrpJ')}>Партнеры</a></li>
                            <li><a onClick={scrollTo('.Requests_Requests__TPAEO')}>Заявки</a></li>
                            <li><a onClick={scrollTo('footer')}>Контакты</a></li>
                        </ul>
                        {/* <a><Image src={LogoSk} /></a> */}
                    </nav>
                </Container>
            </header>
        )
    }
}

export default Header;