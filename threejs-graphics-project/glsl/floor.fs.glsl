in vec3 vcsNormal;
in vec3 vcsPosition;
in vec2 texCoord;
in vec4 lightSpaceCoords;

uniform vec3 lightColor;
uniform vec3 ambientColor;

uniform float kAmbient;
uniform float kDiffuse;
uniform float kSpecular;
uniform float shininess;

uniform vec3 cameraPos;
uniform vec3 lightPosition;
uniform vec3 lightDirection;

// Textures are passed in as uniforms
uniform sampler2D colorMap;
uniform sampler2D normalMap;

// Added ShadowMap
uniform sampler2D shadowMap;
uniform float textureSize;

// Returns 1 if point is occluded (saved depth value is smaller than fragment's depth value)
float inShadow(vec3 fragCoord, vec2 offset) {
	float bias = 0.001;
	vec2 sampleCoords = fragCoord.xy + offset;
	if (sampleCoords.x >= 0.0 && 
		sampleCoords.y >= 0.0 &&
		sampleCoords.x <= 1.0 && 
		sampleCoords.y <= 1.0) {
		float sampleDepth = texture2D(shadowMap, sampleCoords).r;
		if (sampleDepth + bias < fragCoord.z) {
			return 1.0;
		}
	}
	return 0.0;
}

// PCF for the shadows smoothing 
float calculateShadow() {
	vec3 lightSpaceCoords = (0.5 * lightSpaceCoords.xyz) + 0.5; 

	float smoothing = 0.001; // lower = more smooth

	int borderWidth = 10; 
	int dim = borderWidth * 2 + 1;
	float sampleSize = float(dim * dim);
	float texelSize = 1.0 / (smoothing * textureSize);

	float count = 0.0; 
	for (int i = -borderWidth; i <= borderWidth; i++) {
		for (int j = -borderWidth; j <= borderWidth; j++) {
			vec2 offset = vec2(i, j) * texelSize;
			count += inShadow(lightSpaceCoords, offset);
		}
	}

	return count / sampleSize;
}

void main() {
	//PRE-CALCS
	vec3 N = normalize(vcsNormal);
	vec3 Nt = normalize(texture(normalMap, texCoord).xyz * 2.0 - 1.0);
	vec3 L = normalize(vec3(viewMatrix * vec4(lightDirection, 0.0)));
	vec3 V = normalize(-vcsPosition);
	vec3 H = normalize(V + L);

	//AMBIENT
	vec3 light_AMB = ambientColor * kAmbient;

	//DIFFUSE
	vec3 diffuse = kDiffuse * lightColor;
	vec3 light_DFF = diffuse * max(0.0, dot(N, L));

	//SPECULAR
	vec3 specular = kSpecular * lightColor;
	vec3 light_SPC = specular * pow(max(0.0, dot(H, N)), shininess);

	//SHADOW
	float shadow = 1.0 - calculateShadow();

	//TOTAL
	light_DFF *= texture(colorMap, texCoord).xyz;
	vec3 TOTAL = light_AMB + shadow * (light_DFF + light_SPC);

	gl_FragColor = vec4(TOTAL, 1.0);
}