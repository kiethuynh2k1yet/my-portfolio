"use client"
import Image from "next/image";

import {Body, Title, Wrapper, ButtonDemo, ButtonView, Link} from "./StylesIconProject";
import { ActivityIcon, GitIcon } from "../../Components/Icons/Icon";
import type { ProjectTechnology } from "../../../Data/DataProject";

type ServiceProps = {
    icons: ProjectTechnology[];
    title: string, 
    linkDemo?: string;
    linkGit?: string;
    linkFrontend?: string;
    linkBackend?: string;
}

function IconProject({icons, title, linkDemo, linkGit, linkFrontend, linkBackend}: ServiceProps){
    return(
        <Wrapper>
            <Title>{title}</Title>
            <Body>
                {icons.map((icon) => (
                    <Image
                        key={icon.name}
                        src={icon.image}
                        alt={icon.name}
                        title={icon.name}
                        width={35}
                        height={35}
                    />
                ))}
            </Body>
            <Body>
                {linkDemo && (
                    <Link href={linkDemo} target="_blank" rel="noopener noreferrer">
                        <ButtonDemo>
                            <ActivityIcon/>
                            Live demo
                        </ButtonDemo>
                    </Link>
                )}
                {linkGit && (
                    <Link href={linkGit} target="_blank" rel="noopener noreferrer">
                        <ButtonView>
                            <GitIcon/>
                            GitHub
                        </ButtonView>
                    </Link>
                )}
                {linkFrontend && (
                    <Link href={linkFrontend} target="_blank" rel="noopener noreferrer">
                        <ButtonView>
                            <GitIcon/>
                            Frontend
                        </ButtonView>
                    </Link>
                )}
                {linkBackend && (
                    <Link href={linkBackend} target="_blank" rel="noopener noreferrer">
                        <ButtonView>
                            <GitIcon/>
                            Backend
                        </ButtonView>
                    </Link>
                )}
            </Body>
        </Wrapper>
    );
}

export default IconProject;