import ProjectList from './ProjectList';
import { data } from './ProjectModel';

function ProjectsPage() {
  return <ProjectList projects={data} />;
}

export default ProjectsPage;
