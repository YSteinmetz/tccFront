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

    

    
    const [calling, setCalling] = useState(false);
    const [alertaLuminosidade, setalertaLuminosidade] = useState(false);
    const [riscoLuminosidade, setriscoLuminosidade] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            if(counter >= 10){
                counter = 0;
                //console.log("I'm here");
                getUserState();
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
            setriscoLuminosidade(true);
            
        }else if(alerta.Luminosidade == "1"){
            setalertaLuminosidade(true);
        }else{
            setriscoLuminosidade(false);
            setalertaLuminosidade(false);
        }
        console.log("Estou Aqui");

        
    }

    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentIcons}>
                <img src={imagesWrapper.vibracaoImages.normalVibracao} alt="Vibracao" />
                <img className={styles.contentIconLuminosidade} src={ riscoLuminosidade == true ? imagesWrapper.luminosidadeImages.riscoLuminosidade : imagesWrapper.luminosidadeImages.normalLuminosidade } alt="Luminosidade" />
                <img className={styles.contentIconRuido} src={imagesWrapper.ruidoImages.normalRuido} alt="Ruido" />
                <img className={styles.contentIconTemperatura} src={imagesWrapper.temperaturaImages.normaltemperatura} alt="Temperatura" />
            </div>
        </div>
    )
}