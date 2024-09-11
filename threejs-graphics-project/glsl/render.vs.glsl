// postMaterial 
uniform mat4 lightProjMatrix;
uniform mat4 lightViewMatrix;

out vec2 UV;
out vec4 projCoords;

void main() {
    UV = uv;
    projCoords = lightProjMatrix * lightViewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}
