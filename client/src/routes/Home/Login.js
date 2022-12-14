import { useForm } from "react-hook-form";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Heading, Text, VStack } from "@chakra-ui/layout";
import { Form, Link as RouterLink } from "react-router-dom";
import { postLogin } from "./api";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		const response = await postLogin(data);
		console.log(response);
	};

	return (
		<VStack>
			<VStack alignItems={"flex-start"} w={400}>
				<Heading>로그인</Heading>
				<Text>Lorem ipsum dolor sit amet, consectetur.</Text>
				<VStack as={"form"} onSubmit={handleSubmit(onSubmit)} w={"100%"}>
					<FormControl w={"100%"}>
						<FormLabel>이메일</FormLabel>
						<Input
							placeholder={"example@mail.com"}
							type="email"
							{...register("email")}
						/>
					</FormControl>
					<FormControl w={"100%"} pb={30}>
						<FormLabel>비밀번호</FormLabel>
						<Input
							type="password"
							placeholder={"비밀번호"}
							{...register("password")}
						/>
					</FormControl>
					<Button type={"submit"} w={"100%"} bg={"#BCCEF8"} color={"white"}>
						로그인
					</Button>
				</VStack>
				<Button color={"blue.300"} variant={"link"}>
					<RouterLink to={"/password"}>비밀번호 찾기</RouterLink>
				</Button>
				<Text>
					계정이 없으신가요?
					<Button color={"blue.300"} variant={"link"}>
						<RouterLink to={"/signup"}>회원가입</RouterLink>
					</Button>
				</Text>
			</VStack>
		</VStack>
	);
};

export default Login;
