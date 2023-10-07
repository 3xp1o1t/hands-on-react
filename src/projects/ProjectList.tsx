import ProjectCard from './ProjectCard';
import { ProjectProps } from './ProjectModel';

function ProjectList({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="grid grid-cols-4 grid-rows-4 p-4 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="max-w-md mx-auto rounded-md overflow-hidden h-[28rem] flex flex-col bg-rose-700"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
