import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <div className="mr-48 mt-24 flex w-full flex-col lg:mt-32 lg:w-1/2">
            <h3 className="text-text-light mb-6 font-bold">ABOUT</h3>
            <div className="flex flex-col gap-2">
                <p>
                    I'm a developer passionate about building complex, useful,
                    and robust systems. The most meaningful work I do lies at
                    the intersection of usability, performance, and complexity.
                    I love to build things that are both beautiful and
                    functional, and I'm always looking for new challenges to
                    tackle.
                </p>
                <p>
                    Currently, I'm a software engineer at
                    <a
                        href="https://www.redroverk12.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-light"
                    >
                        {' Red Rover'}
                    </a>
                    , where I help resolve real-time technical issues for
                    clients. So far in my role I've worked with several teams to
                    improve our triage process, reduce spend on third-party
                    tools, and improve our developer experience.
                </p>
                <p>
                    In the past, I've had the privilege to work with a small
                    team of developers on a project in the
                    <a
                        href="https://adventures.polaris.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-light"
                    >
                        {' outdoor recreation '}
                    </a>
                    industry. This project involved building a web application
                    that allows users to book outdoor adventures, manage their
                    reservations, and communicate with our team. I was
                    responsible for improving the testing suite of the
                    application, managing several significant refactors, and
                    increasing observability of the system. I significantly
                    improved our ability to surface and resolve issues in
                    production, and I was able to reduce the number of issues in
                    our backlog by more than 80% over the course of a few
                    months.
                </p>
                <p>
                    In college, I was able to work on several research projects
                    including using machine learning to
                    <a
                        href="https://digitalcommons.liberty.edu/research_symp/2021/posters/63/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-light"
                    >
                        {' predict the energy consumption '}
                    </a>
                    of university campuses and
                    <a
                        href="https://github.com/kolton-musgrove/honors-thesis"
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-light"
                    >
                        {' my honors thesis '}
                    </a>
                    which involved multiple machine learning models in
                    conjunction with each other to improve the efficiency of
                    their predictions.
                </p>
                <p>
                    I have experience with a variety of technologies, including
                    React, Remix, Node.js, Python, Go, and Rust. I'm always
                    looking to learn new things and improve my skills. I enjoy
                    working with teams to solve complex problems and build great
                    products.
                </p>
                <p>
                    In my free time, I enjoy spending time with my wife, reading
                    non-fiction, spending time outdoors, and playing card games.
                </p>
            </div>

            {/* TODO Experience Section: highlights of work experience, focusing on react and Remix */}
            <div className="flex gap-2"></div>

            {/* TODO Projects Section: highlights of personal projects, focusing on Python, ML, Go, or Rust */}
            <div className="flex gap-2"></div>

            {/* TODO Skills Section: highlights of technical skills, focusing on React, Remix, and Node */}
            <div className="flex gap-2"></div>

            {/* TODO Contact Section: email, phone, and social media links */}
            <div className="flex gap-2"></div>
        </div>
    )
}
