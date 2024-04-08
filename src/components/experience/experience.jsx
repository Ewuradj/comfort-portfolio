import React from 'react'
import './experience.css'



const Experience = () => {
  return (
    <div id='experience' className="container">
    <main className="row">
        <section className="cols">
            <header className="title">
            <h3 className="text-4xl font-semibold">
            Edu<span className="text-cyan-600">cation</span>
        </h3>
            </header>
            <div className="contentss">
                <div className="box">
                    <h4>2024 - 2024</h4>
                    <h3>MEST Africa</h3>
                    <p>Web Development</p>
                </div>
                <div className="box">
                    <h4>2020 - 2020</h4>
                    <h3>Campbridge Center of Excellence</h3>
                    <p>Project Management</p>
                </div>
                <div className="box">
                    <h4>2014 - 2018</h4>
                    <h3>University of Ghana</h3>
                    <p>Bachelor of Arts, Sociology and Philosophy</p>
                </div>
                <div className="box">
                    <h4>2011 - 2014</h4>
                    <h3>Wesley Girls' High School</h3>
                    <p>General Arts</p>
                </div>
            </div>
        </section>
        <section className="cols">
            <header className="title  ">
            <h3 className="text-4xl font-semibold">
            Work<span className="text-cyan-600"> History</span>
        </h3>
            </header>
            <div className="contentss">
                <div className="box">
                    <h4>2024- 2024</h4>
                    <h3>MEST Africa</h3>
                    <h3>Full-Stack Developer</h3>
                    <ul>
                        <li><p>Contributed to a team of four in the development of an agricultural product
                                marketplace website using React.</p></li><br />
                        <li>
                            <p>Participated in guided coding sessions aimed at creating a Todo application utilizing
                                React.</p>
                        </li><br />
                    </ul>
                </div>
                <div className="box">
                    <h4>2023 - 2024</h4>
                    <h3>Hills Universal Dental and Medical Medical Services</h3>
                    <h3>Head of Operations</h3>
                    <ul>
                        <li>
                            <p> Led overall direction, coordination and evaluation of department functions.</p>
                        </li><br />
                        <li>
                            <p> Introduced the partnership program that led to a 45% increase in sales and widened
                                the company's market reach.</p>
                        </li><br />
                    </ul>
                </div>
                <div className="box">
                    <h4>2021 - 2023</h4>
                    <h3>Roluck Technologies</h3>
                    <h3>Technical Assistant</h3>
                    <ul>
                        <li>
                            <p> Coordinated end-to-end delivery of service requests for enhanced business
                                performance.</p>
                        </li><br />
                        <li>
                            <p>Managed supply procurement for optimized inventory management and sales operations.
                            </p>
                        </li><br />
                    </ul>
                </div>
            </div>
        </section>
    </main>
</div>

  )
}

export default Experience