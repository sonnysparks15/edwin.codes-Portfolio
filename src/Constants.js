import { Document, Page } from 'react-pdf';
import R_Projects from "./Assets/Projects/r-plain.svg";
import C_Projects from "./Assets/Projects/c-plain.svg";
import Csh_Projects from "./Assets/Projects/csharp-plain.svg";
import matlab_Projects from "./Assets/Projects/matlab-original.svg";
import python_Projects from "./Assets/Projects/python-original-wordmark.svg";
import js_Projects from "./Assets/Projects/javascript-plain.svg";



export const PROJECTS = [
  {
    image: R_Projects,
    name: "R Projects",
    technologyUsed: "R, R Studio",
    url: "",
  },
  {
    image: Csh_Projects,
    name: "C# Projects",
    technologyUsed: "C#, Jetbrains Rider, Visual Studio",
    url: "https://github.com/sonnysparks15/C-Scripts",
    target: true,
  },
  {
    image: matlab_Projects,
    name: "Matlab Projects",
    technologyUsed: "Matlab",
    url: "/matlabproject",
    target: false,
  },
  {
    image: python_Projects,
    name: "Python Projects",
    technologyUsed: "Python, Jetbrains PyCharm, Jupiter",
    url: "",
    target: false,
  },
  {
    image: C_Projects,
    name: "C/C++ Projects",
    technologyUsed: "C/C++, CLion, Code Blocks",
    url: "https://github.com/sonnysparks15/C-Scripts",
    target: true,
  },
  {
    image: js_Projects,
    name: "JavaScript Projects",
    technologyUsed: "ReactJs, JavaScript, Jetbrains Webstorm",
    url: "/",
    target: false,
  }
];

export const SKILLS = [
  { name: ".NET Development",initialRating: 4 },
  { name: "SQL Integration", initialRating: 3 },
  { name: "JavaScript", initialRating: 4 },
  { name: "R Studio", initialRating: 5 },
  { name: "Reactjs", initialRating: 3 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Python", initialRating: 5 },
  { name: "C/C++", initialRating: 4 },
  { name: "C#", initialRating: 5 },
  { name: "React Strap", initialRating: 3 },
  { name: "Autodesk Suite", initialRating: 4 },
  { name: "Machine Learning", initialRating: 5 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "R Studio", "JetBrains Suite", "Linux", "Parallels"]
