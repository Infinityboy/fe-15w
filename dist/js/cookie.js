function setCookie(e,o,t){var i=new Date;i.setDate(i.getDate()+t),document.cookie=e+"="+o+";expires="+i}function getCookie(e){for(var o=document.cookie.split("; "),t=0;t<o.length;t++){var i=o[t].split("=");if(i[0]==e)return i[1]}return""}function removeCookie(e){setCookie(e,1,-1)}