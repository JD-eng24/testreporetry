import { expect } from '@wdio/globals'
import LoginPage from '../pageObjects/login.page.js'

describe('My Logins', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')

    })
})

