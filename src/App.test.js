import { toMatchImageSnapshot  } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

expect.extend({toMatchImageSnapshot });

const getScreenshot = async (markdown) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(markdown);
  const screen = await page.screenshot({ fullPage: true });
  await page.close();

  return screen;
}


it('<App /> is rendered to snapshot correctly', async () => {
  expect(
    await getScreenshot(ReactDOMServer.renderToStaticMarkup(<App />))
  ).toMatchImageSnapshot();
});


it('Failing test', async () => {
  expect(
    await getScreenshot(ReactDOMServer.renderToStaticMarkup(<App foo="String that breaks testing" />))
  ).toMatchImageSnapshot();
});
