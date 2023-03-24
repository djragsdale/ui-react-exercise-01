import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  HTMLSelect,
} from "@blueprintjs/core";
import { useState } from "react";
import { User } from "../types/User";

type EditUserDialogProps = {
  isOpen: boolean;
  user: User;
  onDialogSubmit: (user: User) => void;
  onDialogCancel: () => void;
};
const roles: string[] = ["Engineer", "Administrator", "Support Technician"];
export const EditUserDialog: React.FC<EditUserDialogProps> = ({
  isOpen,
  user,
  onDialogCancel,
  onDialogSubmit,
}) => {
  const [newRole, setNewRole] = useState(user.role);

  const handleDialogSubmit = () => {
    onDialogSubmit({ ...user, role: newRole });
  };
  const dialogFooterActions = (
    <>
      <Button
        id="edit-dialog-cancel-button"
        intent="danger"
        text="Cancel"
        onClick={onDialogCancel}
      />
      <Button
        id="edit-dialog-submit-button"
        intent="success"
        text="Confirm"
        onClick={() => handleDialogSubmit()}
      />
    </>
  );

  return (
    <Dialog isOpen={isOpen} title="Informational dialog" icon="info-sign">
      <DialogBody>
        <p>
          Change role for user: {user.idUser} {user.profile.firstName}
          {user.profile.lastName}
        </p>
        <HTMLSelect onChange={(event) => setNewRole(event.target.value)}>
          {roles.map((role, index) => (
            <option key={role + index} value={role}>
              {role}
            </option>
          ))}
        </HTMLSelect>
      </DialogBody>
      <DialogFooter actions={dialogFooterActions} />
    </Dialog>
  );
};
