import React from 'react';
import styleContainer from '../../common/styles/commonStyles.module.css';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div className={s.formContainer}>
                    <form className={s.form}>
                        <input type="text" placeholder={'Name'}/>
                        <input type="number" placeholder={'Phone number'}/>
                        <textarea rows={5} placeholder="Enter information about your job offer"/>
                        <button className={styleContainer.button}>Sent</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;