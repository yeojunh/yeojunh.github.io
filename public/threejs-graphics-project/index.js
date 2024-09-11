// 3D grpahics project 

// Setup the renderer and create the scene
const { renderer, canvas } = setup();
const { scene, renderTarget, camera, shadowCam, worldFrame, renderTarget2, renderTarget3 } = createScene(canvas);

// Set up the shadow scene.
const shadowScene = new THREE.Scene();

// Switch between seeing the scene
var sceneHandler = 1;

// For ShadowMap visual
const postCam = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
const postScene = new THREE.Scene();

// Image Based Lighting Scene Setup
const IBLCamera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000.0);
const IBLScene = new THREE.Scene();
IBLCamera.position.set(0.0, 1.5, 4.0);
IBLCamera.lookAt(IBLScene.position);
IBLScene.background = new THREE.Color(0x000000);
let hdrCubeRenderTarget;

const IBLParams = {
  exposure: 1.0,
  hdrToneMapping: 'ACESFilmic'
};

const hdrToneMappingOptions = {
  None: THREE.NoToneMapping,
  Linear: THREE.LinearToneMapping,
  Reinhard: THREE.ReinhardToneMapping,
  Cineon: THREE.CineonToneMapping,
  ACESFilmic: THREE.ACESFilmicToneMapping
};

THREE.DefaultLoadingManager.onLoad = function(){
  pmremGenerator.dispose();
};

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Helmet glTF textures 
function loadTextureForGLTF(path, useForColorData = false)
{
  let texture = new THREE.TextureLoader().load(path);
  // required texture properties:
  if (useForColorData) { texture.encoding = THREE.sRGBEncoding; } // If texture is used for color information, set colorspace.
  texture.flipY = false; // UVs use the convention that (0, 0) corresponds to the upper left corner of a texture.
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  // optional texture properties:
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

const helmetAlbedoMap = loadTextureForGLTF('./gltf/helmet/Default_albedo.jpg', true);
const helmetNormalMap = loadTextureForGLTF('./gltf/helmet/Default_normal.jpg');
const helmetEmissiveMap = loadTextureForGLTF('./gltf/helmet/Default_emissive.jpg', true);
const helmetAmbientOcclusionMap = loadTextureForGLTF('./gltf/helmet/Default_AO.jpg');
const helmetMetallicAndRoughnessMap = loadTextureForGLTF('./gltf/helmet/Default_metalRoughness.jpg');

const helmetMaterial = new THREE.MeshStandardMaterial({
  emissive: new THREE.Color(1,1,1),
  metalness: 1.0,
  envMapIntensity: 1.0,

  emissiveMap: helmetEmissiveMap,
  map: helmetAlbedoMap,
  normalMap: helmetNormalMap,
  roughnessMap: helmetMetallicAndRoughnessMap,
  metalnessMap: helmetMetallicAndRoughnessMap,
  aoMap: helmetAmbientOcclusionMap,
});

new THREE.EXRLoader().load('images/rathaus_2k.exr',function(texture){
      hdrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
      IBLScene.background = hdrCubeRenderTarget.texture;

      let envMap = hdrCubeRenderTarget ? hdrCubeRenderTarget.texture : null;

      if (hdrCubeRenderTarget) {
        helmetMaterial.envMap = envMap;
      } else {
        helmetMaterial.envMap = null; 
      }
      helmetMaterial.needsUpdate = true;

      texture.dispose();
    }
);

const helmetFilePath = './gltf/helmet/helmet.gltf';
let helmetObject;
{
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load(helmetFilePath, (gltf) => {
    helmetObject = gltf.scene;
    helmetObject.traverse( function (child) {
      if (child.isMesh) 
      {
        child.material = helmetMaterial;
      }
    });
    IBLScene.add( helmetObject );
  });
}

const IBLControls = new THREE.OrbitControls(IBLCamera, canvas);
IBLControls.minDistance = 1;
IBLControls.maxDistance = 300;

// Replace the light source with the shadow camera, i.e. setup a camera at the light source
shadowCam.position.set(200.0, 200.0, 200.0);
shadowCam.lookAt(scene.position);
shadowScene.add(shadowCam);

const lightDirection = new THREE.Vector3();
lightDirection.copy(shadowCam.position);
lightDirection.sub(scene.position);

// Load floor textures
const floorColorTexture = new THREE.TextureLoader().load('images/floor/diffuse.jpg');
const floorNormalTexture = new THREE.TextureLoader().load('images/floor/normal.jpg');
const floorSpecularTexture = new THREE.TextureLoader().load('images/floor/spec.jpg');
const floorAmbientOcclusionTexture = new THREE.TextureLoader().load('images/floor/AO.jpg');
const floorDisplacementTexture = new THREE.TextureLoader().load('images/floor/displacement.jpg');
const floorRoughnessTexture = new THREE.TextureLoader().load('images/floor/roughness.jpg');
const floorBumpTexture = new THREE.TextureLoader().load('images/floor/bump.jpg');

// Uniforms
const cameraPositionUniform = {type: "v3", value: camera.position}; 
const lightColorUniform = {type: "c", value: new THREE.Vector3(1.0, 1.0, 1.0)};
const ambientColorUniform = {type: "c", value: new THREE.Vector3(1.0, 1.0, 1.0)};
const lightDirectionUniform = {type: "v3", value: lightDirection};
const kAmbientUniform = {type: "f", value: 0.1};
const kDiffuseUniform = {type: "f", value: 0.8};
const kSpecularUniform = {type: "f", value: 0.4};
const shininessUniform = {type: "f", value: 50.0};
const lightPositionUniform = { type: "v3", value: shadowCam.position};

// Load skybox textures
const skyboxCubemap = new THREE.CubeTextureLoader();
const skyboxMaterial = skyboxCubemap.load([
  'images/cubemap/cube1.png',
  'images/cubemap/cube2.png',
  'images/cubemap/cube3.png',
  'images/cubemap/cube4.png',
  'images/cubemap/cube5.png',
  'images/cubemap/cube6.png'
]);
scene.background = skyboxMaterial;
const skyboxCubeMapUniform = {type: 't', value: skyboxMaterial};

// Materials
const postMaterial = new THREE.ShaderMaterial({
  uniforms: {
    lightProjMatrix: {type: "m4", value: shadowCam.projectionMatrix},
    lightViewMatrix: {type: "m4", value: shadowCam.matrixWorldInverse},
    tDiffuse: {type: "t", value: null},
    tDepth: { type: "t", value: null }
  }
});

// Updated to use lighting effects in shader files
const floorMaterial = new THREE.ShaderMaterial({ 
  uniforms: {
    lightProjMatrix: {type: "m4", value: shadowCam.projectionMatrix},
    lightViewMatrix: {type: "m4", value: shadowCam.matrixWorldInverse},
    lightColor: lightColorUniform,
    ambientColor: ambientColorUniform,
    
    kAmbient: kAmbientUniform,
    kDiffuse: kDiffuseUniform,
    kSpecular: kSpecularUniform,
    shininess: shininessUniform,
    
    cameraPos: cameraPositionUniform,
    lightPosition: lightPositionUniform,
    lightDirection: lightDirectionUniform,
    
    colorMap: {type: "t", value: floorColorTexture},
    normalMap: { type: "t", value: floorNormalTexture },
    specularMap: { type: "t", value: floorSpecularTexture },
    ambientOcclusionMap: { type: "t", value: floorAmbientOcclusionTexture },
    displacementMap: { type: "t", value: floorDisplacementTexture },
    roughnessMap: { type: "t", value: floorRoughnessTexture },
    bumpMap: { type: "t", value: floorBumpTexture },
    shadowMap: {type: "t", value: null},
    textureSize: {type: "float", value: null},
  }
});

// Get Shay depth info for shadow casting
// Needed for Shay depth info.
const shadowMaterial = new THREE.ShaderMaterial({});

const matWorldUniform = {type: 'v3', value: camera.matrixWorld};

// Pass the necessary uniforms
const envmapMaterial = new THREE.ShaderMaterial({
  uniforms: {
    lightDirection: lightDirectionUniform,
    matrixWorld: {type: "m4", value: camera.matrixWorldInverse},
    skybox: skyboxCubeMapUniform
  }
});

// Load shaders
const shaderFiles = [
  'glsl/envmap.vs.glsl',
  'glsl/envmap.fs.glsl',
  'glsl/skybox.vs.glsl',
  'glsl/skybox.fs.glsl',
  'glsl/shadow.vs.glsl',
  'glsl/shadow.fs.glsl',
  'glsl/floor.vs.glsl',
  'glsl/floor.fs.glsl',
  'glsl/render.vs.glsl',
  'glsl/render.fs.glsl',
];

new THREE.SourceLoader().load(shaderFiles, function(shaders) {
  envmapMaterial.vertexShader = shaders['glsl/envmap.vs.glsl'];
  envmapMaterial.fragmentShader = shaders['glsl/envmap.fs.glsl'];

  shadowMaterial.vertexShader = shaders['glsl/shadow.vs.glsl'];
  shadowMaterial.fragmentShader = shaders['glsl/shadow.fs.glsl'];

  floorMaterial.vertexShader = shaders['glsl/floor.vs.glsl'];
  floorMaterial.fragmentShader = shaders['glsl/floor.fs.glsl'];

  postMaterial.vertexShader = shaders['glsl/render.vs.glsl'];
  postMaterial.fragmentShader = shaders['glsl/render.fs.glsl'];
});

// Loaders for object geometry
// Load the pixel gltf
const terrainGeometry = new THREE.BoxGeometry(50, 50, 5);
const terrain = new THREE.Mesh(terrainGeometry, floorMaterial);
terrain.position.y = -2.4;
terrain.rotation.set(- Math.PI / 2, 0, 0);
scene.add(terrain);

// Depth Test scene
const postPlane = new THREE.PlaneGeometry( 2, 2 );
const postQuad = new THREE.Mesh( postPlane, postMaterial );
postScene.add( postQuad );

// Listen to keyboard events.
const keyboard = new THREEx.KeyboardState();
function checkKeyboard() {
  if (keyboard.pressed("1"))
  sceneHandler = 1;
  if (keyboard.pressed("2"))
  sceneHandler = 2;

  shadowCam.lookAt(scene.position);
  lightDirection.copy(shadowCam.position);
  lightDirection.sub(scene.position);
}

function updateMaterials() {
  envmapMaterial.needsUpdate = true;
  // skyboxMaterial.needsUpdate = true;
  shadowMaterial.needsUpdate = true;
  floorMaterial.needsUpdate = true;
  postMaterial.needsUpdate = true;
}

// Setup update callback
function update() {
  checkKeyboard();
  updateMaterials();

  cameraPositionUniform.value = camera.position;
  
  requestAnimationFrame(update);
  renderer.getSize(screenSize);
  renderer.setRenderTarget( null );
  renderer.clear();
  

  if (sceneHandler == 1)
  {
      // https://threejs.org/docs/#api/en/renderers/WebGLRenderer.physicallyCorrectLights
      renderer.physicallyCorrectLights = true;
      // https://threejs.org/docs/#api/en/renderers/WebGLRenderer.toneMapping
      renderer.toneMapping = hdrToneMappingOptions[ IBLParams.hdrToneMapping ];
      // https://threejs.org/docs/#api/en/textures/Texture.encoding
      renderer.outputEncoding = THREE.sRGBEncoding;
      var prevToneMappingExposure = renderer.toneMappingExposure;
      renderer.toneMappingExposure = IBLParams.exposure;
  
      renderer.setRenderTarget(null);
      renderer.render(IBLScene, IBLCamera);
  
      // restore non-IBL renderer properties
      renderer.physicallyCorrectLights = false;
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.outputEncoding = THREE.LinearEncoding;
      renderer.toneMappingExposure = prevToneMappingExposure;
  }
  else if (sceneHandler == 2) 
  {
    // Do the multipass shadowing
    // First pass
    renderer.setRenderTarget(renderTarget);
    renderer.render(shadowScene, shadowCam);
    
    // True second pass, change below
    floorMaterial.uniforms.shadowMap.value = renderTarget.depthTexture;
    floorMaterial.uniforms.textureSize.value = renderTarget.width * renderTarget.height;
    renderer.setRenderTarget(null); 
    renderer.render(scene, camera); 

    renderer.setRenderTarget(renderTarget);
    renderer.clear(); 
  } 
}

var screenSize = new THREE.Vector2();
renderer.getSize(screenSize);

// Start the animation loop.
update();
