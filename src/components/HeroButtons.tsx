import { FaDownload, FaLinkedin } from "react-icons/fa";

export default function HeroButtons() {
    return (
        <div className="d-flex gap-3 flex-wrap">
            <a
                href="#experiencia"
                className="btn btn-primary btn-lg px-4 rounded-pill"
            >
                Ver experiencia
            </a>

            <a
                href="https://www.linkedin.com/in/nicolas-vidal/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg px-4 rounded-pill d-flex align-items-center gap-2"
                style={{
                    border: "1px solid var(--bg-card-border)",
                    color: "var(--text-primary)",
                    background: "transparent",
                }}
            >
                <FaLinkedin size={20} color="#0a66c2" />
                LinkedIn
            </a>

            <a
                href="/CV_Nicolás_Vidal_2026.pdf"
                download="CV-NicolásVidal.pdf"
                className="btn btn-lg px-4 rounded-pill d-flex align-items-center gap-2"
                style={{
                    border: "1px solid var(--bg-card-border)",
                    color: "var(--text-primary)",
                    background: "transparent",
                }}
            >
                <FaDownload size={16} />
                Descargar CV
            </a>
        </div>
    );
}