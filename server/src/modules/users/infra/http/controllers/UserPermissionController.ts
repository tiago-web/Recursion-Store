import { Request, Response } from 'express';
import statusCodes from "@config/statusCodes";

import UpdateUserPermissionService from '@modules/users/services/UserPermission/UpdateUserPermissionService';

const updateUserPermission = new UpdateUserPermissionService();

class UserPermissionController {
  public async update(req: Request, res: Response): Promise<Response> {
    const { id: masterUserId } = req.user;
    const { id: userId } = req.params;
    const { permission } = req.body;

    const user = await updateUserPermission.execute({
      masterUserId,
      userId,
      permission
    });

    return res.status(statusCodes.ok).json(user);
  }
}

export default UserPermissionController;
