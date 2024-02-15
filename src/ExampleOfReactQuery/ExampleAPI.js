import React, { useEffect, useState } from 'react';

export default function ExampleAPI() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                const temp = res.json()
                return temp
            })
            .then((result) => setData(result)

            )
            .catch((error) => console.log(error))
    }, [])
    return (
        <>
            <div>Hello API</div>
            {
                data?.map((res) => {
                    return (
                        <div>
                            {
                                res.name
                            }
                        </div>
                    )
                }
                )
            }
        </>
    )
}