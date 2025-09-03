
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom"; // Importe 'Link' e 'useNavigate'

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from "./styles.js";

import { Button } from "../../components/Button/index.jsx";

import Logo from "../../assets/logo.svg";

export function Register() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("o nome é obrigatório"),
    email: yup
      .string()
      .email("digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "a senha deve conter pelo menos 6 caracteres")
      .required("digite uma senha"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "as senhas devem ser iguais")
      .required("confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await toast.promise(
        api.post("/users", {
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        {
          pending: "Criando sua conta...",
          success: "Conta criada com sucesso!",
        }
      );

      // Verifique o status da resposta diretamente do objeto 'response'
      if (response.status === 201) {
        toast.success("Redirecionando para o login...");
        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("E-mail já cadastrado. Faça login para continuar.");
      } else{
         toast.error("Falha na conexão com o servidor.");
      }
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">nome</label>
            <input type="text" id="name" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">email</label>
            <input type="email" id="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">senha</label>
            <input type="password" id="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="confirmPassword">confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar conta</Button>
         
        </Form>
          <p>
          ja possui conta?<Link to="/login"> clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
