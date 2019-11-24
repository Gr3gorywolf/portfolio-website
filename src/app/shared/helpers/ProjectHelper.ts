export class ProjectHelper{

  repoName(repo:string):string{
      var splittedRoute = repo.replace("https://github.com/","").split('/');
       return splittedRoute[1];
  }

  repoOwner(repo:string):string{
    var splittedRoute = repo.replace("https://github.com/","").split('/');
     return splittedRoute[0];
  }

  repoNameByRouteLink(url:string):string{
    return url.split("/")[2];
  }

}
