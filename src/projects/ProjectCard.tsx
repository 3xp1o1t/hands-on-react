import { ProjectProps } from './ProjectModel';

function formatDescription(description: string) {
  return description.substring(0, 60) + '...';
}
function ProjectCard({ project }: { project: ProjectProps }) {
  const handleEditClick = (project: ProjectProps) => {
    console.log(project);
  };

  return (
    <>
      <img
        src={project.imageUrl}
        alt={project.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 h-[16rem]">
        <h1 className="text-xl font-bold">{project.name}</h1>
        <p className="text-md pt-2">{formatDescription(project.description)}</p>
        <p className="text-xl text-emerald-200 mt-2 pb-2">
          Budget : {project.budget.toLocaleString()}
        </p>
        <button
          type="submit"
          className="mt-auto px-4 py-2 bg-slate-900 text-md font-bold hover:bg-slate-200 hover:text-black rounded"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default ProjectCard;
