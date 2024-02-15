import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import locationIcon from '../../asserts/locationIcon.svg'
import Search from "./search";
import cartIcon from '../../asserts/cartIcon.svg';
import '../styles/headerStyles.css'
import GetLocation from "./getLocation";
import axios from 'axios';
import hambuger from '../../asserts/hambuger.svg'


export default function Header() {
    const [authUser, setAuthUser] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionTwo, setSelectedOptionTwo] = useState('');
    const [locationFlag, setLocation] = useState(false);
    const [selectData, setSelectData] = useState([])
    const Navigate = useNavigate();

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
            Navigate('/')
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen()
        }
    }, [])


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                console.log(res.data, '1111111111')
                setSelectData(res.data)
            })
    }, [])


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleChangeTwo = (event) => {
        setSelectedOptionTwo(event.target.value);
    };


    const handleLocation = () => {
        console.log('clicked')
        // Navigate('/loaction');
        setLocation(true)
    }
    // selectData.map((i) => {
    //     console.log(i, 'selectData')
    // })
    return (
        <div>
            <div className='mainContainer'>

                <div><img src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt='amazonLog' width={100} height={50} /></div>



                <div style={{ display: 'flex' }}>
                    <div><img src={locationIcon} alt='locationIcon' width={30} height={20} /></div>
                    <div>
                        <button style={{ background: 'transparent', border: 'none' }} onClick={() => handleLocation()}>
                            <div style={{
                                color: 'white', fontSize: '13px',
                                lineHeight: '19px',

                                fontFamily: 'Arial,sans-serif'
                            }}>
                                Delivering to Hyderabad 500084
                            </div>
                            <div style={{
                                color: 'white', fontSize: '13px',
                                lineHeight: '19px',
                                fontWeight: '550',
                                fontFamily: 'Arial,sans-serif'
                            }}>Update location
                            </div>
                        </button>


                    </div>

                </div>
                {locationFlag && <GetLocation locationFlag={locationFlag} setLocation={setLocation} />}
                <div style={{ display: 'flex' }} >
                    <div>
                        <select className="dropdownStyles">
                            <option style={{ background: '#E0E0E0' }}>All</option>

                            {selectData.map((i) => {
                                return <option value={i} style={{ background: 'transparent' }}>{i}</option>
                            })

                            }
                        </select>
                    </div>
                    <div  >
                        <Search />
                    </div>
                </div>
                <div >

                    <div style={{
                        color: 'white', fontSize: '13px',
                        lineHeight: '19px',

                        fontFamily: 'Arial,sans-serif'
                    }}>
                        Hello, sign in
                    </div>
                    <div style={{
                        color: 'white', fontSize: '13px',
                        lineHeight: '19px',
                        fontWeight: '550',
                        fontFamily: 'Arial,sans-serif'
                    }}>Account & Lists <select value={selectedOptionTwo} onChange={handleChangeTwo} style={{ width: '18px' }}>
                            <option value="">All</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select></div>
                </div>
                <div >

                    <div style={{
                        color: 'white', fontSize: '13px',
                        lineHeight: '19px',

                        fontFamily: 'Arial,sans-serif'
                    }}>
                        Returns
                    </div>
                    <div style={{
                        color: 'white', fontSize: '13px',
                        lineHeight: '19px',
                        fontWeight: '550',
                        fontFamily: 'Arial,sans-serif'
                    }}>& Orders</div>
                </div>
                <div styel={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <img src='https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg' weight={60} height={50} alt='cartIcon' />
                    </div>
                    <div style={{ color: 'white' }}>
                        {/* <div>Card</div> */}
                    </div>


                </div>

                {/* <div>
                    <button onClick={userSignOut}>Sign Out</button>
                </div> */}
            </div >
            <div className="secondHeader">
                <div style={{ display: 'flex' }}>

                    <div><img src={hambuger} alt="hambuger" /></div>
                    <div style={{ marginTop: '3px' }}>All</div>

                </div>
                {
                    selectData.map((i) => {
                        return <span style={{ padding: '10px' }}>{i}</span>
                    })
                }
            </div>
        </div>
    )
}