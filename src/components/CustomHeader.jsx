import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import CustomButton from './CustomButton';

import "../styling/component/customHeader.styles.scss";

const CustomHeader = ({title, buttonTitle, onClick, size}) => {
  return (
    <div className='custom_header'>
        <div className='image_container'>
            <Link to="home">
                <img src='assets/image/covid_icon.png' alt='covid_logo'/>
                </Link>
        </div>
        <h1>{ title }</h1>
        <div className='button_container'>
            <CustomButton onClick={onClick} size={size}>{buttonTitle}</CustomButton>
        </div>
    </div>
  )
}

export default CustomHeader;