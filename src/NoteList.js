import { useEffect, useState } from "react";

import axios from "axios";

const url = "http://localhost:8000/api";

const NoteList = () => {
    const [notes, setNotes] = useState();

    useEffect(() => {
        axios.get(url).then((res) => {
            setNotes(res.data);
        });
    }, []);

    return (
        <div>
            {notes ? (
                notes.map((note, index) => {
                    return (
                        <div key={index} className="m-2 p-2 bg-green-200">
                            <h1>ID: {note.id}</h1>
                            <h2>TITLE: {note.title}</h2>
                            <p>BODY: {note.body}</p>
                            <p>
                                Created: {note.created_at}, Last Modified:{" "}
                                {note.modified_on}
                            </p>
                        </div>
                    );
                })
            ) : (
                <p>LOADING</p>
            )}
        </div>
    );
};
export default NoteList;
