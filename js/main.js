(function(){
  var href = 'css/style_extra.css';
  var exists=false;
  document.querySelectorAll('link[rel="stylesheet"]').forEach(function(l){ if(l.href && l.href.indexOf('style_extra.css')!==-1) exists=true; });
  if(!exists){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel='stylesheet'; link.href=href;
    head.appendChild(link);
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('img').forEach(function(img){
      img.onerror = function(){ this.onerror=null; this.src='images/placeholder.png'; };
    });
  });
})();