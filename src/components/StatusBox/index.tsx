import styles from './styles.module.scss'
import { imagesWrapper } from '../../assets/images'


export function StatusBox(){
    return(
        <div className={styles.contentWrapper}>
            <div className={styles.contentIcons}>
                <img src={imagesWrapper.vibracaoImages.normalVibracao} alt="Vibracao" />
                <img className={styles.contentIconLuminosidade} src={imagesWrapper.luminosidadeImages.alertaLuminosidade} alt="Luminosidade" />
                <img className={styles.contentIconRuido} src={imagesWrapper.ruidoImages.riscoRuido} alt="Ruido" />
                <img className={styles.contentIconTemperatura} src={imagesWrapper.temperaturaImages.normaltemperatura} alt="Temperatura" />
            </div>
        </div>
    )
}