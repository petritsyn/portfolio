import React, {FC} from 'react';
import s from 'components/Projects/Project/Project.module.scss';
import commonStyles from 'common/styles/commonStyles.module.scss'

type Props = {
    projectName: string
    style: React.CSSProperties
}

const Project: FC<Props> = ({projectName, style}) => {
    return (
        <div className={s.project}>
            <a href={'#'}>
                <div className={s.imgContainer} style={style}>
                    <button className={`${commonStyles.button} ${s.viewBtn}`}>Show</button>
                </div>
            </a>
            {/*<div>*/}
            {/*    <span className={s.projectName}>{props.projectName}</span>*/}
            {/*    <span>Description</span>*/}
            {/*</div>*/}
        </div>
    );
};

export default Project;