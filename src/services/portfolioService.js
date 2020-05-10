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
            _id: '0jeueeIVJKN',
            title: 'Covid 19 Tracker',
            description: 'This App Will Allow You to Track the Coronavirus Spread in Your Country and all Around the World. This App Created Using React Hooks, Redux & SCSS at the Frontend, and Node JS with Express, MongoDB as the Data Base and Selenium Web Driver to Scape the Data Table from Public Coronavirus Tracker Website at the Backend.',
            imgUrl: 'covid-19',
            tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS', 'NodeJS', 'ExpressJS', 'Selenium WebDriver', 'MongoDB'  ],
            codeUrl: 'https://github.com/NofarPeled/covid-19-tracker',
            webUrl: 'https://covid-19-tracker-np.herokuapp.com/'
        },
        {
            _id: 'JHDJeVJddsdbk',
            title: 'Portfolio',
            description: 'This is My Portfolio, You Will Be Able to Get to Know Me a Little Bit More Before Hiring. This App Created Using React Hooks, Redux and SCSS.',
            imgUrl: 'portfolio',
            tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS'],
            codeUrl: 'https://github.com/NofarPeled/Nofar-Peled-Portfolio',
            webUrl: 'https://nofarpeled.github.io/Nofar-Peled-Portfolio'
        },
    ],
    technologies: [
        {
            _id: '0jeueULz6HEAAFd',
            title: 'JavaScript',
            icon: 'fab fa-js',
        },
        {
            _id: 'jjkK8wjJ9eIVJKN',
            title: 'HTML',
            icon: 'fab fa-html5',
        }, 
        {
            _id: 'YDDy9ucbbaOUpHc', 
            title: 'CSS',
            icon: 'fab fa-css3-alt',
        },
        {
            _id: 'mcv1pQAC0R89YZa',
            title: 'SASS',
            icon: 'fab fa-sass',
        },
        {
            _id: 'N0se2lzyRqvAqem',
            title: 'NodeJs',
            icon: 'fab fa-node',
        }, 
        {
            _id: 'AyLXqhwV5PQsgRY', 
            title: 'MongoDB',
            icon: 'fas fa-database',
        }, 
        {
            _id: '71XqPpg0U60pihm',
            title: 'Vue',
            icon: 'fab fa-vuejs',
        }, 
        {
            _id: 'USQvUmlfAp7Pora', 
            title: 'VueX',
            icon: 'fab fa-vuejs',
        }, 
        {
            _id: 'aDRLCxs3JTW1q0R',
            title: 'React',
            icon: 'fab fa-react',
        }, 
        {
            _id: '0DwtrKG01LsIIA5',
            title: 'Redux',
            icon: 'fab fa-react', 
        },
        {
            _id: 'KsQtYIyjuyMxSmn', 
            title: 'MVC',
            icon: 'fas fa-sitemap',
        }, 
        {
            _id: 'rh48M0G2RIJQymV',
            title: 'Responsive Design',
            icon: 'fas fa-mobile-alt',
        }, 
        {
            _id: 'We0iePEGAUhCXax', 
            title: 'Python',
            icon: 'fab fa-python',
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
        description: 'Dedicated and efficient full stack web developer, Passionate about building web applications, UI&UX and learn about best practices.  \n certified for both frontend & backend technologies. \n Seeking to learn & improve my skills as a full stack web developer / frontend web developer by learning from more seasoned developers the best code practices.',
        imgUrl: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p320x320/12011274_10206858285849701_1242790494503518292_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_oc=AQlUPUSCI2Y5tetl952GATSh4c5F92qh7KK--Hulg6cbPKVdkC3uEWtwRVw13gx3hKE&_nc_ht=scontent-frx5-1.xx&_nc_tp=6&oh=e33c21ac939830658a339c427cfcb3e6&oe=5EB54C92'
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