// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import InputMask from "react-input-mask";

// function CustomMaskInput() {
//   const { control, handleSubmit, errors, reset } = useForm();

//   const onSubmit = data => {
//     console.log(JSON.stringify(data));
//     reset();
//   };

//   return (
//     <div className="form-container">
//       <div className="form-content">
//         <div className="left-side">
//           <div className="phone-details">
//             <div className="topic">Phone number</div>
//             <div className="text-one">+7 775 672 0505</div>
//           </div>
//           <div className="email-details">
//             <div className="topic">Email</div>
//             <div className="text-one">qazmozpol@gmail</div>
//           </div>
//         </div>
//       </div>
//       <div className="right-side">
//         <div className="topic-text">Заказать обратный звонок</div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="input-box">
//             <Controller
//               name="name"
//               control={control}
//               maskPlaceholder="Name"
//               type="text"
//               rules={{ required: "Поле обязательно к заполнению" }}
//             />
//           </div>
//           <div className="input-box">
//             <Controller
//               name="phone"
//               control={control}
//               as={<InputMask mask="+7 (999)-999-9999" />}
//               rules={{ required: "this is required" }}
//             />
//           </div>
//           <div className="button">
//               <input type="submit" value="Отправить"/>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CustomMaskInput;