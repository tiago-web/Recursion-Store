interface TechObject {
  title: string;
  experience: number;
}

interface User {
  name?: string;
  email: string;
  password: string;
  // tech?: Array<TechObject | string>;
  tech: TechObject[];
  status: 'active' | 'inactive';
}

interface Student extends User {
  studentId: number;
}

const CreateUserService = ({ name, email, password, tech, status, studentId }: Student) => {
  const user = {
    name,
    email,
    password,
    tech,
    status,
    studentId,
  };
  return user;
};

export default CreateUserService;
