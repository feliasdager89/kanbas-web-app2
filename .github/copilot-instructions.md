# Copilot Instructions for Kanbas React Web App

## Project Overview
- This is a React TypeScript project bootstrapped with Create React App.
- Main app code is in `src/`, organized by feature: `Kanbas/`, `Labs/`, etc.
- The `Kanbas/` directory contains core UI for course management (Dashboard, Courses, Navigation, Modules, Assignments, etc).
- Each feature (e.g., Courses, Modules, Assignments) is a folder with its own `index.tsx` and sometimes subcomponents.

## Key Architectural Patterns
- **Component Structure:** Use functional components and React hooks. Most UI logic is colocated with the component.
- **Routing:** Top-level navigation is likely managed in `src/Kanbas/Navigation/index.tsx` and/or `src/App.tsx`.
- **Styling:** CSS modules or plain CSS files (e.g., `styles.css`) are used per feature folder.
- **Data Flow:** No global state management (Redux, Context) is apparent; props are passed down from parent components.
- **Testing:** Tests are in `App.test.tsx` and follow Create React App conventions.

## Developer Workflows
- **Start Dev Server:** `npm start` (runs on http://localhost:3000)
- **Run Tests:** `npm test` (Jest, watch mode)
- **Build for Production:** `npm run build`
- **Linting:** Errors appear in the browser/console during development; no custom lint script.

## Project-Specific Conventions
- **File Naming:** Use `index.tsx` for main entry points in each folder. Subcomponents use descriptive names (e.g., `Editor.tsx`, `status.tsx`).
- **Folder Structure:** Features are grouped by domain (e.g., `Courses/Modules/`, `Courses/Assignments/`).
- **No Custom Scripts:** All workflows use standard Create React App scripts.
- **No API Integration:** No backend/API code is present; all data is likely static or passed via props.

## Integration Points
- **External Dependencies:** Standard React, TypeScript, and Create React App dependencies. No custom integrations detected.
- **Public Assets:** Static files (icons, manifest, etc.) are in `public/`.

## Example Patterns
- To add a new feature, create a folder in `src/Kanbas/` or `src/Labs/` with an `index.tsx` entry point.
- To style a component, add a CSS file in the same folder and import it locally.
- To add navigation, update `src/Kanbas/Navigation/index.tsx` and/or `src/App.tsx`.

## References
- See `README.md` for basic usage and scripts.
- See `src/Kanbas/` for main app structure and patterns.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.