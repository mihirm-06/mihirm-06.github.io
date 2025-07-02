import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #f5f5dc;
    font-weight: 400;
    letter-spacing: 0.2rem;
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: 0.4s;
    margin: 0 2rem;
    cursor: pointer;

    &::before 
    {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -0.5rem;
        left: 50%;
        background-color: #f5f5dc;
        transition: all 0.4s;
    }

    &:hover::before 
    {
        width: 100%;
        left: 0;
    }

    &.active
    {
        color: #d2b48c;
        font-weight: 900;
        pointer-events: none;
    }

    &.active::before {
        width: 1rem;
        height: 2px;
        bottom: -0.5rem;
        background-color: #d2b48c;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        position: absolute;
    }


`;

export const CenterLink = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SideLink = styled.div`
    display: flex;
    justify-content: center;
`;
/*
export const Bars = styled(FaBars)`
    display: none;
    color: #f5f5dc;

    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 110;
    }
`;*/

export const NavMenu = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) 
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #0d2a20;
        z-index: 100;
        gap: 2rem;

        a 
        {
            color: #f5f5dc;
            font-size: 1.5rem;
            text-decoration: none;

            &:hover {
            color: #d2b48c;
            }
        }
    }
`;