import './styles/global.css'
import styles from './App.module.scss'
import {DisplayBox} from './components/DisplayBox'
import {ButonBox} from './components/ButonBox'
import {StatusBox} from './components/StatusBox'
import { UserStatusProvider } from './context/getStatusIcon'

function App() {
  return (
    <main className={styles.contentWrapper}>
      <DisplayBox />
      <UserStatusProvider>
      <ButonBox />
      </UserStatusProvider>
      <StatusBox />
    </main>
  )
}

export default App
