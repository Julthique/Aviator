import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.150.1-r75e9MvYwn7pBFuUt6Gu/mode=imports,min/optimized/three.js';
import immeuble1 from './immeuble1.js';
import immeuble2 from './immeuble2.js';
import immeuble3 from './immeuble3.js';
import "../version 2/index.html"
function Batiments() {
        
        // Ajout des Immeubles sur la planéte
        const batiment1 = immeuble1();
        batiment1.position.set(-160,-85,0);
        batiment1.rotateY(-Math.PI/2);
        planete.add(batiment1);

        const batiment2 = immeuble1();
        batiment2.position.set(160,-85,0);
        batiment2.rotateY(Math.PI/2);
        planete.add(batiment2);
        
        const batiment3 = immeuble1();
        batiment3.position.set(160,85,0);
        batiment3.rotateY(Math.PI/2);
        planete.add(batiment3);

        const batiment4 = immeuble1();
        batiment4.position.set(-160,85,0);
        batiment4.rotateY(-Math.PI/2);
        planete.add(batiment4);

        const batiment5 = immeuble1();
        batiment5.position.set(160,0,-85);
        batiment5.rotateY(Math.PI/2);
        batiment5.rotateZ(Math.PI/2);
        planete.add(batiment5);

        const batiment6 = immeuble1();
        batiment6.position.set(-160,0,-85);
        batiment6.rotateY(-Math.PI/2);
        batiment6.rotateZ(Math.PI/2);
        planete.add(batiment6);

        const batiment7 = immeuble1();
        batiment7.position.set(160,0,85);
        batiment7.rotateY(Math.PI/2);
        batiment7.rotateZ(-Math.PI/2);
        planete.add(batiment7);

        const batiment8 = immeuble1();
        batiment8.position.set(-160,0,85);
        batiment8.rotateY(-Math.PI/2);
        batiment8.rotateZ(-Math.PI/2);
        planete.add(batiment8); 

        const batiment9 = immeuble1();
        batiment9.position.set(-160,85*Math.cos(Math.PI/6),-50*Math.cos(Math.PI/6));
        batiment9.rotateY(-Math.PI/2);
        batiment9.rotateZ(Math.sin(Math.PI/6));
        planete.add(batiment9);

        const batiment10 = immeuble1();
        batiment10.position.set(-160,50*Math.cos(Math.PI/6),-85*Math.cos(Math.PI/6));
        batiment10.rotateY(-Math.PI/2);
        batiment10.rotateZ(Math.sin(Math.PI/2));
        planete.add(batiment10);

        const batiment11 = immeuble1();
        batiment11.position.set(-160,-50*Math.cos(Math.PI/6),-85*Math.cos(Math.PI/6));
        batiment11.rotateY(-Math.PI/2);
        batiment11.rotateZ(-Math.sin(Math.PI/2));
        planete.add(batiment11);

        const batiment12 = immeuble1();
        batiment12.position.set(-160,-85*Math.cos(Math.PI/6),-50*Math.cos(Math.PI/6));
        batiment12.rotateY(-Math.PI/2);
        batiment12.rotateZ(Math.sin(-Math.PI/6));
        planete.add(batiment12);

        const batiment13 = immeuble1();
        batiment13.position.set(-160,-85*Math.cos(Math.PI/6),50*Math.cos(Math.PI/6));
        batiment13.rotateY(-Math.PI/2);
        batiment13.rotateZ(Math.sin(Math.PI/6));
        planete.add(batiment13);

        const batiment14 = immeuble1();
        batiment14.position.set(-160,-50*Math.cos(Math.PI/6),85*Math.cos(Math.PI/6));
        batiment14.rotateY(-Math.PI/2);
        batiment14.rotateZ(Math.sin(Math.PI/2));
        planete.add(batiment14);

        const batiment15 = immeuble1();
        batiment15.position.set(-160,50*Math.cos(Math.PI/6),85*Math.cos(Math.PI/6));
        batiment15.rotateY(-Math.PI/2);
        batiment15.rotateZ(-Math.sin(Math.PI/2));
        planete.add(batiment15);

        const batiment16 = immeuble1();
        batiment16.position.set(-160,85*Math.cos(Math.PI/6),50*Math.cos(Math.PI/6));
        batiment16.rotateY(-Math.PI/2);
        batiment16.rotateZ(Math.sin(-Math.PI/6));
        planete.add(batiment16);

        const batiment17 = immeuble1();
        batiment17.position.set(160,85*Math.cos(Math.PI/6),-50*Math.cos(Math.PI/6));
        batiment17.rotateY(Math.PI/2);
        batiment17.rotateZ(Math.sin(-Math.PI/6));
        planete.add(batiment17);

        const batiment18 = immeuble1();
        batiment18.position.set(160,50*Math.cos(Math.PI/6),-85*Math.cos(Math.PI/6));
        batiment18.rotateY(Math.PI/2);
        batiment18.rotateZ(Math.sin(-Math.PI/2));
        planete.add(batiment18);

        const batiment19 = immeuble1();
        batiment19.position.set(160,-50*Math.cos(Math.PI/6),-85*Math.cos(Math.PI/6));
        batiment19.rotateY(Math.PI/2);
        batiment19.rotateZ(-Math.sin(-Math.PI/2));
        planete.add(batiment19);

        const batiment20 = immeuble1();
        batiment20.position.set(160,-85*Math.cos(Math.PI/6),-50*Math.cos(Math.PI/6));
        batiment20.rotateY(Math.PI/2);
        batiment20.rotateZ(Math.sin(Math.PI/6));
        planete.add(batiment20);

        const batiment21 = immeuble1();
        batiment21.position.set(160,-85*Math.cos(Math.PI/6),50*Math.cos(Math.PI/6));
        batiment21.rotateY(Math.PI/2);
        batiment21.rotateZ(Math.sin(-Math.PI/6));
        planete.add(batiment21);

        const batiment22 = immeuble1();
        batiment22.position.set(160,-50*Math.cos(Math.PI/6),85*Math.cos(Math.PI/6));
        batiment22.rotateY(Math.PI/2);
        batiment22.rotateZ(Math.sin(-Math.PI/2));
        planete.add(batiment22);

        const batiment23 = immeuble1();
        batiment23.position.set(160,50*Math.cos(Math.PI/6),85*Math.cos(Math.PI/6));
        batiment23.rotateY(Math.PI/2);
        batiment23.rotateZ(-Math.sin(-Math.PI/2));
        planete.add(batiment23);

        const batiment24 = immeuble1();
        batiment24.position.set(160,85*Math.cos(Math.PI/6),50*Math.cos(Math.PI/6));
        batiment24.rotateY(Math.PI/2);
        batiment24.rotateZ(Math.sin(Math.PI/6));
        planete.add(batiment24);
}

export default Batiments ;