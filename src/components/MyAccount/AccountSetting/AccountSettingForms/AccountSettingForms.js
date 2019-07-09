import React from "react";

const accountSettingForms = props => {
  return (
    <div className={"Account-setting-form"}>
      <h5 className={"Account-edit-title"}>
        Your account
        <span
          className={props.stateData.password ? null : "editing"}
          onClick={() => props.editHandler("password", "showEditSavedPassword")}
        >
          Edit
        </span>
      </h5>

      <form className={"Edit-form form-5"}>
        <div>
          <label>
            Old password
            <input
              type="password"
              disabled={props.stateData.accountSettingEditing}
            />
          </label>
        </div>
        <div>
          <label>
            New password
            <input
              type="password"
              disabled={props.stateData.accountSettingEditing}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm new password
            <input
              type="password"
              disabled={props.stateData.accountSettingEditing}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default accountSettingForms;

// const accountSettingForms = props => {
//   return (
//     <div className={"Account-setting-form"}>
//       <div>
//         <h5 className={"Account-edit-title"}>
//           Your account
//           <span
//             className={props.stateData.password ? null : "accountSettingEditing"}
//             onClick={() =>
//               props.editHandler("password", "showEditSavedPassword")
//             }
//           >
//             Edit
//           </span>
//         </h5>
//       </div>
//       <form className={"Edit-form"}>
//         <div className={"Edit-form-row1"}>
//           <label>
//             Old password
//             <input type="password" disabled={props.stateData.accountSettingEditing} />
//           </label>
//           <label>
//             New password
//             <input type="password" disabled={props.stateData.accountSettingEditing} />
//           </label>
//           <label>
//             Confirm new password
//             <input type="password" disabled={props.stateData.accountSettingEditing} />
//           </label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default accountSettingForms;
