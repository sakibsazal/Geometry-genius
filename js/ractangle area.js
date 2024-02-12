function calculateRectangleArea(){
    const widthInput = document.getElementById('rectangle-width');
   const rectangleWidthText = widthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log( width );

    const lengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = lengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    const area = width*length;
    console.log('Area of the rectangle is:',area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}