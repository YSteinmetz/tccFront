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


    const [alertaLuminosidade, setalertaLuminosidade] = useState(false);
    const [riscoLuminosidade, setriscoLuminosidade] = useState(false);

    const [alertaVibracao, setalertaVibracao] = useState(false);
    const [riscoVibracao, setriscoVibracao] = useState(false);

    const [alertaTemperatura, setalertaTemperatura] = useState(false);
    const [riscoTemperatura, setriscoTemperatura] = useState(false);

    const [alertaRuido, setalertaRuido] = useState(false);
    const [riscoRuido, setriscoRuido] = useState(false);

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
        //
        if(risco.Temperatura == "1"){
            setriscoTemperatura(true);
            
        }else if(alerta.Temperatura == "1"){
            setalertaTemperatura(true);
        }else{
            setriscoTemperatura(false);
            setalertaTemperatura(false);
        }
        //
        if(risco.Vibracao == "1"){
            setriscoVibracao(true);
            
        }else if(alerta.Vibracao == "1"){
            setalertaVibracao(true);
        }else{
            setriscoVibracao(false);
            setalertaVibracao(false);
        }
        //
        if(risco.Ruido == "1"){
            setriscoRuido(true);
            
        }else if(alerta.Ruido == "1"){
            setalertaRuido(true);
        }else{
            setriscoRuido(false);
            setalertaRuido(false);
        }

        console.log("Estou Aqui");
    }

    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentIcons}>

                <img src={riscoVibracao == true ?
                            imagesWrapper.vibracaoImages.riscoVibracao : 
                            alertaVibracao == true ? 
                            imagesWrapper.vibracaoImages.alertaVibracao : 
                            imagesWrapper.vibracaoImages.normalVibracao 
                } alt="Vibracao" />

                <img className={styles.contentIconLuminosidade} 
                    src={   riscoLuminosidade == true ?
                            imagesWrapper.luminosidadeImages.riscoLuminosidade : 
                            alertaLuminosidade == true ? 
                            imagesWrapper.luminosidadeImages.alertaLuminosidade : 
                            imagesWrapper.luminosidadeImages.normalLuminosidade 
                    } alt="Luminosidade" />
                <img className={styles.contentIconRuido} 
                    src={   riscoRuido == true ?
                            imagesWrapper.ruidoImages.riscoRuido : 
                            alertaRuido == true ? 
                            imagesWrapper.ruidoImages.alertaRuido : 
                            imagesWrapper.ruidoImages.normalRuido
                    } alt="Ruido" />
                <img className={styles.contentIconTemperatura} 
                    src={   riscoTemperatura == true ?
                            imagesWrapper.temperaturaImages.riscotemperatura : 
                            alertaTemperatura == true ? 
                            imagesWrapper.temperaturaImages.alertatemperatura : 
                            imagesWrapper.temperaturaImages.normaltemperatura
                    } alt="Temperatura" />
            </div>
        </div>
    )
}