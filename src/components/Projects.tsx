import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'motion/react';

const projects = [
    {
        title: 'E-Commerce App',
        description: 'Tienda online con carrito de compras, pagos con Stripe y panel de administración.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#',
        repo: '#',
        category: 'fullstack',
    },
    {
        title: 'Task Manager',
        description: 'App de gestión de tareas con drag & drop, etiquetas y colaboración en tiempo real.',
        tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
        link: '#',
        repo: '#',
        category: 'fullstack',
    },
    {
        title: 'Dashboard Analytics',
        description: 'Panel de métricas con gráficos interactivos, filtros dinámicos y exportación de datos.',
        tags: ['React', 'Recharts', 'REST API'],
        link: '#',
        repo: '#',
        category: 'frontend',
    },
    {
        title: 'Blog con Astro',
        description: 'Blog estático ultrarrápido con Markdown, SEO optimizado y modo oscuro.',
        tags: ['Astro', 'Markdown', 'CSS'],
        link: '#',
        repo: '#',
        category: 'frontend',
    },
    {
        title: 'API REST con Node',
        description: 'API robusta con autenticación JWT, documentación con Swagger y tests con Jest.',
        tags: ['Node.js', 'Express', 'JWT', 'Jest'],
        link: '#',
        repo: '#',
        category: 'backend',
    },
    {
        title: 'CLI Tool',
        description: 'Herramienta de línea de comandos para scaffolding de proyectos Node.js.',
        tags: ['Node.js', 'TypeScript', 'Commander.js'],
        link: '#',
        repo: '#',
        category: 'backend',
    },
];

const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
];

export default function Projects() {
    const [active, setActive] = useState('all');

    const filtered = active === 'all'
        ? projects
        : projects.filter((p) => p.category === active);

    return (
        <section id="proyectos" style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title text-theme">Proyectos</h2>
                    <div className="section-divider"></div>
                </div>

                {/* Filtros */}
                <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActive(cat.key)}
                            className={`btn rounded-pill px-4 ${active === cat.key ? 'btn-primary' : 'btn-outline-secondary'
                                }`}
                            style={active !== cat.key ? { color: 'var(--text-muted)' } : {}}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid de proyectos */}
                <div className="row g-4">
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="col-md-6 col-lg-4 d-flex"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}