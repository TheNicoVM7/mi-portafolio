import React from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    repo: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card h-100 p-4 d-flex flex-column">
            <h5 className="text-theme fw-bold mb-2">
                {project.title}
            </h5>

            <p
                className="text-theme-muted mb-4"
                style={{ fontSize: "0.9rem" }}
            >
                {project.description}
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span
                        key={`${tag}-${index}`}
                        className="skill-badge"
                        style={{ fontSize: "0.75rem" }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="d-flex gap-2 mt-auto">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary rounded-pill px-3"
                >
                    Demo →
                </a>

                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                    style={{ color: "var(--text-muted)" }}
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;