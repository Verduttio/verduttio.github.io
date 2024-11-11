import React from 'react';
import {NextUIProvider, Spacer} from '@nextui-org/react';
import Header from './components/Header';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import './App.css';
import Contact from "./components/Contact";

const App: React.FC = () => {
    return (
        <NextUIProvider>
            <div className="app-container">
                <Header />
                <Spacer y={2} />
                <Technologies />
                <Projects />
                <Contact/>
            </div>
        </NextUIProvider>
    );
};

export default App;
