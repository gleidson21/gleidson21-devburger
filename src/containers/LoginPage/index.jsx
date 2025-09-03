import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../services/api.js";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.jsx";

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

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useUser();

  const schema = yup.object({
    email: yup
      .string()
      .email("digite um e-mail valido")
      .required("O e-mail é obrigatório"),
    password: yup
      .string()
      .min(6, "a senha deve conter pelo menos 6 caracteres")
      .required("digite uma senha"),
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
      const { data: loginData } = await api.post("/session", {
        email: data.email,
        password: data.password,
      });

      // Chama a função signIn do contexto para salvar o usuário.
      // O UserContext.jsx não precisa mais de navegação.
      signIn(loginData.user, loginData.token);
      toast.success("Login realizado com sucesso!");

      // **A LÓGICA CORRETA DE REDIRECIONAMENTO ESTÁ AQUI:**
      if (loginData?.user?.admin) {
        navigate("/admin/pedidos");
      } else {
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("E-mail ou senha incorretos.");
      } else {
        toast.error("Falha no login. Verifique sua conexão.");
      }
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">entrar</Button>
        </Form>

        <p>
          Não possui conta?<Link to="/cadastro"> clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}