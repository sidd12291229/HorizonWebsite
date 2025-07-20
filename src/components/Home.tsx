import horizonImage from '../assets/HorizonNetwork.svg';

function Home() {
    return (
        <>  
            <div id="home" className="home">
                <nav id="homebar">
                    <ul className="home-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#questions">Questions</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>

                <div className="home-content">
                    <div className="home-text">
                        <h1>Welcome to <br/> <span>Horizon Network</span></h1>
                        <p>
                            Eiusmod adipisicing officia et sit officia veniam culpa aliquip ex eiusmod. Mollit aute consequat quis veniam. Dolore enim ad irure in adipisicing Lorem aute dolor reprehenderit dolore sit esse. Ut magna nostrud deserunt do laboris sint ea cupidatat. Dolore fugiat veniam tempor qui aute veniam do. Et aliquip incididunt officia consectetur eu mollit fugiat culpa amet quis.
                        </p>
                    </div>
                    <div className="home-image">
                        <img src={horizonImage} alt="Horizon Network" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home