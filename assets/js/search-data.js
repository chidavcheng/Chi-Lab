// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/chi-lab/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Atomically thin. Infinitely curious.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chi-lab/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chi-lab/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the Chi Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chi-lab/people/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "teaching philosophy and activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chi-lab/teaching/";
          },
        },{id: "nav-news-archive",
          title: "news archive",
          description: "milestones and news of the Chi Lab since October 2023.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chi-lab/news-archive/";
          },
        },{id: "nav-lab-life",
          title: "lab life",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chi-lab/blog/";
          },
        },{id: "post-dan-wu-at-the-sassy-sydney-surfaces-and-soft-stuff-symposium",
        
          title: "Dan Wu at the Sassy Sydney Surfaces and Soft Stuff Symposium!",
        
        description: "Dan presented her research on ion transport and selectivity in anion exchange membranes at the Sassy Sydney Surfaces and Soft Stuff Symposium.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/chi-lab/blog/2026/dan-wu-symposium/";
          
        },
      },{id: "post-farewell-raymond-onwards-to-edinburgh",
        
          title: "Farewell Raymond — onwards to Edinburgh!",
        
        description: "We bid farewell to Raymond Neff as he heads to the University of Edinburgh.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/chi-lab/blog/2026/raymond-neff-farewell/";
          
        },
      },{id: "post-congratulations-dr-jiancheng-ivan-lin",
        
          title: "Congratulations Dr Jiancheng (Ivan) Lin!",
        
        description: "Ivan successfully defended his PhD thesis — the first PhD graduate from the Chi Lab!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/chi-lab/blog/2025/ivan-lin-graduation/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/chi-lab/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/chi-lab/news/announcement_2/";
            },},{id: "news-zhengyao-chen-kairos-joins-the-chi-lab-as-an-mphil-student-welcome-kairos",
          title: 'Zhengyao Chen (Kairos) joins the Chi Lab as an MPhil student. Welcome, Kairos!...',
          description: "",
          section: "News",},{id: "news-david-appointed-deputy-director-of-the-unsw-unesco-centre-for-membrane-science-and-technology",
          title: 'David appointed Deputy Director of the UNSW UNESCO Centre for Membrane Science and...',
          description: "",
          section: "News",},{id: "news-dr-tongxi-lin-joins-the-chi-lab-tongxi-completed-his-phd-in-materials-science-studying-graphene-oxide-membranes-with-prof-rakesh-joshi-we-are-thrilled-to-have-him-on-board-and-look-forward-to-the-exciting-science-ahead-together-welcome-tongxi",
          title: 'Dr. Tongxi Lin joins the Chi Lab! Tongxi completed his PhD in Materials...',
          description: "",
          section: "News",},{id: "news-dr-yuan-yan-joins-the-chi-lab-as-a-postdoctoral-fellow-yuan-completed-his-phd-at-the-university-of-melbourne-we-are-thrilled-to-have-him-on-board-and-look-forward-to-the-exciting-science-ahead-together-welcome-yuan",
          title: 'Dr. Yuan Yan joins the Chi Lab as a Postdoctoral Fellow! Yuan completed...',
          description: "",
          section: "News",},{id: "news-zhouhao-was-awarded-the-2026-hdr-development-and-research-training-grant-drtg-congratulations",
          title: 'Zhouhao was awarded the 2026 HDR Development and Research Training Grant (DRTG). Congratulations!...',
          description: "",
          section: "News",},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/chi-lab/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/chi-lab/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chi-david-cheng-ph-d-a116b743", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=P_d6A68AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8596-1801", "_blank");
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
