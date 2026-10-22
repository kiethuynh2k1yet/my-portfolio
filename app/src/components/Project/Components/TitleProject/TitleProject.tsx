import { Wrapper} from "./StylesTitleProject";
import IconProject from "../../../Components/IconTitleProject/IconProject";
import type { ProjectItem } from "../../../../Data/DataProject";


type IconProjectsProps = {
  projects: ProjectItem[];
}


function TitleProject({projects}:IconProjectsProps) {
  return (
        <Wrapper>
          {projects.map((item, index) => (
          <IconProject
            key={index}
            icons={item.icons}
            title={item.title}
            linkDemo={item.linkDemo}
            linkGit={item.linkGit}
            linkFrontend={item.linkFrontend}
            linkBackend={item.linkBackend}
          />
      ))}
        </Wrapper>
  )
}

export default TitleProject;