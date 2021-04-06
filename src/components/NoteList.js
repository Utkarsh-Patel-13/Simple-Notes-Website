import { useEffect, useState } from "react";

import SingleNote from "./SingleNote";
import NewNote from "./NewNote";
import "./notelist.css";

import API from "../api";

// const url = "http://localhost:8000/api/notes/";

const NoteList = () => {
    const [notes, setNotes] = useState();

    const addNote = (title, body) => {
        API.post("notes", { title: title, body: body })
            .then((res) => {
                API.get("notes").then((res) => {
                    setNotes(res.data);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteNote = (id) => {
        API.delete(`notes/${id}`)
            .then((res) => {
                API.get("notes").then((res) => {
                    setNotes(res.data);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        API.get("notes").then((res) => {
            setNotes(res.data);
        });
    }, []);

    return (
        <div className="list-container">
            <NewNote addNote={addNote} />
            {notes ? (
                notes.map((note, index) => {
                    return (
                        <div key={index}>
                            <SingleNote note={note} deleteNote={deleteNote} />
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
