export class ProjectEntity {
    projectId: number;
    projectTitle: string;
    description: string;
  
    constructor(projectId: number, projectTitle: string, description: string){
      this.projectId = projectId;
      this.projectTitle = projectTitle;
      this.description = description;
    }
  }
  