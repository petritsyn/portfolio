import React from 'react';
import s from './RemoteWork.module.css';
import styles from '../../common/styles/commonStyles.module.css';

const RemoteWork = () => {
    return (
      <div className={s.remoteWork}>
          <div className={`${styles.container} ${s.remoteWorkContainer}`}>
              <h3>I am considering the possibility of remote work</h3>
              <button className={styles.button}>Recruit me</button>
          </div>
      </div>
    );
};

export default RemoteWork;