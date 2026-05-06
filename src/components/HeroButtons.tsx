import { FaWhatsapp, FaDownload } from "react-icons/fa";

/* const phone = "56912345678";
const message = encodeURIComponent(
    "Hola, vi tu portafolio y me gustaría contactarte"
);
const waUrl = `https://wa.me/${phone}?text=${message}`; */

export default function HeroButtons() {
    return (
        <div className="d-flex gap-3 flex-wrap">
            <a
                href="#experiencia"
                className="btn btn-primary btn-lg px-4 rounded-pill"
            >
                Ver experiencia
            </a>

            {/* <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg px-4 rounded-pill d-flex align-items-center gap-2"
                style={{
                    border: "1px solid var(--bg-card-border)",
                    color: "var(--text-primary)",
                    background: "transparent",
                }}
            >
                <FaWhatsapp size={20} color="#25d366" />
                Contáctame
            </a> */}

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