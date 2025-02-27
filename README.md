# 🔔 Alert Components using React, TypeScript, SCSS

## 📌 Introduction
This project is a **custom alert component system** built with **React, TypeScript, and SCSS**.  
It supports multiple alert types, including:  
- ✅ **Success Alert** - Indicates successful actions  
- ⚠️ **Warning Alert** - Alerts about potential issues  
- ❌ **Error Alert** - Notifies critical errors  
- ℹ️ **Info Alert** - Provides general updates  
- 🔳 **Default Alert** - General-purpose messages  

---

## 🛠️ Technologies Used
- **React** ⚛️ (UI Library)
- **TypeScript** 🟦 (For type safety and better code quality)
- **SCSS / SASS** 🎨 (For advanced styling and maintainability)
- **Lucide-react** 🎨 (For modern icons)
- **Vite** ⚡ (For fast development and optimized builds)
- **Yarn** 📦 (For package management)

---

## 🚀 How to Run the Project
### 1️⃣ Install Dependencies
Ensure that you have `Node.js` and `Yarn` installed, then run:
```sh
yarn install
```

### 2️⃣ Start the Development Server
To run the app in development mode:
```sh
yarn dev
```
The app will be available at `http://localhost:5173/`

---

## 📂 Project Structure
```
📦 my-alert-app
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 Alert
│   │   │   ├── Alert.tsx
│   │   │   ├── index.scss
│   ├── 📂 Type
│   │   ├── AlertType.ts
│   ├── App.tsx
│   ├── main.tsx
├── 📜 package.json
├── 📜 tsconfig.json
├── 📜 vite.config.ts
├── 📜 README.md
```

---

## 🎨 Alert Styling with SCSS
A **`mixin`** has been created in `index.scss` to efficiently manage alert styles, for example:

```scss
@mixin alert($name, $borderColor, $bgColor, $txtColor) {
  .#{$name} {
    border: 2px dotted $borderColor;
    border-radius: 0.8rem;
    padding: 1.3rem;
    background: $bgColor;
    margin-bottom: 10px;
    .alert-header {
      display: flex !important;
      align-items: center;
      justify-content: space-between;
      span svg {
        margin-right: 0.9rem;
        cursor: pointer;
      }
      h4 {
        margin-left: 0.9rem;
      }
    }
    .alert-Title {
      display: flex;
      color: $txtColor;
    }
    p {
      margin-top: 1rem;
      color: $txtColor;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.5rem;
    }
  }
}
```

### Applying the SCSS Styles:
```scss
@include alert("Alert-error", $errorBorder, $errorBg, $errorColor);
@include alert("Alert-warning", $warningBorder, $warningBg, $warningColor);
@include alert("Alert-success", $successBorder, $successBg, $successColor);
@include alert("Alert-info", $infoBorder, $infoBg, $infoColor);
@include alert("Alert-default", $defaultBorder, $defaultBg, $defaultColor);
```

---

## 📌 Features
✅ **Reusable Components** - Easily customizable alert messages  
🎨 **SCSS Variables & Mixins** - For better styling management  
⚡ **Optimized with Vite** - Faster development & build time  
🛠️ **Built with TypeScript** - Improved code quality and maintainability  

---

## 📜 License
This project is open-source and available under the **MIT License**.  

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.  

---

🚀 **Happy Coding!** 🎉
