attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;// actually the input texture coord (gl_FragColor to set output)

uniform vec4 inputSize;
uniform vec4 inputRect;
uniform vec4 outputRect;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputRect.zw, vec2(0.)) + outputRect.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void main(void)
{
    gl_Position = filterVertexPosition();

    // The texture coord required in the output texture.
    vec2 outTextureCoord = aVertexPosition * (outputRect.zw * inputSize.zw);

    // Map the texture coord required in the output onto the input rect. This assumes
    // that the input is larger than or equal to the output.
    vTextureCoord = outTextureCoord + (outputRect.xy - inputRect.xy) * inputSize.zw;
}
