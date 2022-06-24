import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import styled from "styled-components";
import {Link, useParams} from 'react-router-dom'



function Cusine() {

  const [cusine, setCusine] = useState([]);
  let params = useParams();

   const getCusine = async (name) => {
      const getData = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
      const getRecipes = await getData.json();
      console.log(getRecipes.results);
      setCusine(getRecipes.results);
   }

   useEffect(() => {
     getCusine(params.type);
     console.log(params.type);
   },[params.type]);
   

  return(
    <Grid>
      {cusine.map(item => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
          <img src={item.image} alt={item.title} />
          <h4> {item.title} </h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )
  
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;  
`;

const Card = styled.div`
 img {
   width: 100%;
   border-radius: 2rem;
 }
 a {
   text-decoration: none;
 }
 h4{
   text-align: center;
   padding: 1rem;
 }
`;

export default Cusine;
