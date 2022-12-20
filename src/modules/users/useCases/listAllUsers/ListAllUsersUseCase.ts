import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userIdAlreadyExist = this.usersRepository.findById(user_id);

    if (!userIdAlreadyExist) {
      throw new Error("User ID is not Exist!");
    } else if (!userIdAlreadyExist.admin) {
      throw new Error("User is not Admin!");
    } else {
      const users = this.usersRepository.list();
      return users;
    }
  }
}

export { ListAllUsersUseCase };
