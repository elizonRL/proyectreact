import Tijeras from "../icons/Tijeras";


export default function Header(){
    return(
        <>
        <header className="md-header">
            <Tijeras/>
            <nav className="md-header-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}