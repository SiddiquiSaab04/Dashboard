import Form from "../../components/form/Form";
import "../../App.css";
import {
  loginSchema,
  type LoginFormValues,
} from "../../components/schema/LoginSchema";
import type { FieldProps } from "../../components/interface/Field";
import { useLogin } from "../../components/hooks/useLogin";
import { useNavigate } from "react-router";

const Login = () => {
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const fields: FieldProps<LoginFormValues>[] = [
    { name: "username", label: "username", type: "text" },
    { name: "password", label: "password", type: "password" },
  ];

  return (
    <>
      <div
        className="min-h-screen w-full mx-auto relative"
        style={{
          background: "url(/src/assets/authBg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100dvh",
          minWidth: "100dvw",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full absolute  z-10">
          <div className=" border border-primary w-[500px] px-24 py-20  rounded-lg  login-form-shadow">
            <h1 className="text-4xl font-bold text-primary w-full text-center">
              Login
            </h1>
            <div className=" flex flex-col justify-center ">
              <Form
                fields={fields}
                schema={loginSchema}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
