import React from "react";
import { useForm } from "react-hook-form";

export default function ReactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
  } = useForm();
  console.log(222222, errors);
    console.log(watch("username")); // watch input value by passing the name of it

  const watchName = watch("username");
  const watchGender = watch("gender");

  const layGiaTriForm = (data) => {
    console.log(11111, data);
  };

  const onClickSetUserName = () => {
    // setValue("username", "THANG day ne");
    setError("username", {
      type: "taovuathemtype",
      message: "Tao vua click cho m bi ERROR",
    });
  };
  
  return (
    <div>
      <div onClick={onClickSetUserName}>
        Clilck vao thi set value cho input username
      </div>

      <div>ReactForm</div>
      <div>
        <form onSubmit={handleSubmit(layGiaTriForm)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input placeholder="test thoai" {...register("username")} />
          {errors.username && <span> {errors?.username?.message}</span>}

          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <div>input : </div>
          {/* include validation with required or other standard HTML validation rules */}
          {/* {watchName === "1" && (
            <input {...register("password", { required: true })} />
          )} */}
          {watchGender === "other" && <div>day la other</div>}
          <input
            {...register("password", {
              required: "loi pass",
              maxLength: 10,
              message: "loi apss",
            })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span> {errors?.password?.message}</span>}

          <button type="submit">Click nao</button>
        </form>
      </div>
    </div>
  );
}
