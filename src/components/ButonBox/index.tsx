import { useContext, useEffect, useState } from 'react'
import { imagesWrapper } from '../../assets/images'
import { UserStatusContext } from '../../context/getStatusIcon';
import { api } from '../../services/api';
import styles from './styles.module.scss'


export function ButonBox(){
    const [calling, setCalling] = useState(false);
    async function callUser() {
        if(!calling){
            await api.get('callUser').then(response => {
            setCalling(true);
            })
        }else{
            await api.get('freeUser').then(response => {
                setCalling(false)
            })
        }
    }
    
    async function acknowledgeAlarms() {
        await api.get('acknowledge').then(response =>{
            return;
        })
        
    }

    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentButtonsWrapper}>
                <button onClick = {callUser} className={styles.buttonCallOperator}> {!!calling ? "Liberar operador" : "Chamar operador"} </button>
                <button 
                onClick = {acknowledgeAlarms} 
                type="button" 
                className={styles.buttonAcknowledgeAlarms}>
                            <img className={styles.imageAcknowledgeAlarms} src={imagesWrapper.icons.pontoZero} alt="Ponto zero" />
                </button>
            </div>
        </div>
    )
}