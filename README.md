# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
```
# To Do List — ZalogHub

Тестовое задание на позицию Junior Frontend Developer.

Простое приложение для управления списком задач, реализованное на React + TypeScript с использованием сборщика Vite.

## Стек технологий
- React 19
- TypeScript
- Vite 
- CSS Modules
- localStorage

## Функционал
В соответствии с ТЗ реализовано:
- Добавление задачи через поле ввода и кнопку.
- Валидация: нельзя добавить пустую задачу или задачу из одних пробелов.
- Переключение задачи между выполненной и невыполненной.
- Удаление задачи.
- Фильтрация: Все / Активные / Выполненные.
- Сохранение задач в localStorage.
- Визуальное отличие выполненных задач.

Дополнительно:
- Поиск по названию задачи.
- Кнопка Delete All для очистки всего списка.
- Счетчик общего количества задач.

## Установка и запуск
   ```bash
   git clone https://github.com/lantin-creator/Todo-zaloghub.git
   cd todo-zaloghub
   npm install
   npm run dev

## Время работы: 30 минут
```