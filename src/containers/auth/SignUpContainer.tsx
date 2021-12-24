import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignUpComponent from "src/components/auth/SignUpComponent";
import { RequestSignUp } from "src/store/auth/types";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validateSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[a-z]+[a-z\d]$/g,
      "소문자로 시작하는 소문자 또는 숫자로만 입력해주세요."
    )
    .min(5, "최소 5자 이상 입력해주세요.")
    .max(15, "최대 15자 이하 입력해주세요.")
    .required(""),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
      "대,소문자 숫자 조합으로 8~20자 사이로 입력해주세요."
    )
    .required(""),
  passwordConfirm: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  ),
  name: Yup.string().required(""),
  organization: Yup.string().required(""),
  email: Yup.string().email("이메일 형식에 맞지 않습니다.").required(""),
  phone: Yup.string()
    .matches(/^\d{2,3}-\d{3,4}-\d{4}$/, "(-)을 구분자로 적어주세요.")
    .required(""),
});

function SignUpContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestSignUp>({
    resolver: yupResolver(validateSchema),
    mode: "onTouched",
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RequestSignUp> = React.useCallback(
    (data) => {
      // alert(JSON.stringify(data, null, "\t"));

      navigate("/");
    },
    [navigate]
  );

  return (
    <SignUpComponent
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  );
}

export default SignUpContainer;
