import { test } from '@playwright/test';

test("Bài số 2", async ({ page }) => {
  //Đi tới trang
  await test.step("Đi tới trang web", async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[contains(text(),"Bài học 1: Register Page (có đủ các element)")]').click();
  })

  //Thêm item 1 số lượng 2
  await test.step("Thêm 2 item số 1", async () => {
    await page.locator('(//button[@class="add-to-cart"])[1]').dblclick();
  })

  //Thêm item 2 số lượng 3
  await test.step("Thêm 3 tiem số 2", async () => {
    await page.locator('(//button[@class="add-to-cart"])[2]').click({
      clickCount: 3
    });
  })

  //Thêm item 3 số lượng 1
  await test.step("Thêm 1 item số 3", async () => {
    await page.locator('(//button[@class="add-to-cart"])[3]').click();
  })

});
