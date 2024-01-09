const UserCreateService = require('./UserCreateService')

it('user should be created', () => {
  const user = {
    name: 'User Test',
    email: 'test@email.com',
    password: '123321'
  }

  const userCreateService = new UserCreateService()
  const userCreated = await userCreateService.execute(user)

  expect(userCreated).toHaveProperty('id')

})
