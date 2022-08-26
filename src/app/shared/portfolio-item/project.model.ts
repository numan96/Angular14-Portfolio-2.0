import { Credentials } from './credentials.model';

export class Project {
  public projectSlug: string;

  public projectName: string;

  public projectDescription: string;

  public projectTech: Array<any>;

  public projectImages: Array<any>;

  public projectVideos?: Array<any>;

  public projectGit?: string;

  public projectLink?: string;

  public projectCredentials?: Credentials;

  constructor(
    projectSlug: string,
    projectName: string,
    projectDescription: string,
    projectTech: Array<any>,
    projectImages: Array<any>,
    projectVideos: Array<any>,
    projectGit: string,
    projectLink: string,
    projectCredentials: Credentials
  ) {
    this.projectSlug = projectSlug;

    this.projectName = projectName;

    this.projectDescription = projectDescription;

    this.projectTech = projectTech;

    this.projectImages = projectImages;

    this.projectVideos = projectVideos;

    this.projectGit = projectGit;

    this.projectLink = projectLink;

    this.projectCredentials = projectCredentials;
  }
}
