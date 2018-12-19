# Тестирование скриншотами

Стек на данный момент:
- React (Create React App)
- Jest, как тест-раннер и тестовый фреймворк
  - Jest Snapshot testing - снэпшоты как способ тестирования
  - jest-image-snapshot - расширение, котрое позволяет делать снэпшоты из картинок. Снэпшоты хранятся в папке `/src/__image_snapshots__`
- ReactDOM/server renerer - встроенный серверный рендерер, для отрисовки React-компонент
- Puppeteer - Безголовый хром, который умеет рендерить страницы не только по урлу но и по разметке, в нашем случае сгенерированной через ReactDOM/server

Таски в работе:
- [ ] нормализация страницы
  - [ ] отключение анимаций
  - [ ] отключение мигания курсора
  - [ ] выключение GIF, автопроигрывающихся видео
  - [ ] инлайнинг всех внешних ресурсов
    - [ ] инлайн стили
    - [ ] Data URL для картинок, шрифтов и остальных внешних данных
- [ ] универсальный рендеринг для любых фреймворков
  - Storybook
- [ ] кроссплатформенные скриншоты

Установка и запуск
```bash
npm install
npm test
```
