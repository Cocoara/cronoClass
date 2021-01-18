class Crono {
    constructor(crono) {
        this.parentDiv = crono; // ID del DIV que contindrà la nostra aplicació
        var container = document.getElementById(crono); // objecte HTML on inserir la nostra aplicació
        
        // Creació del element div
        var div1 = document.createElement("div"); 
        // Asociem la classe amb el nom 'crono'
        div1.className = "crono";

            var div2 = document.createElement("div"); 
            div2.id = "control";
            
            var startInput = document.createElement("input");
            startInput.className = "start"; 
            // li posem el type button, també podem crear directament el element 'button'
            startInput.type = "button";

            var stopInput = document.createElement("input"); 
            stopInput.className = "stop";
            stopInput.type = "button";

            var restartInput = document.createElement("input"); 
            restartInput.className = "reiniciar";
            restartInput.type = "button";


        // Aqui li diem l'estructura que segueix amb el appendChilds
        container.appendChild(div1);
            div1.appendChild(div2);    
            div1.appendChild(startInput);
            div1.appendChild(stopInput);
            div1.appendChild(restartInput);


        // Aqui li diem que ens referencii a la classe cronometre ja que sino les funcions no farien referencia a res, (al element html pero no serviria de res).
        this.init = this.init.bind(this);
        this.cronometrar = this.cronometrar.bind(this);
        this.escribir = this.escribir.bind(this);
        this.parar = this.parar.bind(this);
        this.reiniciar = this.reiniciar.bind(this);
 
        window.onload = this.init();

        // Referenciem el css per javascript
        var cssId = 'css';
            if (!document.getElementById(cssId))
            {
                var head  = document.getElementsByTagName('head')[0];
                var link  = document.createElement('link');
                link.id   = cssId;
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = 'css.css';
                link.media = 'all';
                head.appendChild(link);
            }
    }


    // Els methodes de la classe Crono

    init(){
        document.querySelector(".start").addEventListener("click",this.cronometrar);
        document.querySelector(".stop").addEventListener("click",this.parar);
        document.querySelector(".reiniciar").addEventListener("click",this.reiniciar);
        this.d = 0;
        this.h = 0;
        this.m = 0;
        this.s = 0;
        document.getElementById("control").innerHTML="00:00:00:00";
    }      
    
    
     cronometrar(){
        this.escribir();
        this.id = setInterval(this.escribir,1000);
        document.getElementsByClassName(".start").removeEventListener("click",this.cronometrar);
    }


    escribir(){
        var dAux, hAux, mAux, sAux , mmAux;
        this.s++;
        if (this.s>59){
            this.m++;this.s=0;
        }
    
        if (this.m>59){
            this.h++;this.m=0;
        }
    
        if (this.h>24){
            this.d++;this.h=0;
        }
    
        if (this.s<10){
            this.sAux="0"+this.s;
        }else{
            this.sAux=this.s;
        }
    
        if (this.m<10){
            this.mAux="0"+this.m;
        }else{
            this.mAux=this.m;
        }
    
        if (this.h<10){
            this.hAux="0"+this.h;
        }else{
            this.hAux=this.h;
        }
    
        if (this.d<10){
            this.dAux="0"+this.d;
        }else{
            this.dAux=this.d;
        }
    
        document.getElementById("control").innerHTML = this.dAux+ ":" + this.hAux + ":" + this.mAux + ":" + this.sAux; 
    }


    parar(){
        clearInterval(this.id);
        document.getElementsByClassName(".start").addEventListener("click",this.cronometrar);
    
    }


    reiniciar(){
        clearInterval(this.id);
        document.getElementById("control").innerHTML="00:00:00:00";
        this.d=0;this.h=0;this.m=0;this.s=0;
        document.getElementsByClassName(".start").addEventListener("click",this.cronometrar);
    }

}
