import React, { useState, useEffect } from 'react';
import '../styles/getLocationStyles.css'


export default function GetLocation({ locationFlag, setLocation }) {
    const [isOpen, setIsOpen] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);

    const openPopup = () => {
        setIsOpen(true);
    };
    useEffect(() => {
        let watchId;

        const getLocation = () => {
            if (navigator.geolocation) {
                watchId = navigator.geolocation.watchPosition(
                    (position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    (error) => {
                        setError(error.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        getLocation();

        // Cleanup function to clear the watch when component unmounts
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    }, []); // Empty dependency array ensures the effect runs only once



    const closePopup = () => {
        setLocation(false);
    };

    const handleLocation = () => {
        setIsOpen(true)
    }

    return (
        <div>
            {/* <button onClick={openPopup}>Open Popup</button> */}
            {locationFlag && (
                <div className="popup-overlay">
                    <div className="popup">
                        <span className="close-icon" onClick={closePopup}>x</span>
                        <div className="popup-content">
                            <div>
                                {error && <p>Error: {error}</p>}
                                {latitude && longitude && (
                                    <div>
                                        <div className='popupContent'>Choose your location</div>
                                        <hr></hr>
                                        <div className='signUpContainer' >
                                            <button onClick={() => { handleLocation() }} className='buttonStylesSignUp' style={{ background: '#f0c14b' }}>To See Latitude and Longitude of Your location</button>
                                        </div >
                                        <div style={{
                                            fontSize: '12px',
                                            lineHeight: '19px',
                                            fontFamily: 'Arial,sans-serif', width: '300px'
                                        }}>Select a delivery location to see product availability and delivery options</div>

                                        {
                                            isOpen && <div style={{ padding: '20px 0px' }}>Latitude: {latitude}, Longitude: {longitude}</div>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}