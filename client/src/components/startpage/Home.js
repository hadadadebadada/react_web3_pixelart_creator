import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import table from '../../assets/models/android.glb' 
import react from '../../assets/models/react.glb'
import pixel3Dobj1 from '../../assets/models/scene (1).glb'
import pixel3Dobj2 from '../../assets/models/scene (2).glb'
import pixel3Dobj3 from '../../assets/models/scene (3).glb'
import pixel3Dobj4 from '../../assets/models/scene (4).glb'
import pixel3Dobj5 from '../../assets/models/scene (5).glb'
import pixel3Dobj6 from '../../assets/models/scene (6).glb'
import pixel3Dobj7 from '../../assets/models/scene (7).glb'
import pixel3Dobj8 from '../../assets/models/scene (8).glb'
import pixel3Dobj9 from '../../assets/models/scene (9).glb'
import pixel3Dobj10 from '../../assets/models/scene (10).glb'
import pixel3Dobj11 from '../../assets/models/scene (11).glb'

import computer from '../../assets/models/computer.glb'
import map1 from "../../assets/pictures/landingpage/pixelartmap.jpg"
import map2 from "../../assets/pictures/landingpage/pixelartmap2.jpg"

import earthTexture from '../../assets/pictures/landingpage/01-3.jpg'
import earthBump from '../../assets/pictures/landingpage/earthbump1k.jpg'
import earthSpec from '../../assets/pictures/landingpage/earthspec1k.jpg'
import cloudMapTrans from '../../assets/pictures/landingpage/earthcloudmaptrans.jpg'





class Home extends Component {

    state = { width: window.innerWidth, height: window.innerHeight };


    componentDidMount() {



        
        var test;
        var rotateObj2;
        var rotateObj3;
        var rotateObj4;
        var rotateObj5;

        var rotateObj6;

        var camera, scene, renderer;
        var mesh;
        var cloudy;
        var controls;

        //main planet sizes
        let r = 1.5;
        let d = 15;
        let e = 15;

        init();
        animate();

        function init() {

            //erzeugen eines 3js objektes
            renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#earth"), antialias: true, alpha: true });
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFShadowMap;
            renderer.setPixelRatio(window.devicePixelRatio);
            const canvasContainer = document.querySelector('#divEarth');
            renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);


            let aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight
            camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1500);
            camera.position.z = -105;

            scene = new THREE.Scene();


            controls = new OrbitControls(camera, document.querySelector("#earth"));
            controls.target.set(0, 0, 0);
            controls.enableDamping = false;
            controls.enableRotate = true;
            controls.enableZoom = false;
            controls.update();


            const loader = new THREE.TextureLoader();

            loader.setCrossOrigin("true");

            //-----------------PLAIN EARTH-------------------------

            /*  const texture = loader.load( 'https://drive.google.com/uc?export=download&id=16a758OvTovkIz_bilprEDxqj3EAPKoDL' );
             const earthBumpMap = loader.load( 'https://drive.google.com/uc?export=download&id=/14MqoHVKDhKpKkS1porPq8vxdk9853ZXz');
             const earthSpecMap = loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg'); */


            const texture = loader.load(map1); //wird geladen von privatem google drive account
           // const earthBumpMap = loader.load(earthBump);
            const earthSpecMap = loader.load(earthSpec)


            var geometry = new THREE.SphereGeometry(r, d, e);
            var material = new THREE.MeshPhongMaterial({

                map: texture,
               // bumpMap: earthBumpMap,
                specularMap: earthSpecMap,
                bumpScale: 1,
                shininess: 1
            })


            mesh = new THREE.Mesh(geometry, material);
            mesh.rotation.x += 0.5;
            mesh.receiveShadow = true;
            mesh.castShadow = true;
            mesh.layers.set(0);



            //------------------------ATMOSPHERE------------------------------------

            //custom shader material 
            const atmosphericGlow = new THREE.Mesh(
                new THREE.SphereGeometry(r, d, e),
                new THREE.ShaderMaterial(
                    {
                        vertexShader: `
              varying vec3 vertexNormal;
              void main()
              {
                  vertexNormal = normalize(normalMatrix * normal);
                  gl_Position = projectionMatrix*modelViewMatrix * vec4(position, 1.0);
    
              }`,
                        fragmentShader: `
              varying vec3 vertexNormal;
              void main()
              {
                  float intensity = pow(0.7 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);
    
                  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0) * intensity;
              }`,
                        blending: THREE.AdditiveBlending,
                        side: THREE.BackSide
                    }
                )



                //custom shader material

            )

            atmosphericGlow.scale.set(1.1, 1.1, 1.1)


            //----------------------CLOUDS----------------------------------------
            var cloudGeometry = new THREE.SphereGeometry(1.45, d, e);
            const texture2 = new THREE.TextureLoader().load(cloudMapTrans);

            //Cloud Geomtry and Material
            var cloudMaterial = new THREE.MeshBasicMaterial({
                map: texture2,
                transparent: true,
                opacity: 0.3

            });

            cloudy = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloudy.rotation.x -= 0.003;
            cloudGeometry.scale(1.1, 1.1, 1.1);



            //-------------------------------Orbiting test2 -----------------------------------------------

            const GLTFloader = new GLTFLoader();
            let obj = null;

            GLTFloader.setCrossOrigin("true");



            // --------------------------orbiting table--------------------------------------------------------------

            // modelle koennen alternativ von einem google drive account geladen werden

            // GLTFloader.load('https://drive.google.com/uc?export=download&id=1_DDFce6V9xlJ8kJo_eRAZdURPYKGf8wC', function(glb) {
            
            
                test = new THREE.Mesh(cloudGeometry, cloudMaterial);

            GLTFloader.load(pixel3Dobj1, function (glb) {  //smiley

                test = glb.scene;

                glb.scene.scale.set(0.1, 0.1, 0.1)
                glb.scene.position.x = -3;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot2 = new THREE.Object3D();
                mesh.add(orbitingObjPivot2);
                orbitingObjPivot2.add(glb.scene);
            });

            //-------------------------------orbiting pc -----------------------------------------------------
        
            rotateObj2 = new THREE.Mesh();
            GLTFloader.load(pixel3Dobj3, function (glb) {   //pikachu

                rotateObj2 = glb.scene;
                glb.scene.scale.set(0.0001, 0.0001, 0.0001)

                glb.scene.position.x = 3;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot3 = new THREE.Object3D();
                mesh.add(orbitingObjPivot3);
                orbitingObjPivot3.add(glb.scene);
            });


            //python
            rotateObj3 = new THREE.Mesh();

            GLTFloader.load(pixel3Dobj5, function (glb) {  //violet man

                rotateObj3 = glb.scene;
                glb.scene.scale.set(0.04, 0.04, 0.04)
                glb.scene.position.z = -2
                glb.scene.position.x = 0;
                glb.scene.position.y = 2;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot4 = new THREE.Object3D();
                mesh.add(orbitingObjPivot4);
                orbitingObjPivot4.add(glb.scene);
            });

            // react
            rotateObj4 = new THREE.Mesh();

            GLTFloader.load(pixel3Dobj6, function (glb) { //pirat

                rotateObj4 = glb.scene;
                glb.scene.scale.set(0.03, 0.03, 0.03)
                glb.scene.position.z = -2
                glb.scene.position.x = 0;
                glb.scene.position.y = -2;
               // glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot5 = new THREE.Object3D();
                mesh.add(orbitingObjPivot5);
                orbitingObjPivot5.add(glb.scene);
            });

            rotateObj5 = new THREE.Mesh();

            GLTFloader.load(pixel3Dobj9, function (glb) { //owl

                rotateObj5 = glb.scene;
                glb.scene.scale.set(0.005, 0.005, 0.005)
                glb.scene.position.z = 2;
                glb.scene.position.x = 2;
                glb.scene.position.y = 0;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot6 = new THREE.Object3D();
                mesh.add(orbitingObjPivot6);
                orbitingObjPivot6.add(glb.scene);
            });
            rotateObj6 = new THREE.Mesh();

            GLTFloader.load(pixel3Dobj10, function (glb) { //rainbow

                rotateObj6 = glb.scene;
                //glb.scene.scale.set(0.005, 0.005, 0.005)
                glb.scene.position.z = -2;
                glb.scene.position.x = 2;
                glb.scene.position.y = 0;
                glb.scene.rotation.x -= 0.5;
                scene.add(glb.scene);
                var orbitingObjPivot7 = new THREE.Object3D();
                mesh.add(orbitingObjPivot7);
                orbitingObjPivot7.add(glb.scene);
            });

            //-----------------------------PLANET------------------------------

            let planet = new THREE.Object3D();

            planet.add(mesh);
            planet.add(atmosphericGlow);
            planet.add(cloudy);



           // planet.position.z = -20;
           planet.position.z = -94;
            scene.add(planet);

           // camera.lookAt(planet);

           controls.target = planet.position;
/* 
            const tween1 = new TWEEN.Tween({ x: 0, y: 0, z: 200 }).to({
                x: -
                    0, y: 0, z: -94
            }, 2000).onUpdate(function (object) {
                planet.position.set(object.x, object.y, object.z);
            })


            tween1.start();
 */



            var light = new THREE.DirectionalLight(0xffffff, 2);
            light.position.set(0, 1, -250).normalize();
            light.castShadow = true;

            scene.add(light);


           

        }




        function resize() {
            var width = renderer.domElement.clientWidth;
            var height = renderer.domElement.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }



        function animate() {
            resize();
            controls.update();
            
            /* TWEEN.update(); */
           // obj.rotation.x += 0.005;
           test.rotation.y += 0.01;
           test.rotation.x += 0.01;

           rotateObj2.rotation.y += 0.01;
           rotateObj2.rotation.x += 0.01;

           rotateObj3.rotation.y += 0.01;
           rotateObj3.rotation.x += 0.01;

           rotateObj4.rotation.y += 0.01;
           rotateObj4.rotation.x += 0.01;

           rotateObj5.rotation.y += 0.01;
           rotateObj5.rotation.x += 0.01;

           rotateObj6.rotation.y += 0.01;
           rotateObj6.rotation.x += 0.01;

            mesh.rotation.y += 0.005;
            cloudy.rotation.y -= 0.003;
            renderer.render(scene, camera);
            renderer.clearDepth();
            camera.layers.set(0);
            requestAnimationFrame(animate);
        }



        window.addEventListener('resize', this.updateDimensions);


    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };


    render() {
        return (
            <div id='mainDiv'

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#101522'
/*                     height: '800hv'
 */                }}>







                <div>




    {/*                 <p style={{ color: 'green' }}>Window size: {this.state.width} x {this.state.height} </p>
                    <p style={{ color: 'red' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,

                    </p>
                    <p style={{ color: 'red' }}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p style={{ color: 'red' }}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p style={{ color: 'red' }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <p style={{ color: 'red' }}> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

 */}





                </div>








                {this.state.width > 1200 ? (<div id='divEarth'

                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'right',

                        height: '100vh',
                        width: '100vh'

                    }}
                >


                    <canvas id='earth'></canvas>
                </div>) : (

                    <div id='divEarth'


                    >


                        <canvas 
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'right',

                        height: '350px',
                        width: '320px'

                    }} id='earth'></canvas>
                    </div>
                )}






                <div>

                </div>

            </div>


        );
    }
}

export default Home;