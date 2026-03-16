// מצא את הפונקציה scanImageData ושנה אותה ל:
const scanImageData = (imageData) => {
  if (typeof jsQR !== 'undefined') {
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    return code ? code.data : null;
  }
  return null;
};
```
