import { Request, Response } from 'express';

import UpdateUserPermissionService from '@modules/users/services/UpdateUserPermissionService';

const updateUserPermission = new UpdateUserPermissionService();

export default class UserPermissionController {
  public async update(req: Request, res: Response): Promise<Response> {
    const masterUserId = req.user.id;
    const { userId } = req.params;
    const { permission } = req.body;

    const user = await updateUserPermission.execute({
      masterUserId,
      userId,
      permission
    });

    user.password = "";

    return res.json(user);
  }
}
