// /**
//  * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
//  */
//
// //==============================================================================
// // Welcome to scripting in Spark AR Studio! Helpful links:
// //
// // Scripting Basics - https://fb.me/spark-scripting-basics
// // Reactive Programming - https://fb.me/spark-reactive-programming
// // Scripting Object Reference - https://fb.me/spark-scripting-reference
// // Changelogs - https://fb.me/spark-changelog
// //
// // For projects created with v87 onwards, JavaScript is always executed in strict mode.
// //==============================================================================
//
// // How to load in modules
// const Scene = require('Scene');
//
// // Use export keyword to make a symbol available in scripting debug console
// export const Diagnostics = require('Diagnostics');
//
// // Enables async/await in JS [part 1]
// (async function() {
//
//
//
//
// // To use variables and functions across files, use export/import keyword
// // export const animationDuration = 10;
//
// // Use import keyword to import a symbol from another file
// // import { animationDuration } from './script.js'
//
// // To access scene objects
// // const [directionalLight] = await Promise.all([
// //   Scene.root.findFirst('directionalLight0')
// // ]);
//
// // To access class properties
// // const directionalLightIntensity = directionalLight.intensity;
//
// // To log messages to the console
// // Diagnostics.log('Console message logged from the script.');
//
// // Enables async/await in JS [part 2]
// })();
// Load in the required modules
const NativeUI = require('NativeUI');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Create a variable to store the name of our text object
const textNodeName  = '2dText0';

// Access the text object in our scene
const text = Scene.root.find(textNodeName);

// Register a tap gesture on the text node
TouchGestures.onTap(text).subscribe(function() {
// Edit the text through the NativeUI module
NativeUI.enterTextEditMode(textNodeName);
});
