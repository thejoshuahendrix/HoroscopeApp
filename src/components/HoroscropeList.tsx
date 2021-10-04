import React, { useEffect, useState } from 'react'
import HoroscopeItem from './HoroscopeItem';

interface PropTypes {
    sign?: string,
    day?: string
}
const HoroscropeList = ({sign, day}: PropTypes) => {
    const [data, setData] = useState({ mood: "", color: "", compatibility: "", description: "", lucky_number: "", lucky_time: "" });
    useEffect(() => {
        fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`, {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
                "x-rapidapi-key": "1c3a465c2cmsh06937cc2c430b75p1225c1jsn244bd0d1620c",
            }
        })
            .then(response => {
                response.json().then(data => setData(data));
            })
            .catch(err => {
                console.error(err);
            });
    }, [data])
    return (
        <div>
            <HoroscopeItem 
            mood={data.mood} 
            color={data.color} 
            compatibility={data.compatibility} 
            description={data.description} 
            lucky_number={data.lucky_number} 
            lucky_time={data.lucky_time}
            />
        </div>
    )
}

export default HoroscropeList
