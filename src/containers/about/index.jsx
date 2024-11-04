import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate'
import './styles.scss';
import { DiJavascript, DiMongodb, DiGithub } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name",
        value: "Eriyadan Febina",
    },
    {
        label: "Profile",
        value: "Full stack Developer",
    },
    {
        label: "Country",
        value: "Singapore",

    },
    {
        label: "Email",
        value: "febie235235@gmail.com",
    },
    {
        label: "Contact No",
        value: "+6588525587"
    }

];

const jobSummary = 'I am Febina, a full-stack developer with 1 year of experience and a strong foundation in Computer Science. My expertise spans the development of web applications using modern technologies such as React, Node.js, Express, and MongoDB. I have a proven track record of building dynamic, responsive, and user-centered applications, including a Netflix clone and an E-Learning platform inspired by Udemy, both of which showcase my skills in API integration, authentication, and payment processing. Passionate about clean, efficient code and intuitive design, I am committed to delivering high-quality, scalable solutions that enhance user experience.'

const About = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="PROFILE"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3>
                            Full Stack Developer
                        </h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >

                        <h3 className="personalInformationText">
                            Personal Information
                        </h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var( --yellow-theme-main-color )" />
                            </div>
                            <div>
                                < DiMongodb size={60} color="var( --yellow-theme-main-color )" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var( --yellow-theme-main-color )" />
                            </div>
                            <div>
                                <DiJavascript size={60} color="var( --yellow-theme-main-color )" />
                            </div>
                            <div>
                                <DiGithub size={60} color="var( --yellow-theme-main-color )" />
                            </div>
                        </div>
                    </Animate>

                </div>
            </div>

        </section>
    );
}

export default About;
