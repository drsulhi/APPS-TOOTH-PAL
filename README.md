# 🦷 ToothPal - Gamified Oral Hygiene Mobile App

A vibrant, modern, and highly engaging single-page application (SPA) prototype for children focused on oral hygiene education and habit formation. Built with React, Tailwind CSS, and Lucide React icons.

## 🎨 Features

### Screen Views
- **Institution Splash Screen**: Educational banner with auto-loading timer
- **App Logo Splash Screen**: ToothPal mascot introduction with progress indicator
- **Login Screen**: Phone and password authentication with social login options
- **Registration Screen**: User account creation with terms acceptance
- **Dashboard - Good State**: Healthy metrics with green progress indicators, active streaks, and encouraging messaging
- **Dashboard - Bad State**: Warning state with red indicators showing neglected routine and reset streaks
- **Journal - Notes Tab**: Daily symptom tracker, personal notes area, and ToothPal AI chatbot
- **Journal - Tutorials Tab**: Educational video placeholders, dental tips, and appointment booking
- **Games Area**: Interactive game grid with 6 playable game tiles
- **Profile/Thank You Screen**: User statistics and motivational exit screen

### Navigation
- **Bottom Navigation Bar**: 5-tab navigation with active/inactive states
- **Floating Barcode Scanner**: Central action button for product scanning
- **Smooth Transitions**: Fluid screen transitions and loading states

### Design System
- **Color Palette**: Soft lavender/purple accents, green for healthy states, red for warnings
- **Typography**: Bold, legible sans-serif fonts optimized for children
- **UI Components**: Thick rounded corners (rounded-2xl, rounded-3xl), shadows, hover effects
- **Responsiveness**: Constrained within realistic 412px mobile device frame

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/drsulhi/APPS-TOOTH-PAL.git
cd APPS-TOOTH-PAL

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app component with state management
├── main.jsx               # React entry point
├── index.css              # Global CSS with Tailwind utilities
├── screens/
│   ├── SplashScreen.jsx
│   ├── AppSplashScreen.jsx
│   ├── LoginScreen.jsx
│   ├── RegisterScreen.jsx
│   ├── DashboardGood.jsx
│   ├── DashboardBad.jsx
│   ├── JournalScreen.jsx
│   ├── GamesScreen.jsx
│   └── ThankYouScreen.jsx
└── components/
    └── NavigationBar.jsx

public/
├── vite.svg
index.html
package.json
tailwind.config.js
postcss.config.js
vite.config.js
```

## 🎮 Interactive Features

### State Management
- Client-side state machine for screen navigation
- User state toggling (good/bad dashboard demo)
- Form input handling and validation

### Interactive Elements
- ✓ Clickable mission checkboxes
- ✓ Tab switching in Journal
- ✓ Game selection with hover effects
- ✓ Symptom selector with Yes/No/Not Sure options
- ✓ Barcode scanner action button
- ✓ Bottom navigation with active states

### Animations
- Loading spinners and progress bars
- Bounce animations on mascot characters
- Smooth transitions and hover effects
- Pulse animations for interactive elements

## 🎨 Design Highlights

### Color Psychology
- **Green**: Healthy behaviors, progress, completed tasks
- **Red/Pink**: Warnings, neglected routines, urgent actions
- **Purple**: Primary theme, calming and focused atmosphere
- **Yellow/Gold**: Rewards, achievements, premium elements

### Typography
- Large, bold headings (text-2xl to text-5xl)
- Semibold labels and descriptions
- Kid-friendly, high-contrast text

### Accessibility
- Clear button states and focus indicators
- High contrast color combinations
- Readable font sizes optimized for children
- Touch-friendly button sizing (min 44x44px)

## 🔧 Technology Stack

- **React 18.2**: Functional components and hooks
- **Tailwind CSS 3.3**: Utility-first styling
- **Lucide React 0.263**: Icon library
- **Vite 5.0**: Build tool and development server
- **PostCSS**: CSS transformation

## 📱 Browser Support

- Chrome/Edge (latest)
- Safari (iOS 12+)
- Firefox (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements

- Backend API integration for data persistence
- Real barcode scanner implementation
- Push notifications for reminders
- Multi-language support
- Dark mode theme
- Advanced animation sequences
- Sound effects and voice guidance
- Social sharing features
- Parent/Guardian dashboard
- Pediatric dentist integration

## 📄 License

MIT License - See LICENSE file for details

## 👨‍💼 Author

**Dr. Sulhi** - International Islamic University Malaysia

---

**Built with ❤️ for healthier smiles and happier children** 🦷😊
