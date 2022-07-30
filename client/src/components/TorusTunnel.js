import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import tableGLB from '../assets/models/computer.glb'
import mario from '../assets/models/mario.glb'

import bowser from '../assets/models/bowser.glb'

import donkey from '../assets/models/donkey.glb'

import * as TWEEN from '@tweenjs/tween.js'

import Texture123 from '../assets/pictures/landingpage/01-3.jpg'

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//https://1stwebdesigner.com/examples-of-three-js-in-action/
class TorusTunnel extends Component {


  state = { width: window.innerWidth, height: window.innerHeight };

  componentDidMount() {
    //     var $container = $('#container');


    const loader = new THREE.TextureLoader();

    loader.setCrossOrigin("true");



    let texture123 = loader.load(Texture123)


    var renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#ca"), antialias: true, alpha: true });
    var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 10000);
    var scene = new THREE.Scene();
    var mouseX = 0, mouseY = 0;


    camera.position.z = 70;


    var light1 = new THREE.AmbientLight(0xffffff, 3);
    light1.position.set(100, 50, 100);
    scene.add(light1);

    // Added that code Implementation from a forked one 
    // https://codepen.io/teddarcuri/pen/jbEbyZ
    // Many Thanks to @teddarcuri
    // Uncomment code below for tunnel steering!
    // You will fly through the walls like in Mario Kart, haha.
    // var windowHalfX = window.innerWidth / 2;
    // var windowHalfY = window.innerHeight / 2;
    // document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    scene.add(camera);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //$container.append(renderer.domElement);
    //document.body.appendChild(renderer.domElement);

    renderer.setPixelRatio(window.devicePixelRatio);
    /*     const canvasContainer = document.querySelector('#divL');
        renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    texture123
        let aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight */
    /*    const controls = new OrbitControls(camera, document.querySelector("#ca"));
       controls.target.set(0, 0, 0);
       controls.enableDamping = false;
       controls.enableRotate = false;
       controls.enableZoom = false;
       controls.update(); */
    /*     document.body.appendChild( renderer.domElement );
     */


    let torusDivContainer = document.querySelector('#torusDiv')
    /* document.querySelector('torusDiv').appendChild(renderer.domElement) */
    torusDivContainer.appendChild(renderer.domElement)

    // 
    /*     window.addEventListener('resize', onWindowResize, false);
     */    /////////////////////////////////////////


   // var normalMaterial = new THREE.MeshNormalMaterial({wireframe:true, color:0xff0000});

   // var normalMaterial = new THREE.MeshStandardMaterial({wireframe:true, color:0xff0000});

/*     const normalMaterial = new THREE.ShaderMaterial({
      wireframe: true,
      vertexShader: `
      void main()	{
        // projectionMatrix, modelViewMatrix, position -> passed in from Three.js
        gl_Position = projectionMatrix
          * modelViewMatrix
          * vec4(position.x, position.y, position.z, 1.0);
      }
      `,
      fragmentShader: `
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,
    }); */
    const uniformData = {
      u_time: {
        type: 'f',
      },
    };

/*     const loader = new THREE.TextureLoader();

    loader.setCrossOrigin("true");

    const texture123 = loader.load(texture123) */


    var normalMaterial = new THREE.MeshPhongMaterial({

        map: texture123,
        // bumpMap: earthBumpMap,
        // specularMap: earthSpecMap,
        bumpScale: 1,
        shininess: 1
    })


     /*  const normalMaterial = new THREE.ShaderMaterial({
      wireframe: false,
      uniforms: uniformData,
      vertexShader: `
      varying vec3 pos;
      uniform float u_time;

      void main()	{
        vec4 result;
        pos = position;

        result = vec4(
          position.x,
          4.0*sin(position.z/4.0 + u_time) + position.y,
          position.z,
          1.0
        );

        gl_Position = projectionMatrix * modelViewMatrix * result;
      }
      `,
      fragmentShader: `
      varying vec3 pos;


      uniform float u_time;
      void main() {
        if (pos.x >= 0.0) {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        } else {
          gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        }
      }
      `,
    }); */
    


    // Torustrue
    function Torus(f) {
      this.b = new THREE.Mesh(new THREE.TorusGeometry(160, 75, 2, 13), normalMaterial);
      this.b.position.x = 57 * Math.cos(f);
      this.b.position.y = 57 * Math.sin(f);
      this.b.position.z = f * 1.25;
      this.b.rotation.z = f * 0.03;
    }


    const GLTFloader = new GLTFLoader();
    //let tableIcon = null;

    GLTFloader.setCrossOrigin("true");
    // let tableIcon = null;
<div style={{ position: "relative", marginTop:"50%" }}></div>

    let tableIcon = new THREE.Mesh();

    GLTFloader.load(tableGLB, function (glb) {
      tableIcon = glb.scene;
      /*     glb.scene.scale.set(0.25,0.25,0.25);
          glb.scene.position.z = 40;
          glb.scene.position.x =20;
          glb.scene.position.y = 5; */

      // glb.scene.scale.set(0.015,0.015,0.015);
      glb.scene.position.z = 0;
      glb.scene.position.x = 0.01;
      glb.scene.position.y = 0.01;


      glb.scene.rotation.x = 0.2;
      scene.add(tableIcon);

      console.log(typeof (tableIcon))
    });

    let bowserIcon = new THREE.Mesh();

    GLTFloader.load(bowser, function (glb) {
      bowserIcon = glb.scene;
      /*     glb.scene.scale.set(0.25,0.25,0.25);
          glb.scene.position.z = 40;
          glb.scene.position.x =20;
          glb.scene.position.y = 5; */

      glb.scene.scale.set(0.15,0.15,0.15);
      glb.scene.position.z = -200;
      glb.scene.position.x = 0.01;
      glb.scene.position.y = 0.01;


      glb.scene.rotation.x = 0.2;
      scene.add(bowserIcon);

      console.log(typeof (bowser))
    });



    let marioIcon = new THREE.Mesh();

    GLTFloader.load(mario, function (glb) {
      marioIcon = glb.scene;
      /*     glb.scene.scale.set(0.25,0.25,0.25);
        glb.scene.position.z = 40;
        glb.scene.position.x =20;
        glb.scene.position.y = 5; */

      glb.scene.scale.set(0.015, 0.015, 0.015);
      glb.scene.position.z = -70;
      glb.scene.position.x = 0.01;
      glb.scene.position.y = 0.01;


      glb.scene.rotation.x = 0.2;
      scene.add(marioIcon);

    });

    let donkeyIcon = new THREE.Mesh();
    GLTFloader.load(donkey, function (glb) {
      donkeyIcon = glb.scene;
      /*     glb.scene.scale.set(0.25,0.25,0.25);
        glb.scene.position.z = 40;
        glb.scene.position.x =20;
        glb.scene.position.y = 5; */

      // glb.scene.scale.set(0.015,0.015,0.015);
      glb.scene.position.z = -20;
      glb.scene.position.x = 0.01;
      glb.scene.position.y = 0.01;


      glb.scene.rotation.x = 0.2;
      scene.add(donkeyIcon);

    });




    var numTorus = 80;
    var tabTorus = [];
    for (var i = 0; i < numTorus; i++) {
      tabTorus.push(new Torus(-i * 13));
      scene.add(tabTorus[i].b);

    }








    // Update
    function update() {
      for (var i = 0; i < numTorus; i++) {
        tabTorus[i].b.position.z += 10
        tabTorus[i].b.rotation.z += i * 10 / 10000;
        if (tabTorus[i].b.position.z > 0) {
          tabTorus[i].b.position.z = -1000;
        }
      }
    }






    let windowHalfX = 0;

    let windowHalfY = 0;
    /*   function onWindowResize() {
  
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
  
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
  
        renderer.setSize(window.innerWidth, window.innerHeight);
      } */

    /*     function onDocumentMouseMove(event) {
          mouseX = (event.clientX - windowHalfX);
          mouseY = (event.clientY - windowHalfY);
        }
     */

    const tween1 = new TWEEN.Tween({ x: 0, y: 0, z: 70 }).to({
      x: -
        0, y: 0, z: -248
    }, 5000).onUpdate(function (object) {
      camera.position.set(object.x, object.y, object.z);
    })


    tween1.start();
    /*     function onDocumentMouseMove(event) {
          mouseX = (event.clientX - windowHalfX);
          mouseY = (event.clientY - windowHalfY);
        } */
    // Render
    function animate() {

      requestAnimationFrame(animate);
      tableIcon.rotation.x += 0.01;
      tableIcon.rotation.y += 0.01;

      bowserIcon.rotation.x += 0.01;
      bowserIcon.rotation.y += 0.01;


      marioIcon.rotation.x += 0.01;
      marioIcon.rotation.y += 0.01;

      donkeyIcon.rotation.x += 0.01;
      donkeyIcon.rotation.y += 0.01;

      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (- mouseY - camera.position.y) * .05;

      renderer.render(scene, camera);
      update();
      TWEEN.update();

    }

    animate();

    /*     Element.prototype.remove = function() {
          this.parentElement.removeChild(this);
      }
      NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
          for(var i = this.length - 1; i >= 0; i--) {
              if(this[i] && this[i].parentElement) {
                  this[i].parentElement.removeChild(this[i]);
              }
          }
      } */



    this.getData();



  }

  getData() {
    setTimeout(() => {
      console.log('Our data is fetched');
     // setTimeout(document.getElementById("ca").remove(), 13000);
/*       setTimeout(window.location.replace('localhost:3000/login2'),13000      )
 */      
setTimeout(window.location.replace("http://127.0.0.1:3000/login2"),5000      )
      this.setState({
        data: 'Hello WallStreet'
      })
    }, 10000)
  }


  /*     setTimeout(document.getElementById("ca").remove(), 100000); */
  /* updateDimensions = () => {
    setTimeout(document.getElementById("ca").remove(), 5000);
  } */

  render() {
    return (

      <div id='torusDiv'
        style={{

          /*  display: 'flex', */
          /*        justifyContent: 'center',
                 al        <div style={{ position: "relative", marginTop: 0 }}>
dColor: '#101522'
/*                     height: '800hv'
*/                }}>

        {/* <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">ENTRAR</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Criar uma nova conta
        </button>
       */}
        <canvas id='ca'></canvas>

     


        {/*         {this.state.width > 1200 ? (<div id='divL'

          style={{
            display: 'flex',


            height: '1000px',
            width: '1000px'

          }}
        >


          <canvas id='ca'></canvas>
        </div>) : (

          <div id='divL'
            style={{

              display: 'flex',
              height: '450px',
              width: '350px'

            }}


          >


            <canvas id='ca'></canvas>
          </div>
        )} */}

      </div>

    );
  }
}

export default TorusTunnel;