import horizonImage from '../assets/HorizonNetwork.svg';

function Home() {
    return (
        <>  
            <div id="home" className="home">
                <nav id="homebar">
                    <ul className="home-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#questions">Questions</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                    </nav>

                <div className="home-content">
                    <div className="home-text">
                        <h1>Welcome to <br/> <span>Horizon Network</span></h1>
                        <p>
                            Horizon is a youth-led nonprofit dedicated to empowering students to reach their fullest potential through mentorship, connection, and guidance. We bridge the gap between education stages by linking high school students with university students and professionals for Q&A sessions, podcasts, workshops, and real-world career insights. We also connect elementary students with high school mentors to prepare them academically, socially, and mentally for the challenges ahead. Our mission is to build a supportive network that inspires confidence, fosters curiosity, and helps students “reach for the top.”
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