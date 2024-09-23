import { test, expect } from '@playwright/test';

test('bài số 1', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[contains(text(),"Bài học 1: Register Page (có đủ các element)")]').click();
    await page.locator('//input[@id="username"]').fill('joonpham');
    await page.locator('//input[@id="email"]').pressSequentially('tuanpham@gmail.com', {
        delay: 100
    });
    await page.locator('//input[@id="male"]').click();
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//option[@value="technology"]').click();
    await page.locator('//select[@id="country"]').selectOption('canada');
    await page.locator('//input[@id="dob"]').fill('1991-09-18');
    await page.locator('//input[@id="profile"]').setInputFiles('upload_file/Test 01.pdf');
    await page.locator('//textarea[@id="bio"]').fill('Kiểm tra bài test playwright số 1');
    await page.locator('//input[@id="rating"]').fill("3");
    await page.locator('//input[@id="favcolor"]').fill("#fff000");
    await page.locator('//input[@id="newsletter"]').check();
    await page.locator('//span[@class="slider round"]').click();
    await page.locator('//button[@type="submit"]').click();
});

