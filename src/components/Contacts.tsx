function Contacts() {
    return (
        <div id="contacts" className="contacts">
            <h2 className="contacts-title">Other Contacts</h2>
            <div className="contacts-container">
                <a href="https://www.instagram.com/horizonnetworkbc/" className="contact-card" target="_blank" rel="noopener noreferrer">
                    <h3>Instagram</h3>
                </a>
                <a href="https://discord.gg/3G4qnpFn" className="contact-card" target="_blank" rel="noopener noreferrer">
                    <h3>Discord</h3>
                </a>
                <a href="https://wa.me/19876543210" className="contact-card" target="_blank" rel="noopener noreferrer">
                    <h3>WhatsApp</h3>
                </a>
            </div>
        </div>
    );
}

export default Contacts;
