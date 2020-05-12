export default {
    getJobs,
    getContactInfo,
    getFooterInfo,
    query
}

function query() {
    return portfolio;
}
function getJobs() {
    return portfolio.jobs;
};

function getContactInfo() {
    const { whatsapp, phone, email, linkedin } = portfolio.contact;
    return { whatsapp, phone, email, linkedin };
};

function getFooterInfo() {
    return portfolio.contact;
}

const portfolio = {
    jobs: [
        // {
            // _id,
            // title,
            // description,
            // timeRange,
        // }
    ],
    projects: [
        {
            _id: 'JHDJeVJddsdbk',
            title: 'Portfolio',
            description: 'This is My Portfolio, You Will Be Able to Get to Know Me a Little Bit More Before Hiring. This App Created Using React Hooks, Redux and SCSS.',
            imgUrl: 'portfolio',
            tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS'],
            codeUrl: 'https://github.com/NofarPeled/Nofar-Peled-Portfolio',
            webUrl: 'https://nofarpeled.github.io/Nofar-Peled-Portfolio'
        },
        {
            _id: '0jeueeIVJKN',
            title: 'Covid 19 Tracker',
            description: 'This App Will Allow You to Track the Coronavirus Spread in Your Country and all Around the World. This App Created Using React Hooks, Redux & SCSS at the Frontend, and Node JS with Express, MongoDB as the Data Base and Selenium Web Driver to Scape the Data Table from Public Coronavirus Tracker Website at the Backend.',
            imgUrl: 'covid-19',
            tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS', 'NodeJS', 'ExpressJS', 'Selenium WebDriver', 'MongoDB'  ],
            codeUrl: 'https://github.com/NofarPeled/covid-19-tracker',
            webUrl: 'https://covid-19-tracker-np.herokuapp.com'
        }, 
        {
            _id: 'fdjkJK5JKDnkfj',
            title: 'Tickets',
            description: 'This App Will Allow You to Add, Remove, Edit and Read Tickets from Ticket List. This App Created Using React Hooks, Redux and SCSS.',
            imgUrl: 'tickets',
            tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS'],
            codeUrl: 'https://github.com/NofarPeled/ticket-app',
            webUrl: 'https://nofarpeled.github.io/ticket-app'
        },
        {
            _id: 'fdjmmokl88787KDnkfj',
            title: 'Ask Em Surveys',
            description: 'This App Will Help You to Create Your Own Surveys, Share Them With the Environment by Link, and See Real Time Results. This App Created Using JavaScript, Vue, VueX,SCSS in the Frontend, and NodeJS, ExpressJS, MongoDB, Socket.IO in the Backend.',
            imgUrl: 'askem',
            tags: ['JavaScript', 'Vue', 'VueX', 'SCSS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.io'],
            codeUrl: 'https://github.com/tomdor123/projAskEm',
            webUrl: 'https://proj-askem.herokuapp.com'
        },
        {
            _id: 'f909jJDHKFD8KJPAj',
            title: 'Weather',
            description: 'This App Will Allow You to Get the Weather in Your Own Country / in Your Destination Country. This App Created Using React, Redux and SCSS. ',
            imgUrl: 'weather',
            tags: ['JavaScript', 'Vue', 'VueX', 'SCSS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.io'],
            codeUrl: 'https://github.com/NofarPeled/Weather-App',
            webUrl: 'https://nofarpeled.github.io/Weather-App'
        },
        {
            _id: 'f909jdioj8JDKJ9kk',
            title: 'Meme Generator',
            description: 'This App Will Allow You Create Meme Download Them, and Send Them to Your Family & Friends. This App Created Using React, Redux and SCSS. ',
            imgUrl: 'meme-generator',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            codeUrl: 'https://github.com/StavDorkam119/Sprint-2-Meme-Generator',
            webUrl: 'https://stavdorkam119.github.io/Sprint-2-Meme-Generator'
        },
    ],
    technologies: [
        {
            _id: '0jeueULz6HEAAFd',
            title: 'JavaScript',
            imgUrl: 'javascript',
        },
        {
            _id: 'jjkK8wjJ9eIVJKN',
            title: 'HTML',
            imgUrl: 'html',
        }, 
        {
            _id: 'YDDy9ucbbaOUpHc', 
            title: 'CSS',
            imgUrl: 'css',
        },
        {
            _id: 'mcv1pQAC0R89YZa',
            title: 'SASS',
            imgUrl: 'sass',
        },
        {
            _id: '71XqPpg0U60pihm',
            title: 'Vue',
            imgUrl: 'vue',
        }, 
        {
            _id: 'USQvUmlfAp7Pora', 
            title: 'VueX',
            imgUrl: 'vuex',
        }, 
        {
            _id: 'aDRLCxs3JTW1q0R',
            title: 'React',
            imgUrl: 'react',
        }, 
        {
            _id: '0DwtrKG01LsIIA5',
            title: 'Redux',
            imgUrl: 'redux', 
        },
        {
            _id: 'N0se2lzyRqvAqem',
            title: 'NodeJs',
            imgUrl: 'node',
        }, 
        {
            _id: 'AyLXqhwV5PQsgRY', 
            title: 'MongoDB',
            imgUrl: 'mongo',
        }, 
        {
            _id: 'We0iePEGAUhCXax', 
            title: 'Python',
            imgUrl: 'python',
        },     
        {
            _id: 'slflofPEGAUh230f', 
            title: 'Photoshop',
            imgUrl: 'photoshop',
        },
        {
            _id: 'f8jlmw7JDJKif8x', 
            title: 'Mac OS X',
            imgUrl: 'macosx',
        },
        {
            _id: '8JDKJ8mlkfhq5', 
            title: 'Windows',
            imgUrl: 'windows',
        }
    ],
    skills: [
        {
            _id: 'We0iePEGgj94uu',
            title: 'Frontend',
            imgUrl: 'frontend.png',
            description: 'Creating Single Page Apps with HTML, SCSS, JavaScript (Vanilla-ES10), Vue & Vuex or React & Redux'
        },
        {
            _id: 'We0iePEGgj94dld',
            title: 'Backend',
            imgUrl: 'backend.png',
            description: 'Creating the Server Side of the Apps using Nodejs and Express'
        },
        {
            _id: 'WwdlklEGgj94uu',
            title: 'Responsive',
            imgUrl: 'responsive.png',
            description: 'Designing Your Website to Look Perfect in Both Mobile & Desktops with Media Queries'
        },
        {
            _id: 'We0iedlfj95du',
            title: 'Design',
            imgUrl: 'design.png',
            description: 'Designing Your Website Using SCSS with Flexbox, Grid etc'
        },
        {
            _id: 'W9dmv6aK94uu',
            title: 'Database',
            imgUrl: 'database.png',
            description: 'Creating Databases in MongoDB, with Dynamic Queries'
        },
        {
            _id: 'g8jdKFMF9kkf',
            title: 'Security',
            imgUrl: 'security.png',
            description: 'Secure Your User Information Usign JWT for Authentication'
        }
    ],
    about: {
        title: 'About Nofar',
        description: 'Dedicated and efficient full stack web developer, Passionate about building web applications, UI&UX and learn about best practices. Certified for both frontend & backend technologies. Seeking to learn & improve my skills as a full stack web developer / frontend web developer by learning from more seasoned developers the best code practices.',
        imgUrl: 'nofar',
    },
    contact: {
        whatsapp: {
            imgUrl: 'whatsapp-black.png',
            footerIcon: 'fab fa-whatsapp',
            link: 'https://wa.me/+972528967707'
        },
        phone: { 
            imgUrl: 'smartphone-black.png',
            footerIcon: 'fas fa-mobile',
            link: 'tel:0528967707'
        },
        email: {
            imgUrl: 'email-black.png',
            footerIcon: 'fas fa-envelope',
            link: 'mailto:nofarpeled4@gmail.com'
        },
        linkedin: {
            imgUrl: 'linkedin-black.png',
            footerIcon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/nofar-peled-3392b8159/'
        },
        github: {
            footerIcon: 'fab fa-github',
            link: 'https://github.com/NofarPeled'
        },
        facebook: {
            footerIcon: 'fab fa-facebook-f',
            link: 'https://www.facebook.com/nofarpeled4'
        }
    }
}