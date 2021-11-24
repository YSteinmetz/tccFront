import { useContext, useEffect } from 'react'
import { imagesWrapper } from '../../assets/images'
import { UserStatusContext } from '../../context/getStatusIcon';
import styles from './styles.module.scss'


export function ButonBox(){
    
    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentButtonsWrapper}>
                <button className={styles.buttonCallOperator}> {"Chamar operador"} </button>
                <button  
                type="button" 
                className={styles.buttonAcknowledgeAlarms}>
                            <img className={styles.imageAcknowledgeAlarms} src={imagesWrapper.icons.pontoZero} alt="Ponto zero" />
                </button>
            </div>
        </div>
    )
}