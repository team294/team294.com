import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        path: "content/home",
        fields: [
          {
            type: "object",
            name: "intro",
            label: "Intro",
            fields: [
              {
                type: "string",
                name: "prefix",
                label: "Prefix",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
            ],
          },
          {
            type: "object",
            name: "whoWeAre",
            label: "Who We Are",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "body",
                label: "Body",
              },
              {
                type: "object",
                name: "buttons",
                label: "Buttons",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "countdown",
            label: "Countdown",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
              },
            ],
          },
        ],
      },
      {
        name: "join",
        label: "Join",
        path: "content/join",
        fields: [
          {
            type: "object",
            name: "interest",
            label: "Interest",
            fields: [
              {
                type: "object",
                name: "groups",
                label: "Groups",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "string",
                    name: "body",
                    label: "Body",
                  },
                  {
                    type: "string",
                    name: "button",
                    label: "Button",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "questions",
                label: "Questions",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                  },
                  {
                    type: "object",
                    name: "images",
                    label: "Images",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content/about",
        fields: [
          {
            type: "object",
            name: "first",
            label: "FIRST",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "body",
                label: "Body",
              },
            ],
          },
          {
            type: "object",
            name: "subteams",
            label: "Sub-Teams",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "subteams",
                label: "Sub-Teams",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                  },
                  {
                    type: "image",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "body",
                    label: "Body",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "mentors",
            label: "Mentors",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "mentors",
                label: "Mentors",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                  {
                    type: "string",
                    name: "role",
                    label: "Role",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "studentLeads",
            label: "Student Leads",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "leads",
                label: "Leads",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "role",
                    label: "Role",
                  },
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "parentVolunteers",
            label: "Parent Volunteers",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "volunteers",
                label: "Volunteers",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "link",
            label: "Link",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "body",
            label: "Body",
          },
        ],
      },
    ],
  },
});
