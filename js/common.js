/**
 * Created by Стас on 21.02.2015.
 */
function e(id){
    return document.getElementById(id);
}

var wrapCanvas = e("mainGame");
wrapCanvas.width = 750;
wrapCanvas.height = 450;
var canvas = wrapCanvas.getContext('2d');
var i,j;
for (i = 0; i <= 50; i++)
    for (j = 0; j <= 30; j++) {
        canvas.strokeRect(i * 15,j * 15,15,15);
    }
