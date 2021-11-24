import { imagesWrapper } from '../../assets/images'
import styles from './styles.module.scss'

export function DisplayBox(){
    return(
        <div className={styles.contentWrapper}>
            <h1>Status do usuário</h1>
            <img className={styles.image} src={imagesWrapper.icons.usuarioOnline} alt="Usuario" />
        </div>
    )
}