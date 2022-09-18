import React, { useState } from "react";
import "./addnote.css"
import axios from "axios"
const Addnote = ({ setnoteList }) => {

    const [noteObj, setnoteObj] = useState({
        title: "",
        description: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setnoteObj({
            ...noteObj,
            [name]: value
        })
    }

    const add = () => {
        if (noteObj.title) {
            axios.post("http://localhost:3001/api/addNew", noteObj)
                .then(res => setnoteList(res.data))
            setnoteObj({
                title: "",
                description: ""
            })
        }
    }

    return (
        <div className="addnote">
            <input
                className="inputBox titleInput"
                type="text"
                name="title"
                autoComplete="off"
                placeholder="Add Title"
                onChange={handleChange}
                value={noteObj.title}
            />
            <textarea
                className="inputBox description"
                name="description"
                placeholder="Start Typing..."
                onChange={handleChange}
                value={noteObj.description}
            />
            <div className="addButton" onClick={add}>Add</div>
        </div>
    )
}

export default Addnote