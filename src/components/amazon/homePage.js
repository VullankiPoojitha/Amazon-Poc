import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "./header";
import '../styles/homePageStyles.css';


export default function HomePage() {
    const [authUser, setAuthUser] = useState(null);
    const Navigate = useNavigate();
    const [jeweleryData, setJeweleryData] = useState([]);
    const [electronicsData, setElectronicsData] = useState([]);
    const [menData, setMenData] = useState([]);
    const [womenData, setWomenData] = useState([])
    const gridItemStyle = {
        border: '1px solid #333',
        padding: '10px',
        textAlign: 'center',
        height: '380px'
    };

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
            Navigate('/')
        }).catch((error) => console.log(error))
    }
    // useEffect(() => {
    //     const listen = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setAuthUser(user);
    //         } else {
    //             setAuthUser(null);
    //         }
    //     });

    //     return () => {
    //         listen()
    //     }
    // }, [])


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/jewelery').then((res) => setJeweleryData(res.data))
    }, [])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/electronics?limit=4').then((res) => setElectronicsData(res.data))
    }, [])
    const men = "men's clothing";
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${men}?limit=4`).then((res) => setMenData(res.data))
    }, [])
    const women = "women's clothing"
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${women}?limit=4`).then((res) => setWomenData(res.data))
    }, [])


    console.log(jeweleryData, electronicsData, 'jeweleryData')


    const handleJewelery = () => {
        Navigate('/jeweleryPage')
    }


    const handleElectronic = () => {
        Navigate('/electronicPage')
    }

    const handleMen = () => {
        Navigate('/menPage')

    }


    const handleWomen = () => {
        Navigate('/womenPagePage')

    }
    return (
        <div >
            {/* <Header /> */}

            <div className='girdConatiner'>
                <div style={gridItemStyle}>
                    <div style={{ width: '300px', height: '300px', display: 'flex', flexWrap: 'wrap', paddingLeft: '45px' }}>
                        {
                            jeweleryData.map((i) => {
                                return <div style={{ width: '50%', height: '50%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px', marginTop: '20px' }} onClick={() => handleJewelery()}>
                                    <img src={i.image} alt='jewelery' width={150} height={150} style={{ borderRadius: '20px', paddingTop: '10px', marginTop: '10px' }} />
                                </div>
                            })
                        }

                    </div>

                </div>
                <div style={gridItemStyle}>
                    <div style={{ width: '300px', height: '300px', display: 'flex', flexWrap: 'wrap', paddingLeft: '45px' }} onClick={() => handleElectronic()}>
                        {
                            electronicsData.map((i) => {
                                return <div style={{ width: '50%', height: '50%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px', marginTop: '20px' }}>
                                    <img src={i.image} alt='jewelery' width={150} height={150} style={{ borderRadius: '20px', paddingTop: '10px', marginTop: '10px' }} />
                                </div>
                            })
                        }

                    </div>

                </div>
                <div style={gridItemStyle}>
                    <div style={{ width: '300px', height: '300px', display: 'flex', flexWrap: 'wrap', paddingLeft: '45px' }}>
                        {
                            menData.map((i) => {
                                return <div style={{ width: '50%', height: '50%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px', marginTop: '20px' }} onClick={() => handleMen()}>
                                    <img src={i.image} alt='jewelery' width={150} height={150} style={{ borderRadius: '20px', paddingTop: '10px', marginTop: '10px' }} />
                                </div>
                            })
                        }

                    </div>

                </div>
                <div style={gridItemStyle}>
                    <div style={{ width: '300px', height: '300px', display: 'flex', flexWrap: 'wrap', paddingLeft: '45px' }}>
                        {
                            womenData.map((i) => {
                                return <div style={{ width: '50%', height: '50%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 10px 10px 10px', marginTop: '20px' }} onClick={() => handleWomen()}>
                                    <img src={i.image} alt='jewelery' width={150} height={150} style={{ borderRadius: '20px', paddingTop: '10px', marginTop: '10px' }} />
                                </div>
                            })
                        }

                    </div>

                </div>


            </div>

        </div>
    )
}




{/* <div >
<Header />

<div><img src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" width={100} height={50} /></div>
<div><button onClick={userSignOut}>Sign Out</button></div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
    <div style={gridItemStyle}>  <div style={{ width: '300px', height: '300px', border: '1px solid gray', display: 'flex', flexWrap: 'wrap' }}>
        {
            jeweleryData.map((i) => {
                return <div style={{ width: '50%', height: '50%', border: '1px solid #000', boxSizing: 'border-box' }}>
                    <img src={i.image} alt='jewelery' width={115} height={148} />
                </div>
            })
        }

        <div style={{ width: '50%', height: '50%', border: '1px solid #000', boxSizing: 'border-box' }}>Box 2</div>
        <div style={{ width: '50%', height: '50%', border: '1px solid #000', boxSizing: 'border-box' }}>Box 3</div>
        <div style={{ width: '50%', height: '50%', border: '1px solid #000', boxSizing: 'border-box' }}>Box 4</div>
    </div>

    </div>
    <div style={gridItemStyle}>B</div>
    <div style={gridItemStyle}>C</div>
    <div style={gridItemStyle}>D</div>

</div>

</div> */}