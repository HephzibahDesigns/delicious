import {FaPizzaSlice,FaHamburger } from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components'
import React from "react";
import { NavLink } from 'react-router-dom';



function Category() {
  return(
    <List>
      <SLink to={"/cusine/Italian"}  onClick={() => window.reload()} >
        <FaPizzaSlice />
        <h4>Italian</h4>  
      </SLink>

      <SLink to={"/cusine/American"}  onClick={() => window.reload()} >
        <FaHamburger />
        <h4>American</h4>  
      </SLink>

      <SLink to={"/cusine/Thai"}  onClick={() => window.reload()} >
        <GiNoodles />
        <h4>Thai</h4>  
      </SLink>

      <SLink to={"/cusine/Japanese"}  onClick={() => window.reload()} >
        <GiChopsticks />
        <h4>Japanese</h4>  
      </SLink>
  </List>
  )
}

const List = styled.div`
  display: flex; 
  justify-content: center;
   align-items: center;
  margin: 2rem 0rem;
  `

  const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background:linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
      color: white;
      font-size: 0.9rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    svg{
      color: white;
      font-size: 1.6rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      display: flex;
    }

    &.active{
      background : linear-gradient(to right, #f27121, #e94057);
      
      svg{
        color: white;
      }
      h4{
        color: white;
      }
    }
  `;

export default Category;
