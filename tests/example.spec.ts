import { test, expect } from '@playwright/test'

test('has  correct title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/LMA Construction/)
})

test('Projects link', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'My Projects' }).click()
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible()
})
