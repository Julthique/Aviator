import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.150.1-r75e9MvYwn7pBFuUt6Gu/mode=imports,min/optimized/three.js';

function immeuble2() {
    // Immeuble
    const batiment2 = new THREE.Group();

    const geometry_immeuble = new THREE.BoxGeometry();
    const material_immeuble = new THREE.MeshPhysicalMaterial( { color: 0x888888 } );
    const immeuble = new THREE.Mesh( geometry_immeuble, material_immeuble );
    immeuble.position.set(0,-15,-100);
    immeuble.scale.set(30,45,30);
    batiment2.add(immeuble);
    
    const geometry_fenetre7 = new THREE.BoxGeometry(8,5,0.5);
    const material_fenetre7_allume = new THREE.MeshToonMaterial( { color: 0xffff22 } );
    const material_fenetre7_eteint = new THREE.MeshToonMaterial( { color: 0x000000 } );
    const fenetre7 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_eteint );
    fenetre7.position.set(7,1,-115 );
    batiment2.add(fenetre7);
    const fenetre72 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_allume );
    fenetre72.position.set(-7,1,-115 );
    batiment2.add(fenetre72);
    const fenetre79 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_allume );
    fenetre79.position.set(7,-6,-115 );
    batiment2.add(fenetre79);
    const fenetre710 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_allume );
    fenetre710.position.set(-7,-6,-115 );
    batiment2.add(fenetre710);
    const fenetre711 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_eteint );
    fenetre711.position.set(7,-13,-115 );
    batiment2.add(fenetre711);
    const fenetre712 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_eteint );
    fenetre712.position.set(-7,-13,-115 );
    batiment2.add(fenetre712);
    const fenetre713 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_eteint );
    fenetre713.position.set(7,-20,-115 );
    batiment2.add(fenetre713);
    const fenetre714 = new THREE.Mesh( geometry_fenetre7, material_fenetre7_allume );
    fenetre714.position.set(-7,-20,-115 );
    batiment2.add(fenetre714);

    return batiment2;
}
export default immeuble2 ;