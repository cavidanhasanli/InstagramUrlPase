function parseUrl(thumbnailUrl){
    p = thumbnailUrl.split("/");
    t = '';
    for(let i=0;i<p.length;i++){
      if(i==2){
        t += p[i].replaceAll('-','--').replaceAll('.','-')+atob('LnRyYW5zbGF0ZS5nb29n')+'/';
      }else{
        if(i != p.length-1){
          t += p[i]+'/';
        }else{
          t += p[i];
        }
      }
    }
    return encodeURI(t)
  }
  parseUrl(thumbnailUrl="Add the link to be processed here")