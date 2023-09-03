var Engine = {};
// "Engine" object that provides functions to create and manage shaders and shader programs in WebGL
Engine.createShader = function(gl, type, source){
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    console.error(gl.getShaderInfoLog(shader));
  return shader;
}

Engine.createProgram = function(gl, vertexShader, fragmentShader){
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    console.error(gl.getProgramInfoLog(program));

  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS))
    console.error(gl.getProgramInfoLog(program));

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
}
// this code provides encapsulated functions to create shaders and shader programs in WebGL, handling shader compilation, program linking, and validation, while also performing error checks and logging errors when necessary.




