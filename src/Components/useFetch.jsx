import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setName] = useState(null);

        useEffect(() => {
            setTimeout(() => {
                fetch(url)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('No data available')
                        }
                        return res.json();
                    })
                    .then(data => {
                        setName(data)
                    })
                    .catch(err => {
                        alert(err.message);
                    })
            }, [1000])
        }, [url]);

        return {data}

}

export default useFetch