import {Component, OnInit} from '@angular/core';

// import * as BAB from 'babylonjs';
declare var BABYLON: any
declare var AdvancedDynamicTexture: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var canvas = document.getElementById("renderCanvas") as HTMLCanvasElement; // Get the canvas element
    var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    // here the doc for Load function: //doc.babylonjs.com/api/classes/babylon.sceneloader#load

    BABYLON.SceneLoader.Load("https://babylon-adrianeguez.c9users.io/", "descargar", engine, (scene: any) => {

        //as this .babylon example hasn't camera in it, we have to create one
        var camera = new BABYLON.ArcRotateCamera("Camera", 1, 1, 4, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, false);

        scene.clearColor = new BABYLON.Color3(1, 1, 1);
        // scene.ambientColor = BABYLON.Color3.White;

        console.log(BABYLON.GUI)
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        // //

        var botones = [
          'uno',
          'dos',
          'tres',
          'cuatro',
          'cinco',
          'seis'
        ];
        let camaraActiva = false
        botones.forEach(
          (nombre, indice) => {
            var button1 = BABYLON.GUI.Button.CreateSimpleButton("but" + indice, nombre);
            button1.width = "150px"
            button1.height = "40px";
            button1.color = "white";
            button1.cornerRadius = 20;
            button1.background = "green";

            button1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            button1.top = indice * 40;
            button1.onPointerUpObservable.add(() => {
              camaraActiva = !camaraActiva;
              if (camaraActiva) {
                scene.activeCamera = scene.getCameraByUniqueID(4)
              } else {
                scene.activeCamera = scene.getCameraByUniqueID(5)
              }
            });
            advancedTexture.addControl(button1);
          }
        );


        engine.runRenderLoop(() => {

          scene.render();

        });

        window.addEventListener("resize", () => {
          engine.resize();
        });
      },
      (a) => {
        console.log('Progreso: ', a);
      },
      (e) => {
        console.log('Error: ', e);
      }
    );
  }
}
