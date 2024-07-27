//Q1d implement the whole thing to map the depth texture to a quad
// TODO:

// postMaterial 

uniform mat4 lightProjMatrix;
uniform mat4 lightViewMatrix;

// UV is a varying variable 
out vec2 UV;
out vec4 projCoords;

void main() {
    UV = uv;
    projCoords = lightProjMatrix * lightViewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}
