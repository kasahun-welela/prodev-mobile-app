import { styles } from "@/styles/_joinstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.signupgroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/Logo.png")} />
        </View>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to Create account.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.formControl}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.secondaryButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButtonGroup}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.secondaryButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.subText}>I have an account?</Text>
          <Text style={[styles.signupSubTitleText, { marginLeft: 10 }]}>
            <Link href="/signin"> Login now</Link>
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
