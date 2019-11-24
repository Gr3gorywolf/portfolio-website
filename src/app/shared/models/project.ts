export class Project{
  name:string = "";
  description:string = "";
  logo:string = "";
  portrait:string = "";
  platform:number = 0;
  repository:string = "";
  website:string = "";
  primary_color:string = "";
  accent_color:string = "";
  images:Array<string>=[]
  technologies:Array<string>=[]
  downloadLinks:Array<DownloadData>=[];
}

class DownloadData{
  title:string="";
  link:string="";
}
