import React from 'react';
import s from './Footer.module.css';
import styleContainer from '../../common/styles/commonStyles.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3>Andrey Petritsyn</h3>
                <div className={s.cubes}>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                </div>
                <p>&copy; All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;