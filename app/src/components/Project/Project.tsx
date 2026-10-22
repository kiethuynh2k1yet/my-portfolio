import ImgProject from "./Components/ImgProject/ImgProject";
import TitleProject from "./Components/TitleProject/TitleProject";
import {Body, Container, Title, Desc} from "./StylesProject";
import { projects } from "../../Data/DataProject";


function Project() {
  return (
          <Container>
            <Title>My Recent Work</Title>
            <Desc>Selected Projects</Desc>
            {projects.map((item, index) => (
              <Body key={index}>
                {item.project[0].image && <ImgProject image={item.project[0].image} />}
                <TitleProject projects={item.project} />
              </Body>
            ))}
          </Container>
  )
}

export default Project;