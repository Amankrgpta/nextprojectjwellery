import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://london-gold-frontend.vercel.app');
});

test.describe('Test', () => {
  test('should match url', async ({ page }) => {
    // Verify the website URL
    await expect(page).toHaveURL('https://london-gold-frontend.vercel.app');
  });
})
