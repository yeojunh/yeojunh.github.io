// The cubmap texture is of type SamplerCube

uniform samplerCube skybox;
in vec3 wcsPosition;

void main() {
	gl_FragColor = texture(skybox, wcsPosition);
}