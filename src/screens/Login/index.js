import React, { useCallback } from "react";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { TextInput, StatusBar, Alert } from "react-native";
import colors from "../../styles/colors";
import { Content, Label, TextInputLogin } from "./styles";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Login({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setLogin({ ...login, email: e });
  };

  const handlePassword = (e) => {
    setLogin({ ...login, password: e });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça Login</TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-Mail</Label>
        <TextInputLogin
          autoCompleteType="email"
          placeholderTextColor={colors.lightTransparent}
          placeholder="Digite o seu email"
          onChangeText={handleEmail}
        />
        <Label>Senha</Label>
        <TextInputLogin
          autoCompleteType="password"
          placeholderTextColor={colors.lightTransparent}
          placeholder="Digite a sua senha"
          secureTextEntry={true}
          onChangeText={handlePassword}
        />
        <Button
          handlePress={handleSubmit}
          text="Entrar"
          disabled={login.email === "" || login.password === ""}
          style={{ width: "96%" }}
        />
      </Content>
    </Container>
  );
}

export default Login;
