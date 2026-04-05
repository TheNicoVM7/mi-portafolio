import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiDjango, SiJavascript, SiHtml5, SiCss, SiGitlab, SiGithub, SiBootstrap, SiPostman } from "react-icons/si";
import { TbBrandAstro } from "react-icons/tb";

const skills = [
    { icon: <SiHtml5 color="#e34f26" />, name: "HTML5" },
    { icon: <SiCss color="#1572b6" />, name: "CSS3" },
    { icon: <SiJavascript color="#f7df1e" />, name: "JavaScript" },
    { icon: <SiBootstrap color="#7952b3" />, name: "Bootstrap" },
    { icon: <FaReact color="#61dafb" />, name: "React" },
    { icon: <TbBrandAstro color="#ff5d01" />, name: "Astro" },
    { icon: <SiTypescript color="#3178c6" />, name: "TypeScript" },
    { icon: <FaGitAlt color="#f05032" />, name: "Git" },
    { icon: <SiGitlab color="#fc6d26" />, name: "GitLab" },
    { icon: <SiGithub color="#888" />, name: "GitHub" },  // #888 para que se vea en modo claro
    { icon: <FaPython color="#3776ab" />, name: "Python" },
    { icon: <SiDjango color="#092e20" />, name: "Django" },
    { icon: <img src="/images/drf.svg" width="40" height="40" alt="DRF" />, name: "Django REST" },
    { icon: <FaNodeJs color="#68a063" />, name: "Node.js" },
    { icon: <SiExpress color="#888" />, name: "Express" },
    { icon: <FaDatabase color="#c74634" />, name: "OracleDB" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { icon: <SiMongodb color="#4db33d" />, name: "MongoDB" },
    { icon: <FaDocker color="#2496ed" />, name: "Docker" },
    { icon: <FaFigma color="#f24e1e" />, name: "Figma" },
    { icon: <SiPostman color="#ff6c37" />, name: "Postman" },
];

export default function SkillIcons() {
    return (
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="d-flex flex-column align-items-center gap-2"
                    style={{ width: "70px" }}
                >
                    <div style={{ fontSize: "2.5rem" }}>{skill.icon}</div>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    );
}