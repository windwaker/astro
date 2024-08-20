import { test, expect } from '@playwright/test'

test('has  correct title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/LMA Construction/)
})

test('Projects link', async ({ page }) => {
  await page.goto('/')

  // Click the My Projects link.
  await page.getByRole('link', { name: 'My Projects' }).click()

  // Expects page to have a heading with the name of Projects.
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible()
})
