import { test } from '@playwright/test';

test("Add personal notes", async ({ page }) => {
    const notes = [
        { title: "Title 1", content: "Content 1" },
        { title: "Title 2", content: "Content 2" },
        { title: "Title 3", content: "Content 3" },
        { title: "Title 4", content: "Content 4" },
        { title: "Title 5", content: "Content 5" },
        { title: "Title 6", content: "Content 6" },
        { title: "Title 7", content: "Content 7" },
        { title: "Title 8", content: "Content 8" },
        { title: "Title 9", content: "Content 9" },
        { title: "Title 10", content: "Content 10" }
    ];
    // Đi tới trang đích
    await test.step("Đi tới trang note", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    //Thực hiện thêm note
    await test.step("Thêm mới 10 note", async () => {
        for (const note of notes) {
            await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    //Thực hiện search
    await test.step("Thực hiện search theo title", async () => {
        await page.locator('//input[@type= "text" and @id= "search"]').fill('Title 1');
    })
});
