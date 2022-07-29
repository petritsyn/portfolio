import React from 'react';
import styles from '../../common/styles/commonStyles.module.css';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${styles.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={s.form}>
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'Phone number'}/>
                    <input type="textarea" placeholder={'Enter the text...'}/>
                    <button className={styles.button}>Sent</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;