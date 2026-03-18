// components/Navbar.js - VERSI FINAL DENGAN PERBAIKAN
import React from 'react';
import styled, { withTheme } from 'styled-components';

const Navbar = ({ theme }) => {
  return (
    <StyledWrapper theme={theme}>
      <div className="menu">
        <a href="#home" className="link">
          <span className="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
              <rect width={256} height={256} fill="none" />
              <path d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
            </svg>
          </span>
          <span className="link-title">Home</span>
        </a>
        <a href="#projects" className="link">
          <span className="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
              <rect width={256} height={256} fill="none" />
              <rect x={32} y={48} width={192} height={160} rx={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
              <line x1={160} y1={48} x2={160} y2={208} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
              <line x1={96} y1={48} x2={96} y2={208} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
            </svg>
          </span>
          <span className="link-title">Projects</span>
        </a>
        <a href="#about" className="link">
          <span className="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
              <rect width={256} height={256} fill="none" />
              <circle cx={128} cy={96} r={64} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={16} />
              <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
            </svg>
          </span>
          <span className="link-title">About</span>
        </a>
        <a href="#contact" className="link">
          <span className="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
              <rect width={256} height={256} fill="none" />
              <path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
            </svg>
          </span>
          <span className="link-title">Contact</span>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .menu {
    padding: 0.5rem;
    background-color: ${props => props.theme?.isDarkMode ? '#2d2d2d' : '#ffffff'};
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.075);
    transition: background-color 0.3s ease;
    /* TAMBAHKAN: pastikan tidak ada border atau outline */
    border: none;
    outline: none;
  }

  .link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 50px;
    border-radius: 8px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transform-origin: center left;
    transition: width 0.2s ease-in;
    text-decoration: none;
    color: ${props => props.theme?.isDarkMode ? '#ffffff' : '#333333'};
    /* TAMBAHKAN: hapus background default */
    background: transparent;
    /* TAMBAHKAN: pastikan tidak ada border */
    border: none;
    
    &:before {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0; /* TAMBAHKAN: pastikan dari kiri */
      transform: translateX(100%);
      transition: transform 0.2s ease-in;
      transform-origin: center right;
      background-color: ${props => props.theme?.isDarkMode ? '#444' : '#eee'};
    }

    &:hover,
    &:focus {
      outline: 0;
      width: 130px;

      &:before {
        transform: translateX(0);
      }
      
      .link-title {
        transform: translateX(0);
        opacity: 1;
      }
    }

    svg {
      stroke: ${props => props.theme?.isDarkMode ? '#ffffff' : '#333333'};
      fill: ${props => props.theme?.isDarkMode ? '#ffffff' : '#333333'}; /* TAMBAHKAN untuk fill */
    }
  }

  .link-icon {
    width: 28px;
    height: 28px;
    display: block;
    flex-shrink: 0;
    left: 18px;
    position: absolute;
    /* TAMBAHKAN: pastikan icon di atas */
    z-index: 2;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }

  .link-title {
    transform: translateX(100%);
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
    transform-origin: center right;
    display: block;
    text-align: center;
    text-indent: 28px;
    width: 100%;
    color: ${props => props.theme?.isDarkMode ? '#ffffff' : '#333333'};
    /* TAMBAHKAN: opacity untuk transisi lebih halus */
    opacity: 0;
    font-weight: 500;
  }

  /* TAMBAHKAN: pastikan tidak ada efek kotak aneh saat focus */
  .link:focus-visible {
    outline: none;
  }
`;

export default withTheme(Navbar);