export type SkillProps = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const Tech_skills: SkillProps[] = [
  {
    name: "JavaScript",
    src: "/javascript.png",
    width: 65,
    height: 65,
  },
  {
    name: "TypeScript",
    src: "/typescript.png",
    width: 70,
    height: 70,
  },

  {
    name: "C Sharp",
    src: "/csharp.png",
    width: 80,
    height: 80,
  },
  {
    name: "Python",
    src: "/python.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    src: "/java.png",
    width: 100,
    height: 110,
  },
  {
    name: "NextJS",
    src: "/nextjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "GatsbyJS",
    src: "/gatsbyjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "ASP.NET",
    src: "/aspnet.png",
    width: 120,
    height: 120,
  },
  {
    name: "ReactJS",
    src: "/reactjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "PWA",
    src: "/pwa.png",
    width: 110,
    height: 110,
  },
  {
    name: "Redux",
    src: "/reduxjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux-saga",
    src: "/redux-saga.png",
    width: 130,
    height: 130,
  },
  {
    name: "Material UI",
    src: "/materialui.png",
    width: 90,
    height: 90,
  },
  {
    name: "NodeJS",
    src: "/nodejs.png",
    width: 80,
    height: 80,
  },
  {
    name: "ExpressJS",
    src: "/expressjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "Jest",
    src: "/jest.png",
    width: 80,
    height: 80,
  },
  {
    name: "Selenium",
    src: "/selenium.png",
    width: 80,
    height: 80,
  },
  {
    name: "Postman",
    src: "/postman.png",
    width: 80,
    height: 80,
  },
  {
    name: "MySQL",
    src: "/mysql.png",
    width: 80,
    height: 80,
  },
  {
    name: "MongoDB",
    src: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "Firebase",
    src: "/firebase.png",
    width: 55,
    height: 55,
  },
  {
    name: "GraphQL",
    src: "/graphql.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payments",
    src: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Docker",
    src: "/docker.png",
    width: 100,
    height: 100,
  },
];

export const SkillGroups = {
  technologies: {
    list: [
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "ASP.NET",
      "Gatsby",
      "Apollo GraphQL",
    ],
    info: {
      JavaScript:
        "Proficiency advanced topics such as Closures, Scopes, IIFE, Higher-order functions, Async JS, Promises, Event Delegation, Prototypes, Immutability.",
      React:
        "Knowledge of React Ecosystem and built-ins such as Context API, Hooks, React Router, Redux, React Query, React Lazy & Suspense, Apollo Client, Material UI, Tailwind CSS, Styled Components, Framer Motion, React Three Fiber. \nImplemented React-Redux with Redux-Saga and Redux-Thunk middlewares from scratch. Implemented Redux-Toolkit as abstracted solution.\n Implemented Progressive Web App solution checked by Google Lighthouse.",
      TypeScript:
        "Implemented strongly typed redux store internals - sagas, reducers, selectors and actions. Implemented strongly typed firebase utils and react components.",
    },
  },
  backend: {
    list: [
      "C#",
      "Python",
      "Java",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Stripe",
      "OAuth",
      "Docker",
    ],
    info: {
      Python:
        "Experience with CGI, Sockets, Flask. Implemented Data Science solutions with Streamlit and Pandas. Implemented package network tracker. Experience with sql versions: pymysql, sqlite3.",
      ["C#"]:
        "Experience with WinForms, ADO.NET, LINQ. Experience with Unity Game Engine.",
      ["Node.js"]:
        "Implemented web servers, routing, CRUD operations with MongoDB, own authentication using Passport.js, OAuth, Image-to-PDF converter. Implemented task manager command-line interface.",
      Firebase:
        "Implemented Firestore database and Authentication methods, strongly type checked by TypeScript.",
      Java: "Experience with Tomcat server, Servlets and JSP engine.",
    },
  },
  testing: {
    list: [
      "Jest",
      "Enzyme",
      "React Testing Library",
      "Selenium",
      "JUnit",
      "Postman",
    ],
    info: {
      Tests:
        "Experience with Enzyme and Jest. Used modern way - React Testing Library to write unit and snapshot tests for React components.\nUsed Postman for testing CRUD operations with database.",
      Selenium:
        "Experience with automated testing and extracting web apps data in Java, in pair with JUnit.",
    },
  },
  tooling: {
    list: ["Webpack", "Parcel", "Babel"],
    info: {
      Webpack: "Configured loaders with html webpack plugin from scratch.",
      Parcel:
        "Used Parcel as an alternative bundler for rapid development without extensive configurations.",
      Babel:
        "Used Babel for transpiling modern JavaScript and JSX to ensure compatibility with older browsers. Integrated polyfills (core-js, regenerator-runtime) for supporting ES6+ features in legacy environments.",
    },
  },
};
