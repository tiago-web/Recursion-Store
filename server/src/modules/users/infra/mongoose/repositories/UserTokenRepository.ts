import UserToken, { IUserToken } from '../models/UserToken';

export default class UserTokensRepository {
  public async findByToken(token: string): Promise<IUserToken | null> {
    const userToken = await UserToken.findOne({ token });

    return userToken;
  }

  public async generate(userId: string): Promise<IUserToken> {
    const userToken = new UserToken(userId);

    await userToken.save();

    return userToken;
  }
}
