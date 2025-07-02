import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Nav, NavLink, CenterLink, SideLink, NavMenu, MobileMenu } from './NavbarElements';
import { Sling as Hamburger } from 'hamburger-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="navbar">
            <Nav>
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', zIndex: 110 }}>
                    
                </div>
                <NavMenu>
                    <SideLink>
                        <NavLink to="/projects">projects</NavLink>
                    </SideLink>
                    <CenterLink>    
                        <NavLink to="/" end>home</NavLink>
                    </CenterLink>
                    <SideLink>
                        <NavLink to="/resume">resume</NavLink>
                    </SideLink>
                </NavMenu>

                <AnimatePresence>
                    {isOpen && (
                        <MobileMenu initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }}>
                            <NavLink to="/" end onClick={() => setIsOpen(false)}>home</NavLink>
                            <NavLink to="/projects" onClick={() => setIsOpen(false)}>projects</NavLink>
                            <NavLink to="/resume" onClick={() => setIsOpen(false)}>resume</NavLink>
                        </MobileMenu>
                    )}
                </AnimatePresence>
            </Nav>
        </div>
    )
}

export default Navbar