import styles from './styles.module.scss'
import { imagesWrapper } from '../../assets/images'
import { useEffect, useState } from 'react'
import { api } from '../../services/api';

type Risks = {
    Vibracao:       string;
    Luminosidade:   string;
    Temperatura:    string;
    Ruido:          string;
}

export function StatusBox(){
    var counter = 1;
    var test = false;
    const [calling, setCalling] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            console.log("I'm here", counter);
            counter++;
            if(counter == 2){
                setCalling(true);
            }
            if(counter >= 3){
                setCalling(false);
                counter = 1;
            }
        },5000);
    },[3]);

    
   
    async function getUserState(){
        await api.get('alarmsWarning').then(response => {
            console.log(response.data);
        })
    }

    return(
        <div className={styles.contentWrapper}>
            <p>{!!calling ? "Liberar operador" : "Chamar operador"}</p>
            <div className={styles.contentIcons}>
                <img src={imagesWrapper.vibracaoImages.normalVibracao} alt="Vibracao" />
                <img className={styles.contentIconLuminosidade} src={ !!calling ? !!test ? imagesWrapper.luminosidadeImages.alertaLuminosidade : imagesWrapper.luminosidadeImages.riscoLuminosidade : imagesWrapper.luminosidadeImages.normalLuminosidade} alt="Luminosidade" />
                <img className={styles.contentIconRuido} src={imagesWrapper.ruidoImages.riscoRuido} alt="Ruido" />
                <img className={styles.contentIconTemperatura} src={imagesWrapper.temperaturaImages.normaltemperatura} alt="Temperatura" />
            </div>
        </div>
    )
}