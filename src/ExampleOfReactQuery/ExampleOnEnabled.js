import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function ExampleOnEnabled() {
    const [idDetails, setIdDetails] = useState('')
    const API = 'https://jsonplaceholder.typicode.com/users';

    const postData = useQuery({
        queryKey: ['posts'],
        queryFn: () => axios.get(API)
    });

    const postDetails = useQuery({
        queryKey: ['posts', idDetails],
        enabled: postData.isSuccess && postData.data.data.length > 0,
        queryFn: () => axios.get(`https://jsonplaceholder.typicode.com/users/${idDetails}`)
    });

    console.log(idDetails);

    return (
        <div>
            <input placeholder="Please Enter Id" name='id' value={idDetails} type="text" onChange={(e) => { setIdDetails(e.target.value) }} />
            <div>
                {postData.isLoading ? (
                    <div>Loading posts...</div>
                ) : postData.isError ? (
                    <div>Error loading posts</div>
                ) : (
                    postData.data?.data.map((i) => (
                        <div key={i.id}>{i.username}</div>
                    ))
                )}

                {postDetails.isLoading ? (
                    <div>Loading post details...</div>
                ) : postDetails.isError ? (
                    <div>Error loading post details</div>
                ) : (
                    <div>{postDetails.data?.data.username}</div>
                )}
            </div>
        </div>
    );
}
