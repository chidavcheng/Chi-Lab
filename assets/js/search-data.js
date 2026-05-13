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
          description: "study of molecular fluids for resource and energy security",
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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/chi-lab/blog/2024/advanced-images/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/chi-lab/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
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
