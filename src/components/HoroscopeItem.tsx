import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
text-align: left;
width: 70vw;
margin-right: 30%;
margin-left: 5%;
padding: 2rem;
`
const Item = styled.div`
  padding: 2rem;
  margin:20px;
`
const HoroscopeItem = ({mood,color,compatibility,description,lucky_number,lucky_time}: PropTypes) => {
    return (
        <Card>
            <Item><strong>Mood:</strong> {mood}</Item>
            <Item><strong>Color: </strong>{color}</Item>
            <Item><strong>Compatible With: </strong>{compatibility}</Item>
            <Item><strong>Horoscope: </strong>{description}</Item>
            <Item><strong>Lucky # :</strong>{lucky_number}</Item>
            <Item><strong>Lucky Time: </strong>{lucky_time}</Item>
        </Card>
    )
}
interface PropTypes {
    mood: string,
    color: string,
    compatibility: string,
    description: string,
    lucky_number: string,
    lucky_time: string

}
export default HoroscopeItem
