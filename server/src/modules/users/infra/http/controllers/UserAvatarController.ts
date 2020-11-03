import { Request, Response } from 'express';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

const updateAvatar = new UpdateUserAvatarService();

class ProfileController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { filename: avatarFileName } = req.file;

    const user = await updateAvatar.execute({
      userId,
      avatarFileName,
    });

    user.password = '';

    return res.json(user);
  }
}

export default ProfileController;
