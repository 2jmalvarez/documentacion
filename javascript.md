## Importar librerias en la terminal de Chrome
```
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
document.head.appendChild(script);
```

## Terminal de Chrome en android
### Agregar como codigo en la url y agregarlo como favoritos con nombre *Terminal*
```
javascript:(function () { 
    var script =  document.createElement('script');
    script.src="//cdn.jsdelivr.net/npm/eruda"; 
    document.body.appendChild(script);
    script.onload = function () { 
        eruda.init() 
    } 
})();
```
