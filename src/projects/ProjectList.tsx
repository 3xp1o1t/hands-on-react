import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { ProjectProps } from './ProjectModel';

function ProjectList({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid-cols-1 p-4 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="w-full rounded-md bg-rose-700">
          <ProjectCard project={project} />
          <ProjectForm />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
