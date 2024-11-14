# Тестовое задание по frontend-разработке

Необходимо разработать сайт для учета работников медучреждения с использованием Vue 3 / React и TypeScript.

Все участники имеют свойства:
- ФИО
- Прикрепление к отделению

Работники медучреждения:
- Врачи
    - Может быть заведующим отделения
- Медсестры

Для реализации использовать css-фреймворк по выбору.
Требования к интерфейсу:
- Врачи
    - Таблица без пагинации
- Медсестры
    - Таблица без пагинации
- Меню в шапке:
    - Врачи (ссылка на страницу)
    - Медсестры (ссылка на страницу)

Считаем что всего 2 отделения: кардиологическое и хирургическое.
Ендпоинтов нет, достаточно брать данные из замоканных json-ов и при добавлении-редактировании-удалении только модифицировать хранилище на фронтенде.

Процесс сдачи:
- Результат отправить в Telegram менеджеру, предложившему пройти тестовое задание, в формате ссылки на публичный репозиторий с исходным кодом и инструкциями по запуску/сборки
- По итогам проверки менеджер вернется к вам с обратной связью и дальнейшими шагами



# test-task

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
