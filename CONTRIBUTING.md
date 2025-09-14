## 🛠 Contribution Guide for Vision Dashboard

Welcome — glad you want to contribute! Below is the recommended workflow and some best practices to make your contributions smooth and appreciated.

---

### 1. Getting Setup

1. **Fork the repository**
   Go to [simpleneeraj/vision-dashboard](https://github.com/simpleneeraj/vision-dashboard) and click **Fork** in the top-right.

2. **Clone your fork locally**

   ```bash
   git clone https://github.com/YOUR-USERNAME/vision-dashboard.git
   cd vision-dashboard
   ```

3. **Install dependencies**
   The project uses **Plasmo**, **Next.js**, **TypeScript**, **Tailwind**, **Zustand** etc.

   ```bash
   npm install
   # or if you use pnpm
   pnpm install
   # or yarn
   yarn install
   ```

4. **Run in development mode**

   ```bash
   npm run dev
   # or pnpm dev / yarn dev depending on what you're using
   ```

   Since it's a Chrome extension / Plasmo project, you can then load the build in your browser (or use the dev build) to test.

---

### 2. How to Work on Features / Fixes

1. **Create a feature branch**
   Use a descriptive branch name, for example:
   `feature/add-settings-panel`
   or
   `fix/newtab-load-flicker`

   ```bash
   git checkout -b feature/your-descriptive-name
   ```

2. **Make your changes**
   - Stick to the existing style (TypeScript, the code structure).
   - Write clean, modular code.
   - If you're adding UI, try to follow existing CSS/Tailwind patterns.
   - If you add new components, try to keep them reusable when possible.

3. **Test thoroughly**
   - For extension behavior, test in your browser.
   - Test default settings vs custom settings.
   - Make sure edge cases (no storage yet, localStorage cleared, etc.) work fine.

---

### 3. Commit & Pull Request Process

1. **Commit messages**
   Use meaningful commits. You might adopt a prefix convention like:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `chore:` for refactoring / maintenance
   - `docs:` for documentation changes

   Example:

   ```
   feat: add blur effect toggle in settings
   fix: prevent crash when storage quota exceeded
   ```

2. **Push your branch**

   ```bash
   git push origin feature/your-descriptive-name
   ```

3. **Open a Pull Request (PR)**
   - Base the PR on the `main` branch of the original repo.
   - Provide a descriptive title and description: what’s changed, why, and any steps to test.
   - If applicable, include screenshots or demos for UI changes.
   - Tag it to if it’s a bugfix, feature, etc.

---

### 4. Code Quality & Best Practices

- Follow consistent formatting (if you have prettier / ESLint configured).
- Add or update documentation/comments when you change behavior (for example, if you're changing how local storage is used).
- Keep UI accessible (e.g. good contrast, keyboard navigable where applicable).
- Think about performance, especially since it’s an extension — minimize bundle size, avoid heavy synchronous operations, etc.

---

### 5. Licensing / Permissions

- Your contributions will be under the same license as the project (whatever license you choose, e.g. MIT).
- If adding images / icons / assets, ensure they respect the license (if you're using third-party assets).

---

### 6. Reporting Issues

If you find bugs or want to suggest improvements:

- Check existing [Issues](https://github.com/simpleneeraj/vision-dashboard/issues) to see if someone already reported it.
- If not, open a new Issue with:
  - a clear title
  - description of the problem / idea
  - steps to reproduce (for bugs)
  - environment details (browser version, extension version, etc.)

---

## ✅ Summary

Contributing is about clear communication, clean code, and testing. Even small improvements (minor UI tweaks, bug fixes, documentation) are very helpful!

---
