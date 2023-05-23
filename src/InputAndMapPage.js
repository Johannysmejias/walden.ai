import React, { useState } from 'react';
import './InputAndMapPage.css';
import { useNavigate } from 'react-router-dom';
import user_icon from './images/user_icon.png';
import logo from './images/walden_icon.png';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import axios from 'axios';

function InputAndMapPage() {
    let navigate = useNavigate();
    const [costValue, setCostValue] = useState([20, 50]);
    const [roiValue, setRoiValue] = useState([20, 50]);
    const [demandValue, setDemandValue] = useState([20, 50]);
    const [newLaw, setNewLaw] = useState(null);

    const handleCostChange = (event, newValue) => {
        setCostValue(newValue);
    };

    const handleRoiChange = (event, newValue) => {
        setRoiValue(newValue);
    };

    const handleDemandChange = (event, newValue) => {
        setDemandValue(newValue);
    };

    const handleNewLawChange = (event) => {
        setNewLaw(event.target.value);
    };

    function handleSuggestionClick() {
        navigate('/suggest');
    }

    const handleSearchClick = () => {
        axios
            .get('https://2d4cy9te88.execute-api.eu-west-1.amazonaws.com/api_test')
            .then((response) => {
                console.log(response.data);
                window.open('https://2d4cy9te88.execute-api.eu-west-1.amazonaws.com/api_test');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const openMenu = Boolean(anchorElMenu);
    const openUser = Boolean(anchorElUser);

    const handleMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElMenu(null);
        setAnchorElUser(null);
    };

    function handleLogout() {
        // Code to handle logout
    }

    const provinces = [
        'Álava',
        'Albacete',
        'Alicante',
        'Almería',
        'Asturias',
        'Ávila',
        'Badajoz',
        'Barcelona',
        'Burgos',
        'Cáceres',
        'Cádiz',
        'Cantabria',
        'Castellón',
        'Ciudad Real',
        'Córdoba',
        'Cuenca',
        'Gerona (Girona)',
        'Granada',
        'Guadalajara',
        'Guipúzcoa (Gipuzkoa)',
        'Huelva',
        'Huesca',
        'Islas Baleares (Baleares)',
        'Jaén',
        'La Coruña (A Coruña)',
        'La Rioja',
        'Las Palmas',
        'León',
        'Lérida (Lleida)',
        'Lugo',
        'Madrid',
        'Málaga',
        'Murcia',
        'Navarra',
        'Orense (Ourense)',
        'Palencia',
        'Pontevedra',
        'Salamanca',
        'Santa Cruz de Tenerife',
        'Segovia',
        'Sevilla',
        'Soria',
        'Tarragona',
        'Teruel',
        'Toledo',
        'Valencia',
        'Valladolid',
        'Vizcaya (Bizkaia)',
        'Zamora',
        'Zaragoza',
    ];

    return (
        <div className="input-and-map-page">
            <AppBar
                position="static"
                style={{ background: 'linear-gradient(to right, #F7F0F5, #D7F75B, #9BE564)' }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: 'black' }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={openMenu}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => navigate('/how-to-use')}>How to</MenuItem>
                    </Menu>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <p className="logo-text" style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
                            walden.ai - pond alpha
                        </p>
                    </Box>
                    <div className="user-container">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            onClick={handleUserMenu}
                            color="inherit"
                        >
                            <img src={user_icon} alt="user icon" style={{ width: 30, height: 30 }} />
                        </IconButton>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openUser}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}>Log out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <div className="content">
                <div className="input-and-map-container">
                    <div className="parameter-input-container">
                        <h2>Parameter input</h2>
                        <div className="parameter-section">
                            <h3>Cost of house purchased</h3>
                            <p>Introduce the range price at which you like to purchase your investment property</p>
                            <div className="slider-container">
                                <Slider
                                    value={costValue}
                                    onChange={handleCostChange}
                                    aria-labelledby="range-slider"
                                    style={{ color: 'grey' }}
                                    minDistance={10}
                                />
                                <span>€ {costValue[0]} - {costValue[1]}</span>
                            </div>
                        </div>
                        <div className="parameter-section">
                            <h3>Expected ROI</h3>
                            <p>Select the expected ROI for your investment</p>
                            <div className="slider-container">
                                <Slider
                                    value={roiValue}
                                    onChange={handleRoiChange}
                                    aria-labelledby="range-slider"
                                    style={{ color: 'grey' }}
                                    minDistance={10}
                                />
                                <span>% {roiValue[0]} - {roiValue[1]}</span>
                            </div>
                        </div>
                        <div className="parameter-section">
                            <h3>Expected demand</h3>
                            <p>In how many weeks do you want to rent your flat?</p>
                            <div className="slider-container">
                                <Slider
                                    value={demandValue}
                                    onChange={handleDemandChange}
                                    aria-labelledby="range-slider"
                                    style={{ color: 'grey' }}
                                    minDistance={10}
                                />
                                <span>Weeks {demandValue[0]} - {demandValue[1]}</span>
                            </div>
                        </div>
                        <div className="parameter-section">
                            <h3>Avoid areas affected by new law</h3>
                            <p>Do you want to exclude areas affected by new law?</p>
                            <div className="checkbox-container">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={newLaw === 'yes'}
                                            onChange={handleNewLawChange}
                                            value="yes"
                                            color="primary"
                                        />
                                    }
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={newLaw === 'no'}
                                            onChange={handleNewLawChange}
                                            value="no"
                                            color="primary"
                                        />
                                    }
                                    label="No"
                                />
                                {newLaw && (
                                    <span>
                    {newLaw === 'yes' ? 'Exclude areas affected by the new laws' : 'Include the areas affected by the new laws'}
                  </span>
                                )}
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            onClick={handleSearchClick}
                            color="primary"
                            style={{ backgroundColor: 'grey', marginLeft: '180px', marginTop: '10px' }}
                        >
                            Search
                        </Button>
                    </div>
                    <div className="map-container">
                        <table style={{ width: '100%' }}>
                            <thead>
                            <tr>
                                <th style={{ width: '50%' }}>Provinces</th>
                                <th style={{ width: '50%' }}>ROI</th>
                            </tr>
                            </thead>
                            <tbody>
                            {provinces.slice(0, 10).map((province) => (
                                <tr key={province}>
                                    <td style={{ fontSize: '16px', padding: '10px' }}>{province}</td>
                                    <td></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Do you want to suggest more parameters?</p>
                <Button
                    variant="contained"
                    onClick={handleSuggestionClick}
                    color="primary"
                    style={{
                        backgroundColor: 'grey',
                        padding: '8px 16px',
                        fontSize: '14px',
                        borderRadius: '5px',
                    }}
                >
                    Suggest more parameters
                </Button>
            </div>
        </div>
    );
}

export default InputAndMapPage;
