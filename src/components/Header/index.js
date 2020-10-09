import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import pages from '../../pages';

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
            background: '#222',
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
                        {pages.map((page, index) => (
                            <li key={index} style={{
                                margin: '0 1rem 0',
                                listStyle: 'none',
                            }}>
                                <Link to={page.path} style={{
                                    textDecoration: 'none',
                                }}>
                                    {page.name}
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