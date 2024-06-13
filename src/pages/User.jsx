import React, { useEffect, useState} from "react";
import Case from "../component/Case";
import Table from "../component/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function User(){
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getUsers()
    }, []);

    function getUsers() {
        axios.get('http://localhost:8000/users/data', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        .then(res => {
            setUsers(res.data.data);
        })
        .catch(err => {
            if (err.response.status == 401) {
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        })
    }

    const headers = [
        "#",
        "Username",
        "Email",
        "Role"
    ]

    const endpointModal = {
        "data_detail": "http://localhost:8000/users/{id}",
        "delete" : "http://localhost:8000/users/{id}",
        "update" : "http://localhost:8000/users/{id}",
        "store" : "http://localhost:8000/users",
    }

    const columnIdentitasDelete = 'username';

    const inputData = {
        "username" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "email" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "password" : {
            "tag": "input",
            "type": "password",
            "option": null
        },
        "role": {
            "tag": "input",
            "type": "text",
            "option": ["staff", "admin"]
        },
    }

    const title = 'User'

    const buttons = [
        "create",
        "trash",
        "edit",
        "delete"
    ]

    const tdColumn = {
        "username": null,
        "email": null,
        "role": null
    }

    return (
        <Case>
            <Table
                headers={headers}
                data={users}
                endpoint={endpointModal}
                identitasColumn={columnIdentitasDelete}
                inputData={inputData}
                titleModal={title}
                opsiButton={buttons}
                columnForTd={tdColumn}>
             </Table>
        </Case>
    )
}