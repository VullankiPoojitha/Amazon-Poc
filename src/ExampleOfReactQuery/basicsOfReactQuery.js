import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const POSTS = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
]

// /posts -> ['posts']
// /posts/1 -> ['posts',post.id]
// /posts?authorId -> ['posts',{authorTd: 1}]
// /posts/2/comments -> ['posts',post.id,comments]
// please vsg code if u have any doubt

export default function BasicOfReactQuery() {
    const [apiData, setApiData] = useState('');

    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            axios.get('https://jsonplaceholder.typicode.com/users'),
        // refetchInterval: 1000,
        staleTime: 1000,


    })

    if (postsQuery.isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    if (postsQuery.isError) {
        return (
            <h1>Error</h1>
        )
    }
    console.log(postsQuery.data)
    const handleData = (data) => {
        // return <div>{data}</div>
        setApiData(data)



    }

    console.log(apiData)
    return (
        <>
            {postsQuery.data?.data.map((i) => {
                return (
                    <>
                        <div key={i.id}>{i.email}</div>
                        <button onClick={() => handleData(i.id)}>Check data</button>

                    </>

                )
            })
            }
            {apiData && <div>{apiData}</div>}

        </>
    )
}