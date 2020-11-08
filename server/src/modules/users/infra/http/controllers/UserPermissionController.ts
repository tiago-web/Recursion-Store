import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import UpdateUserPermissionService from '@modules/users/services/UpdateUserPermissionService';

const updateUserPermission = new UpdateUserPermissionService();

class UserPermissionController {
  public async update(req: Request, res: Response): Promise<Response> {
    const masterUserId = req.user.id;
    const { userId } = req.params;
    const { permission } = req.body;

    const user = await updateUserPermission.execute({
      masterUserId,
      userId,
      permission
    });

    user.password = '';

    return res.status(statusCodes.ok).json(user);
  }
}

export default UserPermissionController;
