import CssIcon from "../Icons/Css";
import ExpressIcon from "../Icons/Express";
import GitIcon from "../Icons/Git";
import HtmlIcon from "../Icons/Html";
import JavascriptIcon from "../Icons/Javascript";
import Mongodb from "../Icons/Mongodb";
import NextjsIcon from "../Icons/Nextjs";
import NodejsIcon from "../Icons/Nodejs";
import ReactIcon from "../Icons/React";
import TailwindcssIcon from "../Icons/Tailwindcss";
import TypescriptIcon from "../Icons/Typescript";
import ViteIcon from "../Icons/Vite";

export function Technologies() {
  const tech = [
    {
      id: 1,
      name: "HTML",
      icon: <HtmlIcon fill={"#D84924"} />,
    },
    {
      id: 2,
      name: "CSS 3",
      icon: <CssIcon fill={"#2449D8"} />,
    },
    {
      id: 3,
      name: "Javascript",
      icon: <JavascriptIcon fill={"#EAD41C"} />,
    },
    {
      id: 4,
      name: "Typescript",
      icon: <TypescriptIcon fill={"#2F72BC"} />,
    },
    {
      id: 5,
      name: "React",
      icon: <ReactIcon fill={"#5CCFEE"} />,
    },
    {
      id: 6,
      name: "Nextjs",
      icon: <NextjsIcon />,
    },
    {
      id: 7,
      name: "Vite",
      icon: <ViteIcon />,
    },
    {
      id: 8,
      name: "Tailwid css",
      icon: <TailwindcssIcon />,
    },
    {
      id: 9,
      name: "Nodejs",
      icon: <NodejsIcon fill={"#4F9640"} />,
    },
    {
      id: 10,
      name: "Express",
      icon: <ExpressIcon />,
    },
    {
      id: 11,
      name: "Mongo Db",
      icon: <Mongodb />,
    },
    {
      id: 12,
      name: "Git",
      icon: <GitIcon />,
    },
  ];
  return (
    <>
      <ul>
        {tech.map((tec) => {
          return (
            <li key={tec.id}>
              <div>
                {tec.icon}
                <span>{tec.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
