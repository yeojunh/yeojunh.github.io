in vec3 vcsNormal;
in vec3 vcsPosition;

uniform vec3 lightDirection;
uniform samplerCube skybox;
uniform mat4 matrixWorld;

void main( void ) {
  vec3 reflection = reflect(normalize(vcsPosition), normalize(vcsNormal));
  vec3 R = (matrixWorld * vec4(reflection, 0.0)).xyz;
  gl_FragColor = textureCube(skybox, R);
}