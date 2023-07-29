import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.150.1-r75e9MvYwn7pBFuUt6Gu/mode=imports,min/optimized/three.js';

function immeuble3() {
    // Immeuble
    const batiment3 = new THREE.Group();

    const geometry_immeuble3 = new THREE.BoxGeometry();
    const material_immeuble3 = new THREE.MeshPhysicalMaterial( { color: 0xa6a6a6 } );
    const immeuble3 = new THREE.Mesh( geometry_immeuble3, material_immeuble3 );
    immeuble3.position.set(0,0,-100);
    immeuble3.scale.set(30,70,30);
    batiment3.add(immeuble3);
    
    const geometry_fenetre9 = new THREE.BoxGeometry(8,5,0.5);
    const material_fenetre9_allume = new THREE.MeshToonMaterial( { color: 0xffff22 } );
    const material_fenetre9_eteint = new THREE.MeshToonMaterial( { color: 0x000000 } );

    const fenetre915 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_eteint );
    fenetre915.position.set(7,29,-115 );
    batiment3.add(fenetre915);
    const fenetre916 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre916.position.set(-7,29,-115 );
    batiment3.add(fenetre916);
    const fenetre9 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre9.position.set(7,1,-115 );
    batiment3.add(fenetre9);
    const fenetre92 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre92.position.set(-7,1,-115 );
    batiment3.add(fenetre92);
    const fenetre93 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre93.position.set(7,8,-115 );
    batiment3.add(fenetre93);
    const fenetre94 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre94.position.set(-7,8,-115 );
    batiment3.add(fenetre94);
    const fenetre95 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_eteint );
    fenetre95.position.set(7,15,-115 );
    batiment3.add(fenetre95);
    const fenetre96 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_eteint );
    fenetre96.position.set(-7,15,-115 );
    batiment3.add(fenetre96);
    const fenetre97 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre97.position.set(7,22,-115 );
    batiment3.add(fenetre97);
    const fenetre98 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_eteint );
    fenetre98.position.set(-7,22,-115 );
    batiment3.add(fenetre98);
    const fenetre99 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre99.position.set(7,-6,-115 );
    batiment3.add(fenetre99);
    const fenetre910 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_eteint );
    fenetre910.position.set(-7,-6,-115 );
    batiment3.add(fenetre910);
    const fenetre911 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre911.position.set(7,-13,-115 );
    batiment3.add(fenetre911);
    const fenetre912 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre912.position.set(-7,-13,-115 );
    batiment3.add(fenetre912);
    const fenetre913 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_allume );
    fenetre913.position.set(7,-20,-115 );
    batiment3.add(fenetre913);
    const fenetre914 = new THREE.Mesh( geometry_fenetre9, material_fenetre9_eteint );
    fenetre914.position.set(-7,-20,-115 );
    batiment3.add(fenetre914);
    return batiment3;
}
export default immeuble3;