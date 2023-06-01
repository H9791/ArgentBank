import Navigation from 'src/features/components/ui/Navigation'
import Logo from 'src/features/components/ui/Logo'
import './styles.css'

export default function Header() {
    return (<div className="header">
        <Logo />
        <Navigation />
    </div>)
}