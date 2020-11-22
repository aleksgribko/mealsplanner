import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import background from "../../assets/cc7a9390d98e3aa648e97b37f287ed5c8cb5d742.png";
import logo from "../../assets/logo.png";
import * as Linking from "expo-linking";
import { Ionicons } from "@expo/vector-icons";
import ButtonComp from "../Shared/Button";

export default function Login() {
  const [email, setEmail] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogIn = () => {
    alert("s");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.background}
    >
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.wrapOverlay}>
          <Image source={logo} style={styles.logo}></Image>
          <Text>Welcome!</Text>
          <View style={styles.formWrap}>
            <View style={styles.wrapMainContent}>
              <View>
                <View>
                  <Text>Login</Text>

                  <View style={styles.formContent}>
                    <View style={styles.form}>
                      <TextInput
                        style={styles.textField}
                        textContentType={"emailAddress"}
                        autoCompleteType={"email"}
                        id="email"
                        name="email"
                        placeholder={"Email"}
                        onChangeText={(e) => {
                          // setError(false);
                          setEmail(e);
                        }}
                      />
                      <View style={styles.passwordFieldWrap}>
                        <View style={{ flex: 6 }}>
                          <TextInput
                            style={styles.textField}
                            textContentType={"password"}
                            secureTextEntry={showPassword ? false : true}
                            autoCompleteType={"password"}
                            id="password"
                            placeholder={"Mot de passe"}
                            name="Mot de passe"
                            onChange={(e) => {
                              // setError(false);
                              setPassword(e);
                            }}
                          />
                        </View>
                        {showPassword ? (
                          <Ionicons
                            style={{ flex: 1, marginLeft: 5 }}
                            name="md-eye-off"
                            size={24}
                            color="black"
                            onPress={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        ) : (
                          <Ionicons
                            style={{ flex: 1, marginLeft: 5 }}
                            name="md-eye"
                            size={24}
                            color="black"
                            onPress={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        )}
                      </View>
                      <ButtonComp
                        text="Login"
                        action={handleLogIn}
                        isLoading={isLoading}
                      />
                    </View>

                    {/* <div
                    style={
                      error
                        ? { display: "block", marginBottom: "20px" }
                        : { display: "none" }
                    }
                  >
                    <Alert severity="error">{error}</Alert>
                  </div> */}
                    {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className={
                        isLoginIn ? "button_loading" : "button_secondary"
                      }
                      onClick={(e) => (isLoginIn ? null : handleLogIn(e))}
                    >
                      {content.LOGIN}
                    </div>
                    <Link
                      href="/auth?type=forgotPassword"
                      as="/auth?type=forgotPassword"
                    >
                      <div className={styles.forgot_password}>
                        {content.PASSWORD_FORGOT}
                      </div>
                    </Link>
                  </div> */}

                    {/* <div>
        <div className={styles.devider} />

        <SocialSignIn />

        <div className={styles.devider} />
        <div className={styles.link_wrap}>{content.NO_ACCOUNT}</div>
  
      </div> */}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "relative",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  wrapOverlay: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    // alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
  },
  logo: {
    width: 300,
    height: 80,
    marginTop: 25,
  },
  formWrap: {
    marginVertical: 25,
    flex: 2,
    width: 300,
  },
  wrapMainContent: {
    borderRadius: 8,
    backgroundColor: "white",
    padding: 30,
    shadowColor: "rgba(209, 209, 209, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formContent: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    // flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  textField: {
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 36,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
  },
  passwordFieldWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
