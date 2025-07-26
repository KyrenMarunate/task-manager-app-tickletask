# Tickletask

A minimalistic, feature-rich task management application built with AngularJS, HTML5, and CSS3. Features a modern opaque design with glass-morphism effects, priority management, time tracking, and document upload support.

## ✨ Features

### Core Functionality
- ✅ **Add, Edit, Delete Tasks** - Full CRUD operations
- 🎯 **Priority System** - High, Medium, Low priority levels with color coding
- ⏰ **Time Management** - Due dates, estimated time, and built-in timer
- 📎 **File Attachments** - Upload and manage documents per task
- 🔍 **Advanced Filtering** - Filter by status, priority, and overdue tasks
- 📊 **Live Statistics** - Real-time task counters and progress tracking

### Time Tracking
- ⏱️ **Built-in Timer** - Start/stop/reset timer for active work sessions
- 📈 **Time Logging** - Automatic tracking of time spent on tasks
- 🎯 **Estimated vs Actual** - Compare planned and actual time spent
- ⚠️ **Overdue Detection** - Visual alerts for past-due tasks

### User Experience
- 🎨 **Minimalistic Design** - Clean, opaque design with glass-morphism effects
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile
- ⌨️ **Keyboard Support** - Press Enter to add/save tasks
- 🎭 **Smooth Animations** - Hover effects and transitions throughout
- 🎯 **Intuitive Controls** - Circular and oval buttons with clear iconography

## 📁 File Structure

```
task-manager/
├── index.html          # Main HTML structure and layout
├── css/
│   └── styles.css      # Complete styling with glass-morphism effects
├── js/
│   └── app.js          # AngularJS controller and application logic
├── assets/
│   └── uploads/        # Directory for file attachments (future use)
└── README.md           # This file
```

## 🛠️ Technologies Used

- **AngularJS 1.8.3** - Frontend framework
- **HTML5** - Semantic markup and file upload
- **CSS3** - Advanced styling with backdrop-filter and flexbox
- **JavaScript** - Application logic and timer functionality

## 📱 Browser Compatibility

- ✅ Chrome 76+
- ✅ Firefox 72+
- ✅ Safari 13+
- ✅ Edge 79+

*Note: Glass-morphism effects require browsers with backdrop-filter support*

## 🎯 Usage Guide

### Adding Tasks
1. Enter task description in the main input field
2. Select priority level (Low/Medium/High)
3. Set due date and estimated time (optional)
4. Attach files if needed (PDF, DOC, DOCX, TXT, JPG, PNG, JPEG)
5. Click "Add Task" or press Enter

### Managing Tasks
- **Complete**: Click the checkmark (✓) button
- **Edit**: Click the edit (✎) button to modify task text
- **Delete**: Click the delete (×) button to remove task
- **Timer**: Use play/pause (▶️/⏸️) and reset (🔄) buttons for time tracking

### Filtering and Organization
- **All Tasks**: View all tasks regardless of status
- **Pending**: Show only incomplete tasks
- **Completed**: Show only finished tasks
- **High Priority**: Filter by high-priority tasks only
- **Overdue**: Show tasks past their due date

### Time Tracking
- Click the play button to start timing work on a task
- Pause to stop the timer (time is automatically saved)
- Reset to clear the current session timer
- View total logged time in the task metadata

## 🎨 Design Philosophy

The application follows a minimalistic design approach with:
- **Opaque/Glass-morphism Effects** - Using backdrop-filter for modern visual appeal
- **Circular and Oval Elements** - Rounded buttons and input fields
- **Soft Color Palette** - Muted backgrounds with vibrant accent colors
- **Consistent Spacing** - Proper visual hierarchy and breathing room
- **Smooth Interactions** - Subtle animations and hover effects

## 🔧 Customization

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
/* Primary brand color */
--primary-color: #6c63ff;

/* Priority colors */
--high-priority: #dc3545;
--medium-priority: #ffc107;
--low-priority: #28a745;
```

### Adding New Priority Levels
1. Update the select options in `index.html`
2. Add corresponding CSS classes in `styles.css`
3. Modify the priority filtering logic in `app.js`

### Extending File Support
Update the `accept` attribute in the file input:
```html
accept=".pdf,.doc,.docx,.txt,.jpg,.png,.jpeg,.zip,.rar"
```

## 🚀 Deployment

### Local Development
- Simply open `index.html` in any modern web browser
- No server required for basic functionality

### Web Hosting
- Upload all files to your web server
- Ensure proper MIME types are configured
- For file upload functionality, implement server-side handling

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access via `https://username.github.io/repository-name`

## 📝 Future Enhancements

- [ ] **Data Persistence** - Local storage or database integration
- [ ] **Real File Upload** - Server-side file handling
- [ ] **Task Categories** - Organize tasks by project or category
- [ ] **Collaborative Features** - Multi-user support
- [ ] **Export Functionality** - Export tasks to PDF or CSV
- [ ] **Dark Mode** - Theme switching capability
- [ ] **Notifications** - Browser notifications for due dates
- [ ] **Drag & Drop** - Reorder tasks by dragging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure all files are in the correct directory structure
3. Verify that AngularJS is loading from the CDN
4. Test in a different browser to rule out compatibility issues

---

**Happy Task Managing! 🎯**
