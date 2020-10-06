interface User {
  name: string;
  email: string;
  password: string;
}

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    // TODO
    // Check if the user already exists in the database
    // if exists throw new AppError
    // Else
    // hash password
    // save in the database

    const user = {
      name,
      email,
      password,
    };

    return user;
  }
}

export default CreateUserService;
