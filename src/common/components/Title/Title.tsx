import React, {FC} from 'react';
import s from 'common/components/Title/Title.module.scss'

type Props = {
    text: string
}

export const Title: FC<Props> = ({text}) => {
    return (
        <div className={s.title}>
            <span className={s.text}>{text}</span>
        </div>
    );
};