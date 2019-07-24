import React from "react";

import "./AccountHeader.css";

const accountHeader = props => {
  return (
    <div className={"MyAccount-header"}>
      <h4 className={"Col-6 margin-left-3 MyAccount-page-greeting"}>
        Hey {props.reduxData},
      </h4>
      <ul className={"margin-left-3 Account-navigation-indicator"}>
        <li>
          <div
            onClick={() => props.classNameChangeHandler("category1")}
            className={
              props.stateData.selected === "category1" ? "selected" : null
            }
          >
            My Profile
          </div>
          <div
            className={
              props.stateData.selected === "category1" ? "selected" : null
            }
          />
        </li>
        <li>
          <div
            onClick={() => props.classNameChangeHandler("category2")}
            className={
              props.stateData.selected === "category2" ? "selected" : null
            }
          >
            Family Member
          </div>
          <div
            className={
              props.stateData.selected === "category2" ? "selected" : null
            }
          />
        </li>
        <li>
          <div
            onClick={() => props.classNameChangeHandler("category3")}
            className={
              props.stateData.selected === "category3" ? "selected" : null
            }
          >
            Edit Profile
          </div>
          <div
            className={
              props.stateData.selected === "category3" ? "selected" : null
            }
          />
        </li>
        <li>
          <div
            onClick={() => props.classNameChangeHandler("category4")}
            className={
              props.stateData.selected === "category4" ? "selected" : null
            }
          >
            Account Setting
          </div>
          <div
            className={
              props.stateData.selected === "category4" ? "selected" : null
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default accountHeader;

// import React from "react";

// import "./AccountHeader.css";

// const accountHeader = props => {
//   return (
//     <div className={"MyAccount-header"}>
//       <h4 className={"Col-6 margin-left-3 MyAccount-page-greeting"}>
//         Hey Jun Sung,
//       </h4>
//       <ul className={"margin-left-3 Account-navigation-indicator"}>
//         <li>
//           <div
//             onClick={() => props.classNameChangeHandler("category1")}
//             className={props.stateData.category1 ? "selected" : null}
//           >
//             My Profile
//           </div>
//           <div className={props.stateData.category1 ? "selected" : null} />
//         </li>
//         <li>
//           <div
//             onClick={() => props.classNameChangeHandler("category2")}
//             className={props.stateData.category2 ? "selected" : null}
//           >
//             Family Member
//           </div>
//           <div className={props.stateData.category2 ? "selected" : null} />
//         </li>
//         <li>
//           <div
//             onClick={() => props.classNameChangeHandler("category3")}
//             className={props.stateData.category3 ? "selected" : null}
//           >
//             Edit Profile
//           </div>
//           <div className={props.stateData.category3 ? "selected" : null} />
//         </li>
//         <li>
//           <div
//             onClick={() => props.classNameChangeHandler("category4")}
//             className={props.stateData.category4 ? "selected" : null}
//           >
//             Account Setting
//           </div>
//           <div className={props.stateData.category4 ? "selected" : null} />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default accountHeader;
