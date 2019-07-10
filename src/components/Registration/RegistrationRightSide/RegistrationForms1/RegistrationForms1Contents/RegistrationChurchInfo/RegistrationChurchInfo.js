import React from "react";

const registrationChurchInfo = props => {
  return (
    <div>
      <h5 className={"Register-h5-title"}>Your church information</h5>

      <form className={"Registration-form Regist-form-3"}>
        <div className={"Regist-form-item1"}>
          <label>
            Select your position in church
            <select name="positionInChurch">
              <option>Select from the list</option>
              <option value="position1">position 1</option>
              <option value="position2">position 2</option>
              <option value="position3">position 3</option>
            </select>
          </label>
        </div>
        <div className={"Regist-form-item2"}>
          <label>
            Select your training level
            <select name="trainingLevel">
              <option>Select from the list</option>
              <option value="none-training">none</option>
              <option value="1cha">1 차</option>
              <option value="2cha">2 차 </option>
              <option value="3cha">3 차</option>
            </select>
          </label>
        </div>
        <div className={"Regist-form-item3"}>
          <label>
            Select your church
            <select name="selectYourChurch">
              <option>Select from the list</option>
              <option value="church1">church 1</option>
              <option value="church2">church 2</option>
              <option value="church3">church 3</option>
              <option value="church4">church 4</option>
              <option value="church5">church 5</option>
              <option value="church-not-listed">Church not listed</option>
            </select>
          </label>
        </div>
        <div className={"Regist-form-item4"}>
          <label>
            Type your church
            <input
              type="text"
              name="typeYourChurch"
              placeholder="Type your church"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default registrationChurchInfo;

// import React from "react";

// const registrationChurchInfo = props => {
//   return (
//     <div>
//       <h5 className={"Register-h5-title"}>Your church information</h5>
//       <div>
//         <form className={"Registration-form"}>
//           <div className={"Registration-form-row1"}>
//             <label>
//               Select your position in church
//               <select name="positionInChurch">
//                 <option>Select from the list</option>
//                 <option value="position1">position 1</option>
//                 <option value="position2">position 2</option>
//                 <option value="position3">position 3</option>
//               </select>
//             </label>

//             <label style={{ marginRight: "0" }}>
//               Select your training level
//               <select name="trainingLevel">
//                 <option>Select from the list</option>
//                 <option value="1cha">1 차</option>
//                 <option value="2cha">2 차 </option>
//                 <option value="3cha">3 차</option>
//               </select>
//             </label>
//           </div>

//           <div className={"Registration-form-row2"}>
//             <label>
//               Select your church
//               <select name="selectYourChurch">
//                 <option>Select from the list</option>
//                 <option value="church1">church 1</option>
//                 <option value="church2">church 2</option>
//                 <option value="church3">church 3</option>
//                 <option value="church4">church 4</option>
//                 <option value="church5">church 5</option>
//               </select>
//             </label>
//           </div>

//           <div className={"Registration-form-row3"}>
//             <label>
//               Type your church
//               <input type="text" name="typeYourChurch" />
//             </label>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default registrationChurchInfo;
