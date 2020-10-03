import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export const HelloWorld = (req: Request, res: Response) => {
  const user = CreateUserService({
    name: 'Sergio',
    email: 'sergio@sanchez.co',
    password: '21234564',
    tech: [
      { title: 'React', experience: 2 },
      { title: 'Node', experience: 2 },
    ],
    status: 'active',
    studentId: 1234,
  });
  console.log(user.name);
  return res.json({ user });
};
