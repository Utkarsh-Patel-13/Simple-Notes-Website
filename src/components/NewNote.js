import { useState } from "react";

const NewNote = ({ addNote }) => {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    const handleTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };
    const handleBody = (e) => {
        e.preventDefault();
        setBody(e.target.value);
    };

    return (
        <div>
            {/* <form onSubmit={addNote(title, body)}>
                Title: <br />
                <input
                    type="text"
                    className="bg-blue-200"
                    onChange={(e) => handleTitle(e)}
                    onfoc
                />
                <br />
                Body: <br />
                <textarea
                    className="bg-blue-200"
                    onChange={(e) => handleTitle(e)}
                />
                <br />
                <button className="bg-red-500" type="submit">
                    Add Note
                </button>
            </form> */}
        </div>
    );
};

export default NewNote;
