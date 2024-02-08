import { UsesListItem } from "@/components";

export const uses: {
  section: string,
  data: UsesListItem[]
}[] = [
  {
    section: 'Workstation',
    data: [
      {
        title: "13” MacBook Pro, M1 Pro, 8GB RAM (2020)",
        content:
          "I'm using a 13-inch MacBook Pro from 2020 with an M1 chip and 8 GB of RAM. The transition has also been smooth. I no longer have performance concerns, and the 13-inch M1 MacBook Pro meets all my development needs with efficiency and simplicity",
     
      }
    ]
  },
  {
    section: 'Development tools',
    data: [
      {
        title: "Postman",
        content:
          "The best tool to handle restful APIs. I have several collections in my Postman. It is very easy to work as a team, share collections and keep several APIs properly organized.",
     
      },
      {
        title: "DBeaver Community Edition",
        content:
          "Free and very complete solution for my day-to-day work with databases. I confess that I started using DBeaver again recently. Before I used DataGrip, which remains my all-time favorite.",
     
      },
      {
        title: "VS Code",
        content:
          "The best IDE I have ever used. I have many extensions to improve my productivity in the projects I work on. I can program in several languages, back-end, front-end or mobile projects. VS Code is my favorite.",
     
      }
    ]
  },
  {
    section: 'Design',
    data: [
      {
        title: "Figma",
        content:
          "Figma is the tool I use for prototyping, drawing ideas and documenting design systems for my projects.",
     
      }
    ]
  },
  {
    section: 'Productivity',
    data: [
      {
        title: "Todoist",
        content:
          "Todoist is my favorite task manager. I have been using it for months and I have never had any problems. I have several projects, with several tasks, and I can manage everything perfectly.",
     
      }
    ]
  }
];
