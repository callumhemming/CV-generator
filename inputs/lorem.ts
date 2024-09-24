import { CVDataType } from "../types";

export const fixture: CVDataType = {
  me: {
    name: "Lorem Ipsum",
    job: "Web Developer",
    statement:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  contact: {
    phone: "00000000000",
    email: "lorem.ipsum@placeholder.com",
    linkedin: "https://linkedin.com/in/lorem-ipsum",
    github: "https://github.com/lorem-ipsum",
  },
  skills: [
    {
      type: "Lorem languages",
      list: ["Lorem", "Ipsum", "Dolor", "Sit"],
    },
    {
      type: "Frameworks/Libraries",
      list: ["Lorem.js", "Ipsum.js", "Dolor Query", "Sit Hook Form", "Amet"],
    },
    {
      type: "Backend",
      list: ["LoremExpress", "IpsumQL", "Dolor-Server", "Sit.js"],
    },
    { type: "Database", list: ["LoremSQL", "IpsumDB"] },
    {
      type: "Tools",
      list: ["Lorem", "Ipsum", "Elit"],
    },
    {
      type: "Ways of working",
      list: ["Lorem methodology", "Ipsum design", "Amet architecture"],
    },
  ],
  experience: [
    {
      date: "Lorem 2022 - Ipsum",
      title: "Dapibus elit @ Lorem Group",
      location: "Lorem City",
      description: [
        {
          isList: false,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        },
        {
          isList: true,
          data: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent libero. Sed cursus ante dapibus diam.",
            "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            "Duis sagittis ipsum. Praesent mauris.",
            "Fusce nec tellus sed augue semper porta.",
            "Mauris massa. Vestibulum lacinia arcu eget nulla.",
          ],
        },
      ],
    },
    {
      date: "Lorem 2021 - Ipsum 2022",
      title: "Praesent libero @ School of Lorem",
      location: "Remote",
      description: [
        {
          isList: false,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          isList: true,
          data: [
            "Praesent libero. Sed cursus ante dapibus diam.",
            "Lorem ipsum dolor sit amet.",
            "Duis sagittis ipsum. Praesent mauris.",
            "Curabitur sodales ligula in libero.",
            "Mauris massa. Vestibulum lacinia arcu eget nulla.",
          ],
        },
      ],
    },
    {
      date: "Lorem 2021 - Ipsum 2021",
      title: "Videographer Intern @ Lorem Ipsum LTD",
      location: "Lorem City",
      description: [
        {
          isList: false,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          isList: true,
          data: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent libero. Sed cursus ante dapibus diam.",
          ],
        },
      ],
    },
    {
      date: "Lorem 2019 - Ipsum 2021",
      title: "Videographer @ Lorem Ipsum Union",
      location: "Lorem City",
      description: [
        {
          isList: false,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Arts: Lorem",
      grade: "Upper Second-Class Honours (2:1)",
      date: "Lorem 2018 - Ipsum 2022",
      location: "Lorem City",
      description: [
        {
          isList: true,
          data: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent libero. Sed cursus ante dapibus diam.",
            "Fusce nec tellus sed augue semper porta.",
            "Mauris massa. Vestibulum lacinia arcu eget nulla.",
          ],
        },
      ],
    },
  ],
  volunteering: [
    {
      title: "Mentor @ School of Lorem",
      description: [
        {
          isList: false,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      title: "Judge @ HackLorem",
      description: [
        {
          isList: false,
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  ],
};
