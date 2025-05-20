import Project from "../Components/Project"
import {myProjects} from "../constants/index"
const Projects = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {myProjects.map((project) => (
    <Project key={project.id} project={project} />
  ))}
</div>

    </section>
  );
};

export default Projects
