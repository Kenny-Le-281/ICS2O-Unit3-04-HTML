/* Created by: Kenny Le
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * This function converts Fahrenheit to Celsius
 */
function convert () {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = fahrenheit + ' ℉ in celsius is equal to: ' + celsius.toFixed(2) + ' ℃'
}
