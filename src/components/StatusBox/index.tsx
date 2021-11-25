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
    var test = "1";

    var alerta = {
        Luminosidade: "0",
        Temperatura: "0",
        Vibracao: "0",
        Ruido: "0"
    }
    var risco = {
        Luminosidade: "0",
        Temperatura: "0",
        Vibracao: "0",
        Ruido: "0"
    }
    var dispImg = {
        Luminosidade: imagesWrapper.luminosidadeImages.normalLuminosidade,
        Temperatura: imagesWrapper.temperaturaImages.normaltemperatura,
        Vibracao: imagesWrapper.vibracaoImages.normalVibracao,
        Ruido: imagesWrapper.ruidoImages.normalRuido
    }
    

    
    const [calling, setCalling] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            if(counter >= 10){
                counter = 0;
                //console.log("I'm here");
                //getUserState();
            }            
            counter++;
        },1000);
    },[]);

    
   
    async function getUserState(){
        await api.get<Risks>('alarmsWarning').then(response => {
            alerta.Luminosidade = response.data.Luminosidade;
            alerta.Temperatura = response.data.Temperatura;
            alerta.Vibracao = response.data.Vibracao;
            alerta.Ruido = response.data.Ruido;
     
        });
        await api.get<Risks>('alarmsRisk').then(response => {
            risco.Luminosidade = response.data.Luminosidade;
            risco.Temperatura = response.data.Temperatura;
            risco.Vibracao = response.data.Vibracao;
            risco.Ruido = response.data.Ruido;
            
        });

        if(risco.Luminosidade == "1"){
            
            dispImg.Luminosidade == imagesWrapper.luminosidadeImages.riscoLuminosidade;
        }else if(alerta.Luminosidade == "1"){
            
            dispImg.Luminosidade == imagesWrapper.luminosidadeImages.alertaLuminosidade;
        }else{
            
            dispImg.Luminosidade == imagesWrapper.luminosidadeImages.normalLuminosidade;
        }

        console.log(dispImg.Luminosidade);
    }

    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentIcons}>
                <img src={dispImg.Vibracao} alt="Vibracao" />
                <img className={styles.contentIconLuminosidade} src={ dispImg.Luminosidade } alt="Luminosidade" />
                <img className={styles.contentIconRuido} src={dispImg.Ruido} alt="Ruido" />
                <img className={styles.contentIconTemperatura} src={dispImg.Temperatura} alt="Temperatura" />
            </div>
        </div>
    )
}