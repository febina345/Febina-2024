import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.png";
import ImageSix from "../../images/image6.jpg";
import ImageSeven from "../../images/image7.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
    {
        id: 2,
        name: "ToDoApp",
        image: ImageOne,
        link: "https://github.com/febina345/ToDo-App",
    },
    {
        id: 3,
        name: "Netflix-Clone",
        image: ImageTwo,
        link: "https://github.com/febina345/Netflix-Project",
    },
    {
        id: 3,
        name: "Personal Website",
        image: ImageThree,
        link: "https://github.com/febina345/Personal-Website-Febina",
    },
    {
        id: 2,
        name: "E-Learning App",
        image: ImageFour,

        link: "https://github.com/febina345/ELearn-Online-Learning",
    },
    {
        id: 3,
        name: "Shopping cart Website",
        image: ImageFive,
        link: "https://github.com/febina345/Shopping-Cart",
    },
    {
        id: 2,
        name: "Hospital Management System",
        image: ImageSix,
        link: "https://github.com/febina345/Hospital-Management-System",
    },
    {
        id: 2,
        name: "Portfolio",
        image: ImageSeven,
        link: "https://github.com/febina345/Febina-2024",
    },
];

const filterData = [
    {
        filterId: 1,
        label: "All",
    },
    {
        filterId: 2,
        label: "Developement",
    },
    {
        filterId: 3,
        label: "Design",
    },
];




const Portfolio = () => {
    const [filteredValue, setfilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setfilteredValue(currentId)
    }

    function handleHover(index) {
        setHoveredValue(index)
    }
    console.log('===============')
    console.log(hoveredValue)
    console.log('=================')

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue)

    console.log(filteredItems);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="MY PORTFOLIO"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item, i) => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }

                            </li>
                        ))
                    }

                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div
                                className="portfolio__content__cards__item"
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="some pictures related to projects" src={item.image} />
                                    </a>

                                </div>
                                <div className="overlay">

                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    <button>Visit</button>
                                                </a>
                                            </div>
                                        )
                                    }

                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    );
}

export default Portfolio;