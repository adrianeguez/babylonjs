# Materiales

Hay 4 tipos de reacciones a la luz:

-  Diffuse - the basic color or texture of the material as viewed under a light;
-  Specular - the highlight given to the material by a light;
-  Emissive - the color or texture of the material as if self lit;
-  Ambient - the color or texture of the material lit by the environmental background lighting.

```javascript
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 1.5, width: 2.5, subdivisions: 4}, scene);
    
    var redMat = new BABYLON.StandardMaterial("redMat", scene);
	  redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    redMat.alpha = 0.5;	 // Transparencia
    // redMat.specularColor = new BABYLON.Color3(1, 0, 0);
    // redMat.emissiveColor = new BABYLON.Color3(1, 0, 0);
    // redMat.ambientColor = new BABYLON.Color3(1, 0, 0);
    
    // tambien se puede usar texturas
    
    redMat.diffuseTexture = new BABYLON.Texture("textures/grass.png", scene);
    
    // redMat.specularTexture = new BABYLON.Texture("textures/grass.png", scene);
    // redMat.emissiveTexture = new BABYLON.Texture("textures/grass.png", scene);
    // redMat.ambientTexture = new BABYLON.Texture("textures/grass.png", scene);
    
    redMat.diffuseTexture.hasAlpha = true; // Si la imagen (png) que usamos tiene transparencia podemos dejar su transparencia con esto
    
    // Es para poder ocultar las caras que no esten en ese momento vistas en la camara, como un cubo por ejemplo
    
    redMat.backFaceCulling = true;  // Revisar ejemplo: https://www.babylonjs-playground.com/#YDO1F#20
    // https://doc.babylonjs.com/babylon101/materials
    
    // Si queremos usar una estructura de alambre
    // materialSphere1.wireframe = true;
    
    ground.material = redMat;
    
    
    // Colorear lineas
    var colorLineas = [new BABYLON.Color4(1,0,0,1), new BABYLON.Color4(1,0,0,1), new BABYLON.Color4(1,0,0,1)]; 
    var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints, colors:colorLineas}, scene);

    lines.position.x = 1
    lines.position.y = 1
    lines.position.z = 1
    lines.material = redMat
    

    return scene;

};
```
