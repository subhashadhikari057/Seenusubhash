import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'subhashadhikari057@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Subhash, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/subhashadhikari057' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/subhash-adhikari-045018305/l',
    },
    { name: 'instagram', url: 'https://www.instagram.com/seenu.subhash' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Motion',
            icon: '/logo/framer-motion.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Spring Boot',
            icon: '/logo/spring.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
            name: 'Redis',
            icon: '/logo/redis.png',
            size: 50,
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
        {
            name: 'Swagger',
            icon: '/logo/swagger.svg', 
            
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Shopit',
        slug: 'shopit',
        liveUrl: 'https://shopitnepal.com/',
        year: 2026,
        description: `
      ShopIt is a backend-focused full-stack e-commerce application featuring scalable APIs, secure authentication, and robust data models that power real-world shopping experiences.<br/> <br/>

      Key Features:<br/>
      <ul>
      <li>User-friendly e-commerce experience with product browsing, cart management, and secure checkout workflows</li>
      <li>Role-based authentication and authorization supporting both users and administrative operations</li>
      <li>Backend-driven order and inventory management system ensuring reliable data handling and consistency</li>
      <li>Scalable system architecture with clean APIs and database design to support real-world usage and future growth</li>

      </ul><br/>

      Technical Highlights:
      <ul>
      <li>Designed and implemented RESTful APIs to support core e-commerce workflows, including users, products, carts, and orders</li>
      <li>Implemented secure authentication and authorization mechanisms to manage user sessions and protected routes</li>
      <li>Structured relational database models with clear relationships to ensure data integrity and consistency across the system</li>
      <li>Backend-driven business logic handling cart operations, order lifecycle, and transactional workflows</li>
      <li>Clean separation of concerns between frontend and backend, enabling maintainable and scalable system architecture</li>
      <li>Built with scalability and performance in mind, allowing the system to handle real-world usage and future growth</li>

      `,
        role: `
      Backend Developer <br/>
      <ul>
      <li>Primarily responsible for backend development, owning API design, core business logic, and database architecture</li>
      <li>Designed and implemented RESTful APIs to support key e-commerce workflows including users, products, carts, and orders</li>
      <li>Individually owned and developed specific backend modules such as Spin Wheel, Support Ticketing, Bug Reporting, Loyalty Program, Referral System, and Affiliate workflows</li>
      <li>Implemented backend logic for rewards, referrals, and affiliate tracking with a focus on data consistency and scalability</li>
      <li>Collaborated across the full stack where required to ensure clean API integration and smooth end-to-end functionality</li>
      <li>Focused on building a scalable, maintainable system suitable for real-world usage</li>

      </ul>
      `,
        techStack: ['Next.js', 'Nest.Js','PostgresQL', 'Tailwind CSS'],
        thumbnail: '/projects/images/shopit.png',
        longThumbnail: '/projects/images/shopit.png',
        images: [
            '/projects/images/shopit2.png',
            '/projects/images/shopit1.png',
        ],
    },
    {
        title: 'Spring Boot Modular Monolith Boilerplate',
        slug: 'spring-boot-modular-monolith',
        year: 2026,
        sourceCode: 'https://github.com/subhashadhikari057/springboot-modular-monolith-boilerplate',
        description: `Built a production-leaning Spring Boot modular-monolith backend with PostgreSQL (source of truth), Redis (low-latency caching), RabbitMQ, and Mailpit, fully containerized via Docker Compose.

        <br/><br/>
        Implemented secure cookie-based auth (sid/rid) with refresh-token rotation, Redis-first session validation with DB fallback, immediate session revocation on role/status/password changes, RBAC (roles + fine-grained permissions), and separate API surfaces/docs for Admin and Mobile consumers.

        <br/><br/>
        Added reusable Redis-backed rate limiting (policy-based, env configurable), comprehensive audit logging (auth/admin/security events with actor/resource/result/request correlation), paginated audit query APIs for admin and user-self views, and scheduled retention cleanup (batch deletes, cron + TTL configurable).

        <br/><br/>
        Enforced migration-driven schema governance with Flyway baselines, hardened error handling for correct 401/403/429/5xx semantics, and documented frontend integration patterns and engineering standards for scalable team development.
        `,
        role: 'Backend Developer',
        techStack: [
            'Spring Boot',
            'PostgreSQL',
            'Redis',
            'RabbitMQ',
            'Mailpit',
            'Docker Compose',
        ],
        thumbnail: '/projects/thumbnail/spring-boot-modular-monolith.png',
        longThumbnail: '/projects/long/spring-boot-modular-monolith.png',
        images: [
            '/projects/images/spring-boot-modular-monolith-4.png',
            '/projects/images/spring-boot-modular-monolith-1.png',
            '/projects/images/spring-boot-modular-monolith-2.png',
            '/projects/images/spring-boot-modular-monolith-3.png',
        ],
    },
    {
        title: 'Spice Of Bombay',
        slug: 'sob',
        techStack: [
            'Next.js',
            'Nest.Js',
            'PostgresQL',
            'Tailwind CSS',
            'Web-Sockets',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/sob.png',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/thumbnail/sob.png',
            '/projects/images/sob1.png',
            '/projects/images/sob2.png',
        ],
        liveUrl: 'https://spiceofbombay.com/',
        year: 2025,
        description: `SpiceOfBombay is a fully optimized restaurant ordering web application designed to handle real-world food ordering workflows. The platform allows customers to browse menu items, place orders, and track order status, while providing an admin dashboard to manage menus, incoming orders, and order fulfillment.`,
        role: `As the Project Manager in a team of five, I: <br/>
        <li>Led backend development, owning API design, core business logic, and database architecture</li>
        <li>Designed and implemented REST APIs to handle menu management, order placement, and order status workflows</li>
        <li>Integrated frontend and backend layers, ensuring seamless communication through clean, well-structured APIs</li>        <li>Built real-time order updates using WebSockets to synchronize customer and admin dashboards</li>
        <li>Designed database models using Prisma to ensure data consistency across orders, users, and menu items</li>

`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Protozoahost',
        duration: 'Aug 2025 - Present',
    },
    {
        title: 'Backend Developer',
        company: 'Protozoahost',
        duration: 'Jun 2025 - Aug 2025',
    },
];
