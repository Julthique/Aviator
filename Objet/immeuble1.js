import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.150.1-r75e9MvYwn7pBFuUt6Gu/mode=imports,min/optimized/three.js';

function immeuble1() {
    // Immeuble
    const batiment1 = new THREE.Group();

    const geometry_immeuble = new THREE.BoxGeometry();
    const material_immeuble = new THREE.MeshPhysicalMaterial( { color: 0x666666 } );
    const immeuble = new THREE.Mesh( geometry_immeuble, material_immeuble );
    immeuble.position.set(0,0,-100);
    immeuble.scale.set(30,60,30);
    batiment1.add(immeuble);
    
    const geometry_fenetre = new THREE.BoxGeometry(8,5,0.5);
    const material_fenetre_allume = new THREE.MeshToonMaterial( { color: 0xffff22 } );
    const material_fenetre_eteint = new THREE.MeshToonMaterial( { color: 0x000000 } );
    const fenetre = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre.position.set(7,1,-115 );
    batiment1.add(fenetre);
    const fenetre2 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre2.position.set(-7,1,-115 );
    batiment1.add(fenetre2);
    const fenetre3 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre3.position.set(7,8,-115 );
    batiment1.add(fenetre3);
    const fenetre4 = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre4.position.set(-7,8,-115 );
    batiment1.add(fenetre4);
    const fenetre5 = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre5.position.set(7,15,-115 );
    batiment1.add(fenetre5);
    const fenetre6 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre6.position.set(-7,15,-115 );
    batiment1.add(fenetre6);
    const fenetre7 = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre7.position.set(7,22,-115 );
    batiment1.add(fenetre7);
    const fenetre8 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre8.position.set(-7,22,-115 );
    batiment1.add(fenetre8);
    const fenetre9 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre9.position.set(7,-6,-115 );
    batiment1.add(fenetre9);
    const fenetre10 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre10.position.set(-7,-6,-115 );
    batiment1.add(fenetre10);
    const fenetre11 = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre11.position.set(7,-13,-115 );
    batiment1.add(fenetre11);
    const fenetre12 = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre12.position.set(-7,-13,-115 );
    batiment1.add(fenetre12);
    const fenetre13 = new THREE.Mesh( geometry_fenetre, material_fenetre_allume );
    fenetre13.position.set(7,-20,-115 );
    batiment1.add(fenetre13);
    const fenetre14 = new THREE.Mesh( geometry_fenetre, material_fenetre_eteint );
    fenetre14.position.set(-7,-20,-115 );
    batiment1.add(fenetre14);    
    return batiment1;
}

export default immeuble1 ;