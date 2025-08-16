import { useRef } from "react";
import type { FormEvent } from "react";

function Questions() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const form = formRef.current;
        if (!form) return; // safety check

        const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
        const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');

        if (nameInput && !nameInput.value.trim()) {
            nameInput.value = "No name";
        }
        if (emailInput && !emailInput.value.trim()) {
            emailInput.value = "NoEmail@gmail.com";
        }
    };

    return (
        <div id="questions" className="questions-section">
            <h1 className="questions-title">Any Questions?</h1>
            <form
                ref={formRef}
                className="questions-form"
                action="https://formspree.io/f/mvgqzwan"
                method="POST"
                onSubmit={handleSubmit}
            >
                <label>
                    Name (Optional)
                    <input type="text" name="name" placeholder="Name" />
                </label>
                <label>
                    Email (Optional)
                    <input type="email" name="email" placeholder="Email Address" />
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
