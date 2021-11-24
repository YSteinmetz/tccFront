import { useContext, useEffect } from 'react'
import { imagesWrapper } from '../../assets/images'
import { UserStatusContext } from '../../context/getStatusIcon';
import styles from './styles.module.scss'


export function ButonBox(){
    
    return(
        <div className={styles.contentWrapper}>
            <h1>I'm a button Box</h1>
        </div>
    )
}