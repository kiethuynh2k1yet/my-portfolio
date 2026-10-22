import { StaticImageData } from "next/image";

import IconHTML from "../public/icons/html.svg";
import IconJavaScript from "../public/icons/javascript.svg";
import IconTypeScript from "../public/icons/typescript.svg";
import IconReactJS from "../public/icons/react.svg";
import IconNextJS from "../public/icons/nextjs.svg";
import IconNodeJS from "../public/icons/nodejs.svg";
import IconNestJS from "../public/icons/nestjs.svg";
import IconCSS from "../public/icons/css.svg";
import IconSCSS from "../public/icons/sass.svg";
import IconGit from "../public/icons/github.svg";
import IconFigma from "../public/icons/figma.svg";
import IconSQLServer from "../public/icons/sql-server.svg";
import IconTypeORM from "../public/icons/typeorm.svg";
import IconJWT from "../public/icons/jwt.svg";
import IconRESTAPI from "../public/icons/rest-api.svg";
import IconStyledComponents from "../public/icons/styled-components.svg";
import IconI18n from "../public/icons/i18n.svg";

import Lesson from "../assets/images/lesson.png";
import Tiktok from "../assets/images/tiktok.png";
import ASM from "../assets/images/asm.png";

export type ProjectTechnology = {
  image: StaticImageData;
  name: string;
};

export type ProjectItem = {
  image?: StaticImageData;
  title: string;
  icons: ProjectTechnology[];
  linkDemo?: string;
  linkGit?: string;
  linkFrontend?: string;
  linkBackend?: string;
};

export type Project = {
  project: ProjectItem[];
};

const technology = (image: StaticImageData, name: string): ProjectTechnology => ({
  image,
  name,
});

export const projects: Project[] = [
  {
    project: [
      { 
        image: Lesson, title: "Lesson", 
        icons: [
          technology(IconHTML, "HTML"),
          technology(IconCSS, "CSS"),
          technology(IconJavaScript, "JavaScript"),
          technology(IconGit, "GitHub"),
          technology(IconFigma, "Figma"),
        ],
        linkDemo: "https://kiethuynh2k1yet.github.io/lesson/",
        linkGit: "https://github.com/kiethuynh2k1yet/lesson",
      },
    ],
  },
  {
    project: [
      { 
        image: Tiktok, title: "Tiktok",
        icons: [
          technology(IconHTML, "HTML"),
          technology(IconSCSS, "SCSS"),
          technology(IconJavaScript, "JavaScript"),
          technology(IconReactJS, "React.js"),
          technology(IconNodeJS, "Node.js"),
        ],
        linkDemo: "https://kiethuynh2k1yet.github.io/tiktok-ui/",
        linkGit: "https://github.com/kiethuynh2k1yet/tiktok-ui",
      },
    ],
  },
  {
    project: [
      { 
        image: ASM,
        title: "Quản lý tài sản hữu hình",
        icons: [
          technology(IconReactJS, "React.js"),
          technology(IconNextJS, "Next.js"),
          technology(IconNestJS, "NestJS"),
          technology(IconTypeScript, "TypeScript"),
          technology(IconSQLServer, "SQL Server"),
          technology(IconTypeORM, "TypeORM"),
          technology(IconJWT, "JWT"),
          technology(IconRESTAPI, "REST API"),
          technology(IconStyledComponents, "Styled-components"),
          technology(IconI18n, "i18n"),
        ],
        linkFrontend: "https://github.com/kiethuynh2k1yet/project-asm-frontend",
        linkBackend: "https://github.com/kiethuynh2k1yet/project-asm",
      },
    ],
  },
];
