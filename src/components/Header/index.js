import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import routes from '../../routes';

const Header = () => (
    <header style={{
        position: 'relative',
        width: '100%',
        height: '4rem',
    }}>
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 'inherit',
            height: 'inherit',
            fontFamily: "'Exo', sans-serif",
            color: '#fff',
            background: 'red',
            zIndex: 1000,
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <h1 style={{ margin: 0, }}>Count Down</h1>
                <nav>
                    <ul style={{
                        display: 'flex',
                        padding: 0,
                    }}>
                        {routes.map((route, index) => (
                            <li key={index} style={{
                                margin: '0 1rem 0',
                                listStyle: 'none',
                            }}>
                                <Link to={route.path} style={{
                                    textDecoration: 'none',
                                }}>
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);

export default Header; 