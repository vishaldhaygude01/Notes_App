import React from "react";
import "./shownote.css"
import axios from "axios";
const Shownote = ({ noteList, setnoteList }) => {

    const deleteNote = (id) => {
        axios.post("http://localhost:3001/api/delete", { id })
            .then(res => setnoteList(res.data))
    }

    return (
        <div className="shownote row">
            {
                noteList.map(note => (
                    <div className="noteCard col-md-3" key={note._id}>
                        <h1 className="title">
                            {note.title}
                            <i className="deleteIcon fa fa-trash" aria-hidden="truete" onClick={() => deleteNote(note._id)}>

                            </i>
                        </h1>
                        <textarea className="descriptionBox" value={note.description}
                            readOnly />


                    </div>
                ))
            }



        </div >
    )
}

export default Shownote