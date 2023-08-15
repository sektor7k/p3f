import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataComponent() {
    const [data, setData] = useState({ ip: '', mac: '' });

    useEffect(() => {
        // Sunucunuzdan veriyi alın
        axios.get('https://www.project3fusion.com/api/endpoint')
            .then(response => {
                setData({
                    ip: response.data.ip,
                    mac: response.data.mac
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <p>IP Address: {data.ip}</p>
            <p>MAC Address: {data.mac}</p>
        </div>
    );
}

export default DataComponent;