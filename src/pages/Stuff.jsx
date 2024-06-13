import React, { useEffect, useState } from "react";
import Case from "../component/Case";
import Table from "../component/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Stuff () {
    const [stuffs, setStuffs] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getStuffs()
    }, []);

    function getStuffs() {
        axios.get('http://localhost:8000/stuffs/data', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        .then(res => {
            setStuffs(res.data.data);
        })
        .catch(err => {
            if (err.response.status == 401) {
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        })
    }

    const headers = [
        "#",
        "Name",
        "Category",
        "Total available",
        "Total defec"
    ]

    const endpointModal = {
        "data_detail": "http://localhost:8000/stuffs/{id}",
        "delete" : "http://localhost:8000/stuffs/{id}",
        "update" : "http://localhost:8000/stuffs/{id}",
        "store" : "http://localhost:8000/stuffs",
    }

    const columnIdentitasDelete = 'name';

    const inputData = {
        "name" : {
            "tag": "input",
            "type": "text",
            "option": null
        },
        "category" : {
            "tag" : "select",
            "type" : "select",
            "option" : [ "KLN", "HTL", "Teknisi/Sarpas"]
        },
    }
    const title = 'Stuff'

    const buttons = [
        "create",
        "trash",
        "edit",
        "delete"
    ]

    const tdColumn = {
        "name": null,
        "category": null,
        "stuff_stock": "total_available",
        "stuff_stock*": "total_defec"
    }

    return (
        <Case>
            <Table headers={headers} data={stuffs} endpoint={endpointModal} 
            identitasColumn={columnIdentitasDelete} inputData={inputData} titleModal={title} opsiButton={buttons} columnForTd={tdColumn}></Table>
        </Case>
    )
}