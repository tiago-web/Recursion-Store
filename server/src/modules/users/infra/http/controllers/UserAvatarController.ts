import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";
import * as Yup from "yup";

import UpdateUserAvatarService from '@modules/users/services/UserAvatar/UpdateUserAvatarService';

const updateAvatar = new UpdateUserAvatarService();

class ProfileController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { filename: avatarFileName } = req.file;

    await Yup.string().required().validate(avatarFileName, {
      abortEarly: false,
    });

    const user = await updateAvatar.execute({
      userId,
      avatarFileName,
    });

    return res.status(statusCodes.ok).json(user);
  }
}

export default ProfileController;
