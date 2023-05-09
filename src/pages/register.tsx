import { useUser } from "@/lib/hooks/useUser";
import { Checkbox, Input, InputBase, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import * as api from "lib/api"
export default function Register() {
const router = useRouter();
const { retry } = useUser();
const [username, setUsername] = useState("");
const [usernameAvailable, setUsernameAvailable] = useState(null);
  
const form = useForm({
    initialValues: {
      password: "",
      confirm_password: "",
      username: "",
      terms: false,
    },
    validate: {
      username: (value) =>
        value.length > 2 ? null : "აუცილებელია ველის შევსება .!",
      password: (value) =>
        value.length > 5 ? null : "პაროლი უნდა იყოს სულ მცირე 6 ასო",
      confirm_password: (value, values) =>
        value === values.password ? null : "პაროლები არ ემთხვევა",
        terms: (value) => value ? null : "You must accept the terms and conditions",
          
    },
  });

  const handleUsernameChange = async (event: any) => {
    const value = event.target.value;
    setUsername(value);

    if (value) {
      const response = await api.checkUsernameExists(value);

      if (response.ok) {
        const data = await response.json();
        setUsernameAvailable(data.success);
      }
    }
  };

    return(
        <>
        <Head>
          <style type="text/css">
            {` 
    .mantine-Input-input:hover { 
      border: 1px solid #1f8ba6;
    }
  
    .mantine-Checkbox-input	{
      backgroundcolor: black
    }
    .mantine-1137jyz:checked {
      background-color: black;
      border: 1px solid black
    }
  `}
          </style>
        </Head>
          <div className="flex h-auto min-h-[95vh] justify-center bg-black py-[50px] pb-10">
            <div className="h-fit max-w-4xl flex-col items-center justify-center rounded bg-white px-5 pb-24 md:w-[70%] md:px-24">
              <div className="mt-10 mb-10 text-center">
                <h1 className="text-2xl text-[#742361]">register</h1>
              </div>
              <form
                onSubmit={form.onSubmit((values) => {
                  const { username, password,  } = values;
                  
                  api
                    .register(password, username)
                    .then((r: { json: () => any }) => r.json())
                    .then((data: { user: any }) => {
                      if (data.user) {
                        retry();
                        router.push("/profile");
                      }
                    });
                })}
              >
                <div className="flex flex-row items-center py-[9px]">
                  <label className="w-[45%] text-sm">username</label>
                  
                  <div className="w-[55%]" >
  
                  {username && (
                    <div>
                      {usernameAvailable === false ? (
                        <Input.Error>usernametaken</Input.Error>
                        ) : ("")}
                    </div>
                  )}
  
                  <InputBase
                    error={usernameAvailable === false}
                    onKeyUp={handleUsernameChange}
                    {...form.getInputProps("username")}
                    type="text"
                    className="w-[100%]"
                    />
                    </div>
                </div>
  
  
                <div className="flex flex-row items-center py-[9px]">
                  <label className="w-[45%] text-sm">password</label>
                  <PasswordInput
                    {...form.getInputProps("password")}
                    className="w-[55%]"
                    withAsterisk
                  />
                </div>
  
                <div className="flex flex-row items-center pt-[8px] pb-[7px]">
                  <label className="w-[45%] pr-2 text-sm">
                    repeatpass
                  </label>
                  <PasswordInput
                    {...form.getInputProps("confirm_password")}
                    className="w-[55%]"
                    withAsterisk
                  />
                </div>
  
  
                <div className="pt-5" >
                  <Checkbox
                  checked={form.values.terms}
                  onChange={(event) => form.setFieldValue("terms", event.target.checked)} />
                </div>
  
                <button
                  className="mt-10 rounded-md bg-[#292329] p-2 text-white hover:bg-[#7B66C9] hover:text-[#151515]"
                  type="submit">
                  completeregister
                </button>
              </form>
            </div>
          </div>
      </>
      )
}