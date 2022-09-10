import React, { useState, useEffect, /* useContext */ } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button, LangButton } from '../../globalStyles';
/* import { Context } from '../Wrapper' */
/* import { FormattedMessage } from 'react-intl' */
import tableIcon from "./icon.png"

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
} from './Navbar2.elements';

function Navbar2() {

/*     const context = useContext(Context) */

/*     const context = useContext(Context) */

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
   
    const scrollToTop = (e) => {
        e.preventDefault();
        closeMobileMenu();        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        


    }

   const scrollToRoadmapBtn = (e) => {
    e.preventDefault();
    closeMobileMenu();

    document.querySelector("#roadmap").scrollIntoView({behavior: 'smooth'});

  }

/*   const scrollToEarthBtn = (e) =>{
    e.preventDefault();
    closeMobileMenu();    
    document.querySelector("#divEarth").scrollIntoView({behavior: 'smooth'});
  } */

  const scrollToAbout = (e) =>{
    e.preventDefault();
    closeMobileMenu(); 
    window.scrollTo({top:100000000, behavior: 'smooth' });


  }


   const scrollToPixelartCreatorBtn = (e) => {
    e.preventDefault();
    closeMobileMenu();
    document.querySelector("#container").scrollIntoView({behavior: 'smooth'});    
  };

 

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    let username = localStorage.getItem('username')


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/home' onClick={closeMobileMenu}>
                            <img style={{ height: 40, width: 40 }} src={tableIcon} alt="Minting Logo" />

                            MINT YOUR OWN PIXELART 


                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/home' onClick={scrollToTop}>

                                    <h1>Home</h1>

                        {/*             <FormattedMessage
                                        id="navbar.home">./src/components/navbar/Navbar2.js
Module not found: Can't resolve '../Wrapper' in '/home/brate/Desktop/pixelart_creator/react_web3_pixelart_creator/client/src/components/navbar'
                                    </FormattedMessage> */}
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                {
                                    username !== "admin" ?
                                        <NavLinks to='/services' onClick={scrollToPixelartCreatorBtn}>
                                  {/*           <FormattedMessage
                                                id="navbar.services">

                                            </FormattedMessage> */}
                                                <h1>Services</h1>
                                        </NavLinks> : <p> </p>}
                            </NavItem>
                            <NavItem>
                                {
                                    username !== "admin" ?
                                        <NavLinks to='/roadmap' onClick={scrollToRoadmapBtn}>
                               {/*              <FormattedMessage
                                eact-int                id="navbar.products">

                                            </FormattedMessage> */}
                                                <h1>Roadmap</h1>
                                        </NavLinks> : <p></p>}
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/about' onClick={scrollToAbout}>
                {/*                     <FormattedMessage
                                        id="navbar.employeefinder">

                                    </FormattedMessage> */}
                                        <h1>About</h1>
                                </NavLinks>
                            </NavItem>
                {/*             <NavItem>
                                
                                {
                                    username == "admin" ?

                                        <bg to='/adminbooking' onClick={closeMobileMenu}>
                                            <FormattedMessage
                                                id="navbar.adminbooking">

                                            </FormattedMessage>
                                            <h1>KEIN PLAN</h1>
                                        </NavLinks> : <h1></h1>
                                }


                            </NavItem> */}
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/login'>
                                        <Button primary>
                                            {/*                                   <FormattedMessage
                                         id="navbar.login" >

                                        </FormattedMessage> */}
                                            Login

                                        </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/login'>
                                        <Button onClick={closeMobileMenu} fontBig primary>
                                            {/*                                          <FormattedMessage
                                                id="navbar.login">

                                            </FormattedMessage> */}
                                            Login
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>



                            <LangButton /* value={context.locale = "de-DE"} onClick={context.selectLang} */>🇩🇪</LangButton>
                            <LangButton /* value={context.locale = "en-US"} onClick={context.selectLang} */>🇺🇸</LangButton>
                            <LangButton /* value={context.locale = "es-MX"} onClick={context.selectLang} */>🇪🇸</LangButton>
                            <LangButton /* value={context.locale = "ru-RU"} onClick={context.selectLang} */>🇷🇺</LangButton>

{/*                             <button onClick={onSubmit}>adsd</button>
 */}





                        </NavMenu>{/*  */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>


    );
}

export default Navbar2;

