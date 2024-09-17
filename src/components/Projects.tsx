import React from 'react';
import { Spacer } from '@nextui-org/react';
import {
    SiSpringboot,
    SiCsharp,
    SiFlutter,
    SiDart,
    SiCplusplus,
    SiPython,
    SiDjango,
    SiDotnet,
    SiDocker, SiHeroku, SiUbuntu
} from 'react-icons/si';
import {FaJava} from 'react-icons/fa';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'My Movie Book',
            description: 'Full stack app offering management of your favorite movies',
            technologies: [<FaJava size={24} key="java" />, <SiSpringboot size={24} key="csharp" />, <SiDocker size={24} key="csharp" />, <SiHeroku size={24} key="csharp" />],
            link: 'https://github.com/Verduttio/My-movie-book'
        },
        {
            title: 'Resource Management System',
            description: 'Comprehensive resource management system for companies. Supports Google OAuth2',
            technologies: [<FaJava size={24} key="java" />, <SiSpringboot size={24} key="springboot" />, <SiDocker size={24} key="docker" />, <SiUbuntu size={24} key="heroku" />],
            link: 'https://github.com/Verduttio/Dominican-studentate-system'
        },
        {
            title: 'Distributed Tracing',
            description: 'Basic backend movie app based on microservices architecture to show the logic of distributed tracing',
            technologies: [<FaJava size={24} key="java" />, <SiSpringboot size={24} key="springboot" />, <SiDocker size={24} key="docker" />],
            link: 'https://github.com/Verduttio/Distributed-tracing-in-Java'
        },
        {
            title: 'Gyms Management App',
            description: 'Full stack app offering management of your gyms. Tech in .NET and Blazor. Java version in Spring Boot available on Gitlab',
            technologies: [<SiCsharp size={24} key="csharp" />, <SiDotnet size={24} key="csharp" />, <FaJava size={24} key="csharp" />, <SiSpringboot size={24} key="csharp" />],
            link: 'https://github.com/Verduttio/Gyms-management-app'
        },
        {
            title: 'Exam timer',
            description: 'Exam timer helps to manage time during an exam or a test. It shows the remaining time for each exercise. With this app, you will fully make of your time',
            technologies: [<SiFlutter size={24} key="java" />, <SiDart size={24} key="dart"/> ],
            link: 'https://github.com/Verduttio/Exam-timer'
        },
        {
            title: 'Spaceflight simulator',
            description: 'Basic spaceflight simulator.\n' +
                '\n' +
                'Build your own rocket and launch it. During the flight you can control rocket\'s angle, engines power and even separate stages',
            technologies: [<SiCplusplus size={24} key="c++" />, <SiDocker size={24} key="docker" />],
            link: 'https://github.com/Verduttio/Spaceflight-simulator'
        },
        {
            title: 'Airport management system',
            description: 'Very simple boarding system for airports',
            technologies: [<SiPython size={24} key="java" />, <SiDjango size={24} key="csharp" />],
            link: 'https://github.com/Verduttio/airport-management-system',
        },
    ];

    return (
        <div>
            <h2>My projects</h2>
            <Spacer y={1} />
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="card" key={index} onClick={() => {window.open(project.link);}}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                            {project.technologies}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
