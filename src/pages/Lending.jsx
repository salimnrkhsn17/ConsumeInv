import React, {useEffect, useState} from "react";
import Case from "../component/Case";
import Table from "../component/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import User from "./User";
 
export default function Lending () {
    const [lending, setLending] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getLendings()
    }, []);

    function getLendings() {
        axios.get('http://localhost:8000/lending/data', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        .then(res => {
            setLending(res.data.data);
        })
        .catch(err => {
            if (err.response.status == 401){
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        })
    }

    const headers = [
        "#",
        "Name Stuff",
        "Username",
        "Waktu",
        "Name",
        "Notes",
        "Total stuff",
        "restoration"
    ]

        const endpointModal = {
            "data_detail": "http://localhost:8000/lending/{id}",
            "delete": "http://localhost:8000/lending/delete/{id}",
            "update": "http://localhost:8000/lending/update/{id}",
            "store": "http://localhost:8000/lending/store",
            "storeto": "http://localhost:8000/restoration/store",
    
        }
    
    
        const columnIdentitasDelete = 'stuff_id';
    
        const inputData = {
            "stuff_id" : {
                "tag": "input",
                "type": "text",
                "option": null
            },
            "user_id" : {
                "tag": "input",
                "type": "text",
                "option": null
            },
            "date_time" : {
                "tag": "input",
                "type": "datetime-local",
                "option": null
            },
            "name" : {
                "tag": "input",
                "type": "text",
                "option": null, 
            },
            "notes" : {
                "tag": "input",
                "type": "text",
                "option": null, 
            },
            "total_stuff" : {
                "tag": "input",
                "type": "text",
                "option": null, 
            },
        }
    // console.log('users',users)
    // console.log('lendings',lendings)
        const inputRestoration = {
            "user_id" : {
                "tag": "select",
                "type": "select",
                "option": User
            },
            "lending_id" : {
                "tag": "select",
                "type": "select",
                "option": lending
            },
            "total_good_stuff" : {
                "tag": "input",
                "type": "text",
                "option": null
            },
            "total_defec_stuff" : {
                "tag": "input",
                "type": "text",
                "option": null
            },
            "date_time" : {
                "tag": "input",
                "type": "datetime-local",
                "option": null
            },
        };
    
        const titleModal = 'Lending'
        const titleModalRes = 'Restoration';
    
        const buttons = [
            "create",
            "trash",
            "edit",
            "delete"
        ]
    
        const tdColumn = {
            "stuff": "name",
            "user": "username",
            "date_time": null,
            "name": null,   
            "notes": null,
            "total_stuff": null,
            "restoration":"id"
        }
    
        return (
            <Case>
                <Table 
                        headers={headers} 
                        data={lending} 
                        endpoint={endpointModal} 
                        identitasColumn={columnIdentitasDelete} 
                        inputData={inputData} 
                        titleModal={titleModal} 
                        opsiButton={buttons} 
                        columnForTd={tdColumn} 
                        inputRestoration={inputRestoration}
                        titleModalRes={titleModalRes}
                />
                
          </Case>
          )
    }
    
