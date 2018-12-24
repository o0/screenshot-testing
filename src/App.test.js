import { readFile } from 'fs';
import { promisify } from 'util';
import { toMatchImageSnapshot  } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const asyncReadFile = promisify(readFile);


expect.extend({toMatchImageSnapshot });


const getScreenshot = async (markdown) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(markdown);
  const screen = await page.screenshot({ fullPage: true });
  await page.close();

  return screen;
}


const getFullIndexPageMarkdown = async (component) => {
  const markdown = await asyncReadFile(`${__dirname}/../public/index.html`, 'utf-8');
  const componentMarkdown = ReactDOMServer.renderToStaticMarkup(component);
  const newMarkdown = markdown
    .replace(/%PUBLIC_URL%/g, '/')
    .replace('<div id="root"></div>', `<div id="root">${componentMarkdown}</div>`);

  return newMarkdown;
}


it('<App /> is rendered to snapshot correctly', async () => {
  expect(await getScreenshot(
    await getFullIndexPageMarkdown(<App />)
  )).toMatchImageSnapshot();
});


it('Failing test', async () => {
  expect(await getScreenshot(
    await getFullIndexPageMarkdown(<App foo="Incorrect value of prop" />)
  )).toMatchImageSnapshot();
});
