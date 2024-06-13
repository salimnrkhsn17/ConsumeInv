 import React, { useEffect, useState } from "react";
import Case from "../component/Case";
import Table from "../component/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function InboundStuff () {
    const [inbound, setInbounds] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        getInbounds()
    }, []);

    function getInbounds() {
        axios.get('http://localhost:8000/inbound-stuff/data', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        .then(res => {
            setInbounds(res.data.data);
        })
        .catch(err => {
            if (err.response.status == 401){
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        })
    }

  
    const headers = [
        "#",
        "name stuff",
        "total",
        "date",
        "proff_file"
    ]

    const endpointModal = {
        "data_detail": "http://localhost:8000/inbound-stuff/{id}",
        "delete" : "http://localhost:8000/inbound-stuff/{id}",
        "update" : "http://localhost:8000/inbound-stuff/{id}",
        "store" : "http://localhost:8000/inbound-stuff",
        "delete_permanent": "http://localhost:8000/inbound-stuff/permanent/{id}",
    }

    const columnIdentitasDelete = 'stuff_id';

    const inputData = {
       "stuff_id" : {
            "tag": "input",
            "type": "text",
            "option": null
       },
       "total" : {
            "tag": "input",
            "type": "text",
            "option": null
       },
       "date": {
            "tag": "input",
            "type": "text",
            "option": null
       },
       "proff_file": {
            "tag": "input",
            "type": "text",
            "option": null
       }

    }
    const title = 'InboundStuff'

    const buttons = [
        // "create",
        //"trash",
        //"edit",
        "permanentDeletes"
    ]

    const tdColumn = {
        "stuff": "name",
        "total": null,
        "date": null,
        "proff_file": null,
        
    }

    return (
        <Case>
            <Table headers={headers}
                data={inbound}
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


