import React, { useEffect, useState } from "react";
import { Checkbox, FormEndBtn, Input } from "../../components/CustomComponents";
import { useNavigate, useParams } from "react-router-dom";
import { MODULES } from "../../utils/GlobalConstants";
import { getRoleDetails } from "../../api/PermissionServices";
import { useSelector } from "react-redux";

function PermissionForm() {
  const { rolePermissions } = useSelector((state) => state.permissions);
  const { tab, id } = useParams();
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    let modules = MODULES;
    let tempPermissions = modules.map((item) => {
      return {
        module: item,
        create: rolePermissions?.permissions.includes(`${item}c`),
        read: rolePermissions?.permissions.includes(`${item}r`),
        update: rolePermissions?.permissions.includes(`${item}u`),
        delete: rolePermissions?.permissions.includes(`${item}d`),
      };
    });
    setPermissions(tempPermissions);
    setRoleName(rolePermissions?.roleName);
  }, [id, rolePermissions]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = {};
    data.roleName = roleName;
    if (id) data.id = id;
    if (tab === "open") {
    }
  };

  const handleCheckboxUpdate = (index, key, checked) => {
    let tempPermissions = permissions;
    tempPermissions[index][key] = checked;
    setPermissions([...tempPermissions]);
  };

  return (
    <div>
      <form>
        <Input
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          label="Role Name"
          id="roleName"
          required={true}
          type={"text"}
          // inValid
          // inValidMsg={"helelo"}
        />
        <div className="flex justify-between">
          <span></span>
          <span className="flex justify-between w-[50%] capitalize text-black dark:text-white mb-2">
            <span>Create</span>
            <span>Read</span>
            <span>Update</span>
            <span>Delete</span>
          </span>
        </div>
        {permissions.map((item, index) => {
          return (
            <div className="w-full flex justify-between" key={index}>
              <span className="capitalize text-black dark:text-white">
                {item.module}
              </span>
              <span className="flex justify-between w-[50%]">
                <Checkbox
                  checked={item.create}
                  onChange={(e) =>
                    handleCheckboxUpdate(index, "create", e.target.checked)
                  }
                  id="ksdj"
                />
                <Checkbox
                  checked={item.read}
                  onChange={(e) =>
                    handleCheckboxUpdate(index, "read", e.target.checked)
                  }
                  id="ksdj"
                />
                <Checkbox
                  checked={item.update}
                  onChange={(e) =>
                    handleCheckboxUpdate(index, "update", e.target.checked)
                  }
                  id="ksdj"
                />
                <Checkbox
                  checked={item.delete}
                  onChange={(e) =>
                    handleCheckboxUpdate(index, "delete", e.target.checked)
                  }
                  id="ksdj"
                />
              </span>
            </div>
          );
        })}
        <FormEndBtn
          onSubmit={handleSubmitForm}
          onCancel={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        />
      </form>
    </div>
  );
}

export default PermissionForm;
