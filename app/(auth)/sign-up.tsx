import { icons, images } from "@/constants";
import { Image, ScrollView, Text, View } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButtom from "@/components/CustomButtom";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSignUpPress = () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-black font-JakartaSemiBold text-2xl absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="mx-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            onPress={onSignUpPress}
          />
          <OAuth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account ? </Text>
            <Text className="text-primary-500">Log in</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
