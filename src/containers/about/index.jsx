import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="PROFILE"
                icon={<BsInfoCircleFill size={40} />}
            />

        </section>
    );
}

export default About;
