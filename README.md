# Image Gallery Ollyo Task

> Responsive Image Gallery

##### Live Link: [https://image-gallery-ollyo-task-typescript.vercel.app/](https://image-gallery-ollyo-task-typescript.vercel.app/)

### Used Technology

- [x] HTML
- [x] REACT
- [x] TAILWINDCSS
- [x] Node (initialize project with v21.0.0)

### Dependencies

- [x] react-dnd (Drag and drop for image shoring)
- [x] react-dropzone (handle file drop)
- [x] react-photo-view (image preview)
- [x] @formkit/auto-animate (add/remove card animation)

### How to run this project

Clone this repository

```sh
git clone https://github.com/TahirAhmad01/ImageGalleryOllyoTask
```

Go to the cloned project directory

```sh
cd ImageGalleryOllyoTask
```

You have to install the following dependencies

```sh
npm install
```

If you want to run this project directly follow this command

```sh
npm run dev
```


### React + TypeScript + Vite INFO

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
