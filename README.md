# 📖 FAQ Accordion

A modern and responsive **FAQ Accordion** built with **HTML5**, **CSS3**, and **JavaScript**. This project provides an elegant and interactive FAQ section where users can expand and collapse answers with a single click.

---

## 📸 Preview

![FAQ Accordion](./images/screenshot.png)

---

## ✨ Features

- 📱 Fully Responsive Design
- 🎨 Clean & Modern User Interface
- ⚡ Interactive Accordion Effect
- 🚀 Built with Vanilla JavaScript
- 💻 Beginner-Friendly Code
- 🛠️ Easy to Customize
- 📦 Lightweight & Fast

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```text
FAQ-Accordion/
│
├── index.html
├── style.css
├── README.md
└── images/
    └── screenshot.png
```

---

## 🚀 Live Demo

🔗 https://negarlmd.github.io/accordian/

---

## ⚙️ How It Works

Each FAQ item contains a question and an answer.

When the user clicks on a question:

- The answer expands.
- Clicking the same question again collapses it.
- The interaction is handled using JavaScript with `classList.toggle()`.

```javascript
const h2 = document.querySelectorAll(".acc > li > h2");

h2.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("show");
  });
});
```

---

## 💡 Future Improvements

- Close previously opened accordion items automatically
- Add smooth opening and closing animations
- Rotate the "+" icon when expanded
- Replace the "+" icon with Font Awesome icons
- Add Dark Mode
- Improve accessibility using ARIA attributes

---

## 👩‍💻 Author

**Negar Mohammadi**

Front-End Developer passionate about building responsive and modern web interfaces using HTML, CSS, and JavaScript.

---

## 📬 Contact

- 📧 **Email:** negarlmd704@gmail.com
- 🐙 **GitHub:** https://github.com/negarlmd
- 💼 **LinkedIn:** https://www.linkedin.com/in/negar-webdev/
- 🌐 **Live Demo:** https://negarlmd.github.io/accordian/

Feel free to connect with me for collaboration, feedback, or new opportunities.

---

## ⭐ Support

If you like this project, please consider giving it a **⭐ Star** on GitHub.

Thank you for visiting my repository!
