import React, { useState } from 'react';
import searchIcon from '../../asserts/searchIcon.svg';
import locationIcon from '../../asserts/locationIcon.svg'
import '../styles/searchStyles.css'


export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div style={{ display: 'flex' }}>
            <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='searchStyles' placeholder='Search Amazon.in' />
            <button style={{ background: '#f0c14b', border: 'none', borderRadius: '0px 4px 4px 0px', width: '42px' }}><img src={searchIcon} alt='searchIcon' width={30} height={30} /></button>
        </div>
    )
}