// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Notable Github Repositories",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-poem-radiance-in-the-dark",
        
          title: "Poem - Radiance in the Dark",
        
        description: "A poem personifying the Sun&#39;s rays",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Radiance-in-the-Dark-poem/";
          
        },
      },{id: "news-started-undergrad-studies-at-iit-guwahati",
          title: 'Started undergrad studies at IIT Guwahati!',
          description: "",
          section: "News",},{id: "news-won-3rd-place-at-abstractify-quant-trading-winter-school-iit-delhi",
          title: 'Won 3rd place at Abstractify, Quant Trading Winter School, IIT Delhi!',
          description: "",
          section: "News",},{id: "news-started-tenure-as-the-competitive-programming-head-coding-club-iit-guwahati",
          title: 'Started tenure as the Competitive Programming Head, Coding Club, IIT Guwahati!',
          description: "",
          section: "News",},{id: "news-received-an-swe-internship-offer-from-uipath-for-the-summers-of-2024",
          title: 'Received an SWE internship offer from UiPath for the summers of 2024!',
          description: "",
          section: "News",},{id: "news-won-4th-place-at-correlation-one-s-terminal-2023",
          title: 'Won 4th place at Correlation One’s Terminal 2023!',
          description: "",
          section: "News",},{id: "news-won-gold-medal-at-inter-iit-tech-meet-2023-chennai-read-about-it-here",
          title: 'Won Gold Medal at Inter IIT Tech Meet 2023, Chennai! Read about it...',
          description: "",
          section: "News",},{id: "news-start-my-swe-intership-with-uipath-for-the-next-9-weeks",
          title: 'Start my SWE intership with UiPath for the next 9 weeks!',
          description: "",
          section: "News",},{id: "news-joined-amal-lab-iitg-as-btech-research-student",
          title: 'Joined AMaL Lab, IITG as BTech Research Student!',
          description: "",
          section: "News",},{id: "news-received-a-return-offer-from-uipath-to-join-as-sde-1-in-july-2025",
          title: 'Received a return offer from UiPath to join as SDE-1 in July 2025!...',
          description: "",
          section: "News",},{id: "news-submitted-my-research-thesis-on-the-topic-of-study-of-long-context-llm-capabilities-for-fine-grained-named-entity-recognition-in-indian-languages-see-the-thesis-report-here",
          title: 'Submitted my Research Thesis on the Topic of Study of long-context LLM capabilities...',
          description: "",
          section: "News",},{id: "news-joined-uipath-as-software-engineer-i-in-the-docs-ai-team-under-keerthi-kiran-valathoru",
          title: 'Joined UiPath as Software Engineer I, in the Docs AI team, under Keerthi...',
          description: "",
          section: "News",},{id: "news-received-an-offer-from-meta-to-join-their-london-office-as-an-university-graduate",
          title: 'Received an offer from Meta to join their London office as an University...',
          description: "",
          section: "News",},{id: "news-resigned-from-uipath-as-sde-1-to-join-meta",
          title: 'Resigned from UiPath as SDE-1, to join Meta.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%75%74%61%6D_%73%68%61%72%6D%61%31@%79%61%68%6F%6F.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/g-s01", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/gs01.ig", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/gs01kaggle", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/g-s01", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/31clcht5kfc7bn52r26jcvsvjpvi", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/17264342/ecneics", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
