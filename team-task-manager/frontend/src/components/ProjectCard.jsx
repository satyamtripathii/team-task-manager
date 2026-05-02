import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>ID: {project._id}</p>

      <Link to={`/project/${project._id}`}>
        <button>Open</button>
      </Link>
    </div>
  );
}

export default ProjectCard;