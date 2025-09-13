import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiFirebase, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

export const techStack = [
    { name: 'HTML', icon: <FaHtml5 />, hoverClass: 'hover:text-[#E34F26]' },
    { name: 'CSS', icon: <FaCss3Alt />, hoverClass: 'hover:text-[#1572B6]' },
    { name: 'JavaScript', icon: <SiJavascript />, hoverClass: 'hover:text-[#F7DF1E]' },
    { name: 'React', icon: <FaReact />, hoverClass: 'hover:text-[#61DAFB]' },
    { name: 'Node.js', icon: <FaNodeJs />, hoverClass: 'hover:text-[#339933]' },
    { name: 'Firebase', icon: <SiFirebase />, hoverClass: 'hover:text-[#FFCA28]' },
    { name: 'Git', icon: <FaGitAlt />, hoverClass: 'hover:text-[#F05032]' },
    { name: 'GitHub', icon: <FaGithub />, hoverClass: 'hover:text-black' },
];

export const skillCategories = [
    {
        title: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TailwindCSS"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "RESTful APIs"]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "Firebase Firestore"]
    },
    {
        title: "Tools & Others",
        skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"]
    }
];