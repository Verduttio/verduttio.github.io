import React from 'react';
import { Button, Spacer } from '@nextui-org/react';
import { FaJava, FaStar } from "react-icons/fa";
import {
    SiAssemblyscript,
    SiCplusplus,
    SiCsharp,
    SiDocker,
    SiDotnet,
    SiFlutter,
    SiGithub,
    SiGithubactions,
    SiHaskell,
    SiHeroku,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpringboot,
    SiTypescript
} from "react-icons/si";

const Technologies: React.FC = () => {
    return (
        <div className="align-center">
            <h2>Tech stack</h2>
            <h2><span style={{ display: 'inline-flex', alignItems: 'center' }}><FaStar size={24} key="star" /><FaStar
                size={24} key="star" /><FaStar
                size={24} key="star" /></span></h2>
            <Spacer y={1} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button color="danger" variant="shadow">
                    <FaJava size={24} key="java" /> Java
                </Button>
                <Button color="success" variant="shadow">
                    <SiSpringboot size={24} key="spring" /> Spring Boot
                </Button>
                <Button color="primary" variant="shadow">
                    <SiPostgresql size={24} key="postgresql" /> PostgreSQL
                </Button>
                <Button color="primary" variant="shadow">
                    <SiDocker size={24} key="docker" /> Docker
                </Button>
                <Button className="custom-black-button" variant="shadow">
                    <SiGithub size={24} key="github" /> Github
                </Button>
            </div>
            <Spacer y={2} />

            <h2><span style={{ display: 'inline-flex', alignItems: 'center' }}><FaStar size={24} key="star" /><FaStar
                size={24} key="star" /></span></h2>
            <Spacer y={1} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button color="primary" variant="shadow">
                    <SiReact size={24} key="react" /> React
                </Button>
                <Button color="primary" variant="shadow">
                    <SiTypescript size={24} key="typescript" /> TypeScript
                </Button>
                <Button color="default" variant="shadow">
                    <SiGithubactions size={24} key="githubactions" /> Github Actions
                </Button>
                <Button color="secondary" variant="shadow">
                    <SiHeroku size={24} key="heroku" /> Heroku
                </Button>
                <Button color="warning" variant="shadow">
                    <SiPython size={24} key="python" /> Python
                </Button>
                <Button color="secondary" variant="shadow">
                    <SiCsharp size={24} key="c#" /> C#
                </Button>
                <Button color="secondary" variant="shadow">
                    <SiDotnet size={24} key=".net" /> .NET
                </Button>
                <Button color="primary" variant="shadow">
                    <SiCplusplus size={24} key="c++" /> C++
                </Button>
            </div>
            <Spacer y={2} />

            <h2><span style={{ display: 'inline-flex', alignItems: 'center' }}><FaStar size={24} key="star" /></span></h2>
            <Spacer y={1} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button color="secondary" variant="shadow">
                    <SiHaskell size={24} key="haskell" /> Haskell
                </Button>
                <Button color="default" variant="shadow">
                    <SiAssemblyscript size={24} key="assemblyscript" /> Assembly
                </Button>
                <Button color="primary" variant="shadow">
                    <SiFlutter size={24} key="dart"/> Flutter
                </Button>
            </div>
            <Spacer y={2}/>

        </div>
    );
};

export default Technologies;
