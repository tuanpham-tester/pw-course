import { test, expect } from '@playwright/test';
test('Bài số 3_a', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.locator('//a[contains(text(),"Bài học 3: Todo page")]').click();
  for (let i = 1; i <= 100; i++) {
    await page.locator('//input[@id="new-task"]').fill(`Todo${i}`);
    await page.locator('//button[@id="add-task"]').click();
  }
  // Xóa các todo số lẻ
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      await page.locator('//button[@id="todo1-delete"]').click();
      await page.locator('//button[@id="todo1-delete"]').press('Enter');
    } 
  }
});
