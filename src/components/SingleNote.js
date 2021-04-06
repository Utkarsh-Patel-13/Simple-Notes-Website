import "./notelist.css";

import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState } from "react";

const SingleNote = ({ note, deleteNote }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="note">
            <header className="note-title">
                <h2>{note.title}</h2>

                <div className="buttons">
                    <button onClick={() => deleteNote(note.id)}>
                        <MdDeleteForever />
                    </button>

                    <button>
                        <MdEdit />
                    </button>

                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {isOpen ? <FaArrowDown /> : <FaArrowRight />}
                    </button>
                </div>
            </header>
            {isOpen && (
                <div className="note-body">
                    <p>{note.body}</p>
                </div>
            )}
        </div>
    );
};

export default SingleNote;
