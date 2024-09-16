import React from 'react';
import {NextUIProvider, Spacer} from '@nextui-org/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import './App.css';
import Contact from "./components/Contact"; // Dodajemy style globalne

const App: React.FC = () => {
    return (
        <NextUIProvider>
            <div className="app-container">
                <Header />
                <Spacer y={2} />
                {/*<AboutMe />*/}
                <Technologies />
                <Projects />
                <Contact/>
            </div>
        </NextUIProvider>
    );
};

export default App;
