// Setup the renderer and create the scene
const { renderer, canvas } = setup();

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

// Setup update callback
function update() {
  requestAnimationFrame(update);
  renderer.getSize(screenSize);
  renderer.setRenderTarget( null );
  renderer.clear();
  
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

var screenSize = new THREE.Vector2();
renderer.getSize(screenSize);

// Start the animation loop.
update();
