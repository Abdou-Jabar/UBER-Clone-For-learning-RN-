import { icons, images } from "@/constants";
import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButtom from "@/components/CustomButtom";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-black font-JakartaSemiBold text-2xl absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>
        <View className="mx-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButtom
            className="mt-6"
            title="Sign up"
            onPress={onSignInPress}
          />
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Dont have an account ? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
