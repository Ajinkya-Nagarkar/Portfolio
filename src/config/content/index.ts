import { personal } from "./personal";
import { education } from "./education";
import { experience } from "./experience";
import { skills } from "./skills";
import { manualProjects } from "./projects/manual";
import { featuredProjects } from "./projects/featured";
import { githubProjects } from "./projects/github";

export const portfolioData = {
    personal,
    education,
    experience,
    skills,
    featuredProjects,
    projects:[
        ...manualProjects,
        ...githubProjects,
    ]
};