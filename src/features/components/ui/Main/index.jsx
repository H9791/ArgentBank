import './styles.css'
import Hero from 'src/features/components/ui/Hero'
import Featurecards from 'src/features/components/ui/Featurecards'
export default function Main(){

    return (
        <main className="main">
            <Hero />
            <Featurecards />
        </main>
    )
}