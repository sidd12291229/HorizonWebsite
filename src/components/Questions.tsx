function Questions() {
    return (
        <div id="questions" className="questions-section">
            <div className="questions-left">
                <h1>Any Qgit commit -m "Describe what you changed"stions?</h1>
            </div>
            <form className="questions-form" action="https://formspree.io/f/mvgqzwan" method="POST">
                <label>
                    Name
                    <input type="text" name="name" required placeholder="Name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" required placeholder="Email Address" />
                </label>
                <label>
                    Message
                    <textarea name="message" required placeholder="Message" />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Questions;
