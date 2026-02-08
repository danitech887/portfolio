# Full Stack Software Engineer Portfolio

A modern, responsive multi-page portfolio website built with HTML, CSS, and JavaScript. Features an editorial-inspired design with smooth animations and interactive elements.

## 🎨 Features

- **Multi-page Navigation**: Home, Projects, Skills, Experience, and Contact pages
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, parallax backgrounds, and interactive hover states
- **Project Filtering**: Dynamic filtering on the projects page
- **Interactive Contact Form**: Form validation and submission handling
- **Scroll Animations**: Elements animate as they come into view
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Performance Optimized**: Fast loading and smooth scrolling

## 📁 File Structure

```
portfolio/
├── index.html          # Homepage with hero section and featured projects
├── projects.html       # Full project gallery with filtering
├── skills.html         # Technical skills and certifications
├── experience.html     # Work experience and education
├── contact.html        # Contact form and information
├── styles.css          # Complete styling with CSS variables
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🚀 Getting Started

1. **Download all files** to a folder on your computer
2. **Open `index.html`** in a web browser to view the portfolio
3. **Customize the content** (see instructions below)
4. **Deploy** to your preferred hosting service

## ✏️ Customization Guide

### 1. Personal Information

**Update the following in all HTML files:**

- Replace `"Portfolio"` with your name or brand
- Update page titles in `<title>` tags
- Change social media links (GitHub, LinkedIn, Twitter, etc.)
- Update email addresses and contact information

### 2. Homepage (index.html)

- **Hero Section**: Update the subtitle, title, and description
- **Featured Projects**: Modify the 3 project cards with your own projects
- **Stats Section**: Update the numbers and labels
- **CTA Section**: Customize the call-to-action message

### 3. Projects Page (projects.html)

- **Project Details**: Replace all 6 project entries with your own
- **Project Categories**: Update `data-category` attributes for filtering
- **Project Images**: Replace gradient placeholders with actual images
- **Links**: Add your project URLs (live demos, GitHub repos, etc.)

### 4. Skills Page (skills.html)

- **Skill Categories**: Modify the 5 skill categories
- **Skill Levels**: Adjust the progress bar widths (in CSS % values)
- **Technology Tags**: Update the tags cloud with your tech stack
- **Certifications**: Add your own certifications and courses

### 5. Experience Page (experience.html)

- **Work Experience**: Replace with your job history (4 positions shown)
- **Education**: Update with your educational background
- **Achievements**: Add your awards and recognitions
- **Timeline**: The timeline automatically adjusts to content

### 6. Contact Page (contact.html)

- **Contact Methods**: Update all contact information
- **Location**: Change your location and availability status
- **Social Cards**: Update platform links
- **Form Action**: Connect form to your backend API or email service

## 🎨 Design Customization

### Color Scheme

Edit the CSS variables in `styles.css` (lines 7-24):

```css
:root {
    --color-primary: #d64545;        /* Main brand color */
    --color-accent: #2d5a8c;         /* Secondary color */
    --color-bg: #fdfcfb;             /* Background */
    --color-text: #1a1a1a;           /* Text color */
    /* ... more colors ... */
}
```

### Typography

The portfolio uses three font families:
- **Crimson Pro** (Display/Headers)
- **DM Sans** (Body text)
- **JetBrains Mono** (Code/Technical)

To change fonts, update the Google Fonts link in each HTML file and the CSS variables.

### Layout

- Adjust container widths in CSS variables
- Modify spacing using `--spacing-unit` (default: 8px)
- Change border radius values for different aesthetics

## 📱 Mobile Responsiveness

The portfolio includes three breakpoints:
- **1024px**: Tablet layout adjustments
- **768px**: Mobile menu activation
- **480px**: Small mobile optimizations

Modify breakpoints in the media queries at the bottom of `styles.css`.

## 🔧 Adding Project Images

Replace the gradient placeholders with actual images:

1. Add your images to an `images/` folder
2. Replace this code:
   ```html
   <div class="project-placeholder" style="background: linear-gradient(...);">
   ```
   
   With:
   ```html
   <img src="images/your-project.jpg" alt="Project Name">
   ```

## 📊 Form Integration

The contact form currently shows a mock submission. To integrate with a backend:

1. **Backend API**: Update the form submission in `script.js` (line 80-110)
2. **Email Service**: Use services like Formspree, EmailJS, or Netlify Forms
3. **Example with Formspree**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🌐 Deployment

Deploy to any static hosting service:

- **GitHub Pages**: Free, easy setup with GitHub repo
- **Netlify**: Drag and drop deployment, free tier
- **Vercel**: Fast deployment with automatic previews
- **AWS S3**: Scalable hosting with CloudFront CDN

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## 🎯 Performance Tips

1. **Optimize Images**: Compress images to reduce file size
2. **Lazy Loading**: Add `loading="lazy"` to image tags
3. **Minify Files**: Use tools to minify CSS and JS for production
4. **CDN**: Use a CDN for faster global delivery

## 📝 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 💡 Tips for Success

1. **Keep it Updated**: Regularly add new projects and skills
2. **Real Content**: Use actual project screenshots and descriptions
3. **Proofread**: Check for typos and grammatical errors
4. **Test**: View on different devices and browsers
5. **Analytics**: Add Google Analytics to track visitors
6. **SEO**: Update meta tags for better search engine visibility

## 🆘 Need Help?

If you encounter any issues:
1. Check browser console for JavaScript errors
2. Verify all file paths are correct
3. Ensure all files are in the same directory
4. Test in different browsers

---

**Good luck with your portfolio! 🚀**

Remember to replace all placeholder content with your own information and projects to make it truly yours.
