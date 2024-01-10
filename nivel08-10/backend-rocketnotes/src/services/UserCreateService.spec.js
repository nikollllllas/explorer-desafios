const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')
const UserCreateService = require('./UserCreateService')

it('user should be created', async () => {
  const user = {
    name: 'User Test',
    email: 'test@email.com',
    password: '123321'
  }

  const userRepositoryInMemory = new UserRepositoryInMemory()
  const userCreateService = new UserCreateService(userRepositoryInMemory)
  const userCreated = await userCreateService.execute(user)

  console.log(userCreated)

  expect(userCreated).toHaveProperty('id')

})
