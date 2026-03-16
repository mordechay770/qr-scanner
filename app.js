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

## **שלב 2: העלאה ל-GitHub**

1. **צור חשבון GitHub** (אם אין לך): https://github.com

2. **צור Repository חדש:**
   - לחץ על "New repository"
   - שם: `qr-scanner` (או כל שם שתרצה)
   - סמן ✅ "Public"
   - לחץ "Create repository"

3. **העלה קבצים:**
   - לחץ "uploading an existing file"
   - גרור את `index.html` ו-`app.js`
   - לחץ "Commit changes"

## **שלב 3: הפעלת GitHub Pages**

1. בעמוד ה-Repository, לחץ **Settings** (למעלה)
2. בתפריט צד שמאל, לחץ **Pages**
3. תחת "Source" בחר **main** branch
4. תחת "Folder" השאר **/ (root)**
5. לחץ **Save**

**תוך 1-2 דקות** האפליקציה תהיה זמינה ב:
```
https://YOUR-USERNAME.github.io/qr-scanner/
