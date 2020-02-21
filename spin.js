/**
 * @author Jonathan Martel <jmartel@cmaisonneuve.qc.ca>
 * @copyright 2020 Jonathan Martel
 * @license http://www.opensource.org/licenses/mit-license.html  MIT License
 *
*/

class Spinner {

    constructor(param) {
        if (param && param.element) {
            this.insertion = param.element;
        } else {
            this.insertion = document.querySelector("body");
        }

        if (param && param.choix && Array.isArray(param.choix)) {
            this.choix = param.choix;
            this.nombre = param.choix.length;
        } else {
            this.nombre = 11;
        }
        
        this.finAnimation = true;
        this.creerSpin(param.choix);
    }


    creerSpin(choix) {
        let svg = '<svg height="20" width="20" viewBox="0 0 20 20">';
        svg += '<circle r="10" cx="10" cy="10" fill="white" stroke-width="0" stroke="black" />';
        choix.forEach(function (element, i, tableau) {
            svg += '<circle class="pointe" r="5" cx="10" cy="10" fill="transparent" transform="rotate(' + ((-360 / tableau.length) * i - (360 / tableau.length)) + ',10,10)" stroke="' + element.couleur + '" stroke-width="10" stroke-dasharray="calc(' + 100 / tableau.length + ' * 31.42 / 100) 31.42"/>';
        });
        this.insertion.innerHTML = svg;

        let fleche = '<svg class="fleche" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="640.000000pt" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet"> <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>' +
            '<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#000000" stroke-width="100" stroke="white">' +
            '<path d="M5535 5809 c-643 -85 -3337 -1131 -4750 -1844 -608 -307 -785 -443 -785 -602 0 -45 47 -128 98 -174 26 -23 97 -75 157 -115 546 -361 2492 -1261 4145 -1919 934 -371 1467 -549 1690 -562 84 -5 100 -3 140 16 55 27 86 64 102 125 18 69 1 143 -82 361 -126 332 -190 514 -220 632 -17 63 -30 120 -30 127 0 9 14 12 48 10 754 -57 1516 -140 3102 -340 2254 -284 2706 -336 3162 -365 197 -12 309 -5 367 25 47 25 91 78 106 130 35 117 12 211 -165 676 -221 582 -294 889 -293 1245 1 308 30 478 192 1106 85 331 94 455 43 555 -26 51 -56 78 -117 106 -49 22 -58 23 -325 22 -369 -1 -742 -29 -2170 -160 -388 -35 -970 -89 -1295 -119 -991 -91 -1800 -156 -2300 -185 -314 -18 -567 -26 -572 -16 -15 23 13 334 59 661 38 268 43 432 14 485 -56 106 -151 141 -321 119z"/>' +
            '</g>' +
            '</svg>';
        
        this.insertion.innerHTML += fleche;
        let dom_fleche  = document.querySelector(".fleche");
        dom_fleche.addEventListener("animationend", ()=>{
                this.finAnimation = true;
                dom_fleche.classList.remove("rotation");
                document.documentElement.style.setProperty('--rot-debut', this.rot_fin+'deg');

                let deltaAngle = 360/this.nombre;
                let pointe = Math.floor((180-this.rot_fin)/deltaAngle);
                
                if(pointe <0) {
                    pointe = this.nombre - (-1*pointe);
                }
                                
                let msg_choix=document.querySelector(".choix");
                msg_choix.firstElementChild.innerHTML = this.choix[pointe].label;
                msg_choix.classList.add("montrer");
            
                msg_choix.style.animation = 'none';
                msg_choix.offsetHeight; /* trigger reflow */
                msg_choix.style.animation = null; 
            
            
            });
        
        document.querySelector(".roue").addEventListener('click', ()=>{
            if(this.finAnimation){
                this.finAnimation = false;
                this.rot_fin = Math.random()*360;
            
                document.documentElement.style.setProperty('--rot-fin', +(this.rot_fin+3600)+'deg');
                
                dom_fleche.style.animation = 'none';
                dom_fleche.offsetHeight; /* trigger reflow */
                dom_fleche.style.animation = null;     
                
                dom_fleche.classList.add("rotation");
                let msg_choix=document.querySelector(".choix");
                msg_choix.classList.remove("montrer");
            }
            
        });
        document.querySelector(".choix").addEventListener('click', ()=>{document.querySelector(".roue").click()});
    }
    
}



/* Sources
https://seesparkbox.com/foundry/how_to_code_an_SVG_pie_chart
https://svgsilh.com/image/1293400.html
*/