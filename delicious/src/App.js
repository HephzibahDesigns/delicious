import Category from './component/Category';
import Pages from './pages/Pages';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './pages/Search';
import SeachedPage from './pages/SeachedPage';
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      {/* because our category hass links */}
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}> Deliciousss</Logo>
      </Nav>
      <SeachedPage /> 
      <Search />
      <Category />
      </BrowserRouter>
      <Pages /> 
    </div>
  );
}

const Logo = styled(Link)`
 text-decoration:none;
 font-size: 1.5rem;
 font-weight: 400;
 font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
 padding: 4rem 0rem;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 
 svg{
   font-size:2rem;
 }
`;

export default App;
