import './styles.css'
import Signoptions from 'src/features/components/ui/Signoptions'
import logo from 'src/assets/img/argentBankLogo.png'

export default function Header() {
    return (<div className="header">
        <img className="logo" src={logo}/>
        <Signoptions />
    </div>)
}