import React from 'react';
import { Button, Avatar, Spacer } from '@nextui-org/react';

const Header: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card-header">
                {/* Główny kontener nagłówka */}
                <div className="header-content">
                    {/* Avatar */}
                    <div className="header-avatar">
                        <Avatar
                            alt="Bartłomiej Szwaja"
                            src="./photo-me.jpg"
                            className="w-auto h-auto"
                            isBordered
                        />
                    </div>

                    {/* Tekst i przyciski */}
                    <div className="header-text">
                        <Button
                            color="primary"
                            variant="shadow"
                            onClick={() => {
                                window.open('https://en.wikipedia.org/wiki/Java_(programming_language)');
                            }}
                        >
                            Java / Backend Developer
                        </Button>
                        <h3>Bartłomiej Szwaja</h3>
                        <Button
                            color="warning"
                            variant="shadow"
                            onClick={() => {
                                window.open('https://en.uj.edu.pl/en');
                            }}
                        >
                            Master in Computer Science
                        </Button>
                    </div>
                </div>
            </div>
            <Spacer y={2} />
        </div>
    );
};

export default Header;
