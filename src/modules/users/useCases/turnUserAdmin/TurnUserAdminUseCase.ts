import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not found!");
    } else if (!user.admin) {
      this.usersRepository.turnAdmin(user);
      return user;
    } else {
      throw new Error("User is already admin!");
    }
  }
}

export { TurnUserAdminUseCase };
