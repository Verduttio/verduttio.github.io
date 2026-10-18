import React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  vi.stubGlobal('requestAnimationFrame', vi.fn());
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

test('presents backend and AWS experience with links to personal work', () => {
  const { container } = render(<App />);
  const about = container.querySelector('#about');
  expect(about).not.toBeNull();
  expect(about?.textContent).toMatch(/REST APIs with Java and microservices with Python/);
  expect(about?.textContent).toMatch(/Lambda, DynamoDB and API Gateway/);
  expect(about?.textContent).toMatch(/AWS Certified Developer - Associate and Solutions Architect - Associate/);
  expect(about?.textContent).toMatch(/C\+\+/);
  expect(about?.textContent).toMatch(/physics-based rocket flight/);
  expect(screen.getByRole('link', { name: 'photography blog' }).getAttribute('href'))
    .toBe('https://foto.bszwaja.pl');
  expect(screen.getByRole('link', { name: 'spaceflight simulator' }).getAttribute('href'))
    .toBe('https://github.com/Verduttio/Spaceflight-simulator');
  expect(container.textContent).not.toContain('\u2014');
});

test('shows experience without em dashes', async () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Software developer/ }));
  const dialog = await screen.findByRole('dialog', { name: 'Experience' });
  expect(within(dialog).getByText('Software Developer at Hyland')).toBeTruthy();
  expect(container.textContent).not.toContain('\u2014');
});
