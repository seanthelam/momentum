# Momentum - Colorado College Physics Resources

A comprehensive web resource for Colorado College physics students navigating summer research opportunities, academic pathways, and career development.

## 🚀 About

**Momentum** is a student-run initiative started by Sean Lam for the Colorado College Society of Physics Students (SPS) chapter. We centralize information about REU programs, research opportunities, application resources, and academic planning to support physics students throughout their undergraduate journey.

### Key Features

- **📚 Curated Opportunities**: Searchable database of REU programs, national lab internships, and research positions
- **🎓 Academic Pathways**: Sample course sequences for physics majors and minors
- **📝 Application Resources**: Comprehensive guides on personal statements, rec letters, and contacting professors
- **📅 Timeline**: Month-by-month application checklist
- **💡 Student Wisdom**: Tips and examples from students who've been through the process

## 🌐 Live Site

[Add your GitHub Pages URL here once deployed]

## 🛠️ Technology

- **Pure HTML/CSS** - No frameworks, easy to maintain
- **Responsive Design** - Works on mobile, tablet, and desktop
- **GitHub Pages** - Free hosting with easy deployment
- **Separated Concerns** - CSS in `styles.css`, each page is a standalone HTML file

## 📁 File Structure

```
momentum/
├── index.html              # Home page
├── opportunities.html      # Summer research opportunities
├── pathways.html          # Major/minor course pathways
├── resources.html         # Application guides and resources
├── timeline.html          # Application timeline
├── about.html            # About SPS and how to contribute
├── styles.css            # Global stylesheet
└── README.md            # This file
```

## 🚀 Deployment to GitHub Pages

1. **Create a new repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Momentum website"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/momentum-cc-physics.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://seanthelam.github.io/momentum/`

## 📝 How to Update Content

### Adding New Opportunities

Edit `opportunities.html` and add a new opportunity block:

```html
<div class="opportunity-item" data-type="reu" data-field="astro">
    <h4>Program Name - Institution</h4>
    <div class="opportunity-meta">
        <span class="meta-tag">🔭 Field</span>
        <span class="meta-tag">📅 Dates</span>
        <span class="meta-tag">💰 Stipend</span>
        <span class="meta-tag">📍 Location</span>
    </div>
    <p>Description of the program...</p>
    <p><strong>Deadline:</strong> Date</p>
    <a href="URL" class="opportunity-link" target="_blank">Learn More →</a>
</div>
```

### Updating Deadlines

Update the deadline boxes on `index.html` and `timeline.html` to reflect current year deadlines.

### Adding Resources

Add new guides to `resources.html` in the appropriate section. Follow the existing structure with proper heading hierarchy.

## 🤝 Contributing

We welcome contributions from the CC physics community!

### Ways to Contribute

1. **Submit opportunities** - Know of a great REU program? Add it!
2. **Share experiences** - Contribute anonymized personal statement examples
3. **Fix issues** - Found a typo or broken link? Submit a PR
4. **Add features** - Ideas for new functionality? Open an issue first to discuss

### Contribution Guidelines

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-opportunity`)
3. Make your changes
4. Test locally by opening `index.html` in your browser
5. Commit your changes (`git commit -m "Add new REU program"`)
6. Push to your branch (`git push origin feature/new-opportunity`)
7. Open a Pull Request

## 📧 Contact

- **Email**: s_lam2023@coloradocollege.edu
- **Website**: github.com/seanthelam
- **SPS Chapter**: Society of Physics Students, Colorado College

## 📜 License

This project is licensed under the Creative Commons Attribution 1.0 Universal License. You're free to:

- **Share**: Copy and redistribute the material
- **Adapt**: Remix, transform, and build upon the material

With attribution to Colorado College SPS.

## 🙏 Acknowledgments

- Colorado College Physics Department
- National Society of Physics Students (SPS)
- All student contributors who shared their experiences
- NSF REU Program and DOE SULI for providing research opportunities

---

**Momentum** - Built by Sean Lam for students

*Last Updated: November 2025*
