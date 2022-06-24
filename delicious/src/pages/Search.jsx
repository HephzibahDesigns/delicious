import React from "react";
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Search() {
 const [search, setSearch] = useState("");
 const navigate = useNavigate();

 const submitHandler = (e) => {
   e.preventDefault();
   navigate("/searched/" + search)
   window.location.reload();
 }


  return (
    <FormStyle onSubmit={submitHandler}>
       <div>
         <FaSearch></FaSearch>
         <input type="text" value={search} onChange={(e) =>{
           setSearch(e.target.value);
         }} />
      </div>
    </FormStyle>
   
  )
}

const FormStyle = styled.form`
   margin: 0rem 10rem;
   justify-content: center;
   align-items: center;
   display: flex;

   div{
    position : relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: block;
   }

   input{
     border: none;
     background:linear-gradient(35deg, #494949, #313131);
     font-size: 1.5rem;
     color: white;
     padding :1rem 3rem;
     border-radius: 3rem;
     outline: none;
   }

   svg{
     top:50%;
     left: 0%;
     position: absolute;
     transform: translate(100%, -50%);
     color: #fff;
     flex-direction: column;
     justify-content: flex-start;
   }
`;

export default Search;
