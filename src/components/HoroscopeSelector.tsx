import React, { useState } from 'react'
import HoroscropeList from './HoroscropeList'

const HoroscopeSelector = () => {
    const [sign, setSign] = useState("aquarius");
    const [day, setDay] = useState("today");
    return (
        <div>
            <strong>Sign:</strong> <select
                value={sign}
                onChange={e => setSign(e.currentTarget.value)}
            >
                <option value="aries">Aries</option>
                <option value="taurus">Taurus</option>
                <option value="gemini">Gemini</option>
                <option value="cancer">Cancer</option>
                <option value="leo">Leo</option>
                <option value="virgo">Virgo</option>
                <option value="libra">Libra</option>
                <option value="scorpio">Scorpio</option>
                <option value="sagittarius">Sagittarius</option>
                <option value="capricorn">Capricorn</option>
                <option value="aquarius">Aquarius</option>
                <option value="pisces">Pisces</option>
            </select>
            <br />

            <strong>Day:</strong><select
                value={day}
                onChange={e => setDay(e.currentTarget.value)}
            >
                <option value='yesterday'>Yesterday</option>
                <option value='today'>Today</option>
                <option value='tomorrow'>Tommorow</option>
            </select>
            <HoroscropeList
                sign={sign}
                day={day}
            />
        </div>
    )
}

export default HoroscopeSelector
