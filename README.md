# 📸 VISTARA – Creative Image Gallery

**VISTARA** is a modern, responsive and interactive image gallery website developed as part of my **CodeAlpha Internship**.

The website provides a visually engaging way to explore photography through categories, hover effects, smooth animations and an interactive fullscreen lightbox.

---

## 🌐 Live Demo

🔗 **Live Website:** Add your GitHub Pages URL here

🔗 **GitHub Repository:** Add your repository URL here

---

## ✨ Features

* 🎨 Modern dark cinematic UI
* 📱 Fully responsive design
* 🖼️ Responsive image gallery
* 🔍 Category-based image filtering
* 🔦 Fullscreen lightbox view
* ⬅️ Previous / Next image navigation
* ⌨️ Keyboard navigation
* ✕ ESC key to close lightbox
* 🔢 Image counter
* 🖱️ Image hover effects
* ✨ Smooth transitions and animations
* 🍔 Responsive mobile navigation
* 📩 Contact form with JavaScript validation
* ♿ Basic accessibility support
* ⚡ Lazy loading for gallery images

---

## 🗂️ Categories

The gallery contains different photography categories:

* 🌿 Nature
* ✈️ Travel
* 👤 Portrait
* 🏛️ Architecture

Users can select a category to display only the relevant images without reloading the page.

---

## 🛠️ Technologies Used

### Frontend

* **HTML5** – Website structure and semantic elements
* **CSS3** – Styling, responsive layout, animations and hover effects
* **JavaScript** – Gallery rendering, filtering, lightbox and navigation

### JavaScript Concepts Used

* DOM Manipulation
* Event Listeners
* Arrays and Objects
* Functions
* Conditional Logic
* Event Handling
* Keyboard Events
* Form Validation
* Intersection Observer API

---

## 📁 Project Structure

```text
VISTARA/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

Open the downloaded `VISTARA` folder in **VS Code**.

### 3. Run the website

Open `index.html` in your browser.

For the best development experience, use the **Live Server** extension in VS Code.

---

## 🖼️ Adding New Images

To add a new image:

1. Place the image inside the `images` folder.
2. Open `script.js`.
3. Add the image information to the gallery array.

Example:

```javascript
{
    src: "images/nature5.jpg",
    title: "Beautiful Mountain",
    category: "nature"
}
```

The gallery will automatically display the new image.

---

## 🔦 Lightbox Functionality

Clicking an image opens it in a fullscreen lightbox.

The lightbox supports:

* Previous image
* Next image
* Close button
* Keyboard left/right arrows
* ESC key
* Image title
* Image category
* Image counter

Example:

```text
        ←       IMAGE       →
                
              03 / 16
```

---

## 📱 Responsive Design

VISTARA is designed to work across different screen sizes.

| Device      | Layout              |
| ----------- | ------------------- |
| 🖥️ Desktop | 3–4 gallery columns |
| 💻 Laptop   | 3–4 gallery columns |
| 📱 Tablet   | 2–3 gallery columns |
| 📱 Mobile   | 1–2 gallery columns |

The website uses **CSS Grid, Flexbox and Media Queries** to create the responsive layout.

---

## 🎯 Internship Objective

This project was developed to demonstrate practical knowledge of:

* Frontend web development
* Responsive web design
* JavaScript programming
* DOM manipulation
* Interactive UI development
* Event handling
* Image filtering
* Lightbox implementation
* User interface design

---

## 📌 Future Improvements

Possible future enhancements include:

* 🔍 Image search functionality
* ❤️ Favorite images
* 🌙 Dark/Light theme switcher
* ⬇️ Image download option
* 🎞️ Automatic slideshow
* 🖼️ Fullscreen gallery mode
* 📤 Image sharing
* ☁️ Cloud-based image storage
* 🗄️ Backend integration

---

## 👨‍💻 Developer

**Madhan**

B.Tech – Information Technology

Developed as part of the **CodeAlpha Internship**.

---

## 📄 License

This project is created for educational and internship purposes.

© 2026 VISTARA. All Rights Reserved.
