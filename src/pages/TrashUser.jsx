import React, { useEffect, useState } from "react";
import Case from "../component/Case";
import axios from "axios";
import Table from "../component/Table";

export default function TrashUser() {
    const [usersTrash, setStuffsTrash] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/users/trash', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'), 
            }
        })
        .then (res => {
            setStuffsTrash(res.data.data);
        })
        .catch(err => {
            console.log(err)
            if (err.response.status == 401) {
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        })
    }, [])

    const headers = [
        "#",
        "Username",
        "Email",
        "Role"
    ]

    const endpointModal = {
        "restore": "http://localhost:8000/users/restore/{id}",
        "delete_permanent": "http://localhost:8000/users/permanent/{id}",
    }

    const inputData = {}

    const title = 'Users'

    const columnIdentitasDelete = 'username'

    const buttons = [
        "restore",
        "permanentDeletes"
    ]

    const tdColumn = {
        "username": null,
        "email": null,
        "role": null
    }

    return (
        <>
            <Case>
                <Table headers={headers} data={usersTrash} endpoint={endpointModal} inputData={inputData} titleModal={title} 
                identitasColumn={columnIdentitasDelete} opsiButton={buttons} columnForTd={tdColumn}></Table>
            </Case>
        </>
    )
}