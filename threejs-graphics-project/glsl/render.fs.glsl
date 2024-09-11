uniform sampler2D tDiffuse;
uniform sampler2D tDepth;

in vec2 UV;
in vec4 projCoords;

void main() {
    float shadowDepth = texture2D(tDepth, UV).r;
    gl_FragColor = vec4(vec3(shadowDepth), 1.0);
}