'use strict';

const { Document } = require('..');


const document = new Document();
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');

console.log(`
OpenGL
	vendor                   : ${ gl.getParameter(gl.VENDOR) }
	version                  : ${ gl.getParameter(gl.VERSION) }
	shading language version : ${ gl.getParameter(gl.SHADING_LANGUAGE_VERSION) }
	renderer                 : ${ gl.getParameter(gl.RENDERER) }
	extensions               : ${ gl.getSupportedExtensions().length }
`);
