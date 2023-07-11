import styled from "styled-components";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import SuccessFlash from "./flash_message/SuccessFlash";
import ErrorFlash from "./flash_message/ErrorFlash";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
`;
const Form = styled.form`
  width: 50%;
  height: auto;
  padding: 50px;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  margin-top: 90px;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 5px;
  border: 1px solid #b1bec9;
  border-radius: 7px;
  padding: 5px 30px;
`;
const Btn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  background-color: skyblue;
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 800;
  border: none;
  color: #116cbc;
  cursor: pointer;
  transition: all ease 700ms;
  &:active {
    transform: scale(0.98);
  }
`;
const FormInputControl = styled.div`
  margin: 20px 0;
  color: #878c91;
`;
const Label = styled.label``;
export const ValidationError = styled.p`
  font-size: 12px;
  color: red;
  letter-spacing: 2px;
  padding: 3px;
`;
function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  function onSubmit(data) {
    console.log(data);
    mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    });
  }
  const signUp = async (data) => {
    return await axios.post(
      "http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/signin",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (variables) => signUp(variables),
    {
      onSuccess(data, variables, context) {
        console.log(data);
        navigate("/user-dashboaerd");
      },
      onError(error) {
        console.log(error);
      },
    }
  );
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });
    }
  }, [formState, reset]);
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 style={{ textAlign: "center" }}>Login To Account</h3>
          {
            <SuccessFlash display={isSuccess}>
              Registered Successfully
            </SuccessFlash>
          }
          {<ErrorFlash display={isError}> Error Please try Again</ErrorFlash>}
          <FormInputControl>
            <Label>Email</Label>
            <Input {...register("email", { required: true })} />
            {errors.email?.type === "required" && (
              <ValidationError> Required </ValidationError>
            )}
          </FormInputControl>
          <FormInputControl>
            <Label>Password</Label>
            <Input {...register("password", { required: true })} />
            {errors.password?.type === "required" && (
              <ValidationError> Required </ValidationError>
            )}
          </FormInputControl>
          <Btn>Submit</Btn>
        </Form>
      </Container>
    </>
  );
}

export default LoginPage;
