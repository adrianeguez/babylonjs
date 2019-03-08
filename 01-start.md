# babylonjs

## Tipos de Mesh

-  sphere
-  box
-  plane
-  ground
-  lines


```javascript
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    // var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
    // var box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    // var plane = BABYLON.MeshBuilder.CreatePlane("plane", {}, scene);
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {}, scene); //default ground

    var myPoints = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(0, 1, 1),
		new BABYLON.Vector3(0, 1, 0)
	];
	
	//Create lines 
	var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints}, scene);

    return scene;

};
```

## Posicion de mesh

```javascript
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
    
    var myPoints = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(0, 1, 1),
		new BABYLON.Vector3(0, 1, 0)
	];
	
	//Create lines 
	var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints}, scene);
    lines.position.x = 1
    lines.position.y = 1
    lines.position.z = 1
  return scene;

};
```


## Rotacion de mesh

```javascript
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
    
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {}, scene); //default ground
    
    ground.rotation.z = Math.PI/2;
    ground.rotation.x = Math.PI/2;
    ground.rotation.y = Math.PI/2;
    
    // se puede encadenar las rotaciones
    
    ground.addRotation(Math.PI/2, 0, 0).addRotation(0, Math.PI/2, 0).addRotation(0, 0, Math.PI/2);
    
    
    
  return scene;

};
```


 
