import React from "react";
import { Controller, useForm } from "react-hook-form";

const def = {};
export default function ReactForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
    getValues,
    resetField,
    reset,
  } = useForm();
  //set deafault = tra DOc
  // resetField(); // tra ve gia tri default
  // reset({ username: "thang" , name :'hihi' });   // bản nâng cấp set nhiều value

  // console.log(222222, errors);
  //   console.log(watch("username")); // watch input value by passing the name of it

  // const watchName = watch("username");
  // const watchGender = watch("gender");
  const allForm = getValues("username");
  console.log({ allForm });
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

  const handleSetName = (item) => {
    setValue("name", item);
  };

  const getForm = () => {
    const form = watch();
    console.log("day la form", form);
  };
  return (
    <div>
      <div onClick={getForm}>Gui cho tao gia tri form</div>
      <div onClick={onClickSetUserName}>
        Clilck vao thi set value cho input username
      </div>

      <div>ReactForm</div>
      <div>
        <form onSubmit={handleSubmit(layGiaTriForm)}>
          {/* controller */}

          <Controller
            rules={{
              required: "yeu cau click name button",
              validate: (value, formValues) => {
                if (value.id === 1 && formValues?.username === "a") {
                  return "xin chao";
                }
                return false;
                // console.log("hihi", value, formValues);
              },
            }}
            name="name_button"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => {
              console.log("day la value : ", value);
              // onChange(item)   =   setValue("name_button",   item)
              return (
                <div style={{ margin: "20px" }}>
                  {[
                    { id: 1, value: "Thang" },
                    { id: 2, value: "Suc" },
                    { id: 3, value: "Duc" },
                  ].map((item) => (
                    <button
                      onClick={() => onChange(item)}
                      style={{ margin: "20px" }}
                      key={item.id}
                    >
                      {item.value}
                    </button>
                  ))}
                </div>
              );
            }}
          />
          {errors.name_button && <span> {errors?.name_button?.message}</span>}
          {/* end controller */}
          <input placeholder="test thoai" {...register("username")} />
          {/* register your input into the hook by invoking the "register" function */}
          {/* <input placeholder="test thoai" {...register("username")} />
          {errors.username && <span> {errors?.username?.message}</span>}

          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <div>input : </div> */}
          {/* include validation with required or other standard HTML validation rules */}
          {/* {watchName === "1" && (
            <input {...register("password", { required: true })} />
          )} */}
          {/* {watchGender === "other" && <div>day la other</div>}
          <input
            {...register("password", {
              required: "loi pass",
              maxLength: 10,
              message: "loi apss",
            })}
          />
          {errors.password && <span> {errors?.password?.message}</span>} */}

          <button type="submit">Click nao</button>
        </form>
      </div>
    </div>
  );
}
