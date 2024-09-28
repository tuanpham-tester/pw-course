import { test } from '@playwright/test';

test("Bài số 3", async ({ page }) => {
  // Điều hướng tới trang 
  await test.step('Đi tới trang web', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[contains(text(),"Bài học 3: Todo page")]').click();
  })
  
  // Thêm 100 phần tử todo<i>
  await test.step("Thêm mới 100 phần tử Todo<i>", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`Todo${i}`);
      await page.locator('//button[@id="add-task"]').click();
    }
  })

  // Xóa các todo số lẻ
  await test.step("Thêm mới 100 phần tử Todo<i>", async () => {
    page.on('dialog', async dialog => { //Khai báo biến confirmation dialog
      await dialog.accept();
    });
    for (let i = 1; i <= 100; i++) {
      if (i % 2 !== 0) {
        await page.locator(`//button[@id="todo${i}-delete"]`).click();
      }
    }
  })
});
