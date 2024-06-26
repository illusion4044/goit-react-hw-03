import { useId } from "react";

export default function ContactForm({ onAdd }) {
    const id = useId();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        onAdd({
          username: form.elements.username.value,
          role: form.elements.role.value,
        });
    
        form.reset();
    };

    return (
        <form  onSubmit={handleSubmit}>
            <div >
                <label htmlFor={`username-${id}`}>Username:</label>
                <input type="text" name="username" id={`username-${id}`} />
            </div>
        </form>
    );
}
