import { login } from "@/lib/api";
import { useUser } from "@/lib/hooks/useUser";
import { Icon } from "@iconify/react";
import { PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const { retry } = useUser();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (value.length > 2 ? null : "შეავსეთ ველი"),
      password: (value) => (value.length > 5 ? null : "loginpasserror"),
    },
  });

  return (
    <>
      <Head>
        <style type="text/css">
          {`
        .mantine-13e8zn2 {
  color: white;
}

.mantine-PasswordInput-input :focus {
  background-color: #1E1E1E;
  color: white;
}

.mantine-PasswordInput-input {
  background-color: #1E1E1E;
  border: none
}
.mantine-titt6i {
  color: white;
}

.mantine-16c6coe:hover {
  background-color: transparent;
}

.mantine-1jdmi3h :hover {
  color: white;
  background: #1E1E1E;
}

.mantine-PasswordInput-wrapper :focus-within {
  border: 1px solid #17687c;
}

.mantine-16c6coe:active {
  background-color: transparent;
}
.mantine-PasswordInput-input :focus{
  border: none;
}
.mantine-9zz0g4 {
  color: white;
}
.mantine-PasswordInput-input {
  border: 1px solid transparent;
}
`}
        </style>
      </Head>
      <div className="flex h-auto min-h-screen w-full justify-center bg-black pt-[50px] pb-10">
        <div className="flex-col items-center justify-center rounded">
          <div className="mt-10 mb-10 text-center">
            <h1 className="text-2xl text-white">authorization</h1>
          </div>
          <form
            onSubmit={form.onSubmit((values) => {
              const { username, password } = values;

              login(username, password)
                .then((res) => {
                  if (res.ok) {
                    return res.json();
                  } else {
                    return res.json().then((data) => {
                      throw new Error(data.message);
                    });
                  }
                })
                .then((res) => {
                  if (res.user) {
                    retry();
                    setTimeout(() => {
                      router.push("/profile"); 
                    }, 150);
                    }
                })
                .catch((error) => {
                  setErrorMessage(error.message);
                });
            })}
          >
            <div className="flex flex-row pt-[9px] pb-[6px]">
              <input
                placeholder="usernamePlaceholde"
                type="text"
                error
                required
                {...form.getInputProps("username")}
                className="w-[260px] rounded-[4px] bg-[#1E1E1E] p-[8px] pl-3 text-sm text-white  outline-none invalid:ring-red-500 focus:ring-1 focus:ring-[#17687c] md:w-[300px]"
              />
            </div>

            <div className="flex flex-col pt-[9px] pb-[6px]">
              <PasswordInput
                placeholder="passwor"
                {...form.getInputProps("password")}
                className="w-[260px] outline-none md:w-[300px]"
              />
              {errorMessage && (
                <div className="mb-4 text-sm text-red-500">
                </div>
              )}
<div className="flex justify-between">
              <Link
                href="/resetpassword"
                className="spacing flex items-center gap-1 pt-2 text-xs tracking-tight text-[#9c9c9c] underline		"
                >
                <Icon
                  icon="material-symbols:lock-reset-sharp"
                  color="#9c9c9c"
                  />
                forgotpass
              </Link>
              <Link href="/register" 
                className="spacing flex items-center md:hidden gap-[2px] pt-2 text-xs tracking-tight text-[#9c9c9c] underline		"
                >
                  <Icon icon="mdi:person-circle" />
                  register
                </Link>
                  </div>
            </div>

            <div className="flex justify-between">
              <button
                className="my-10 flex items-center gap-2 rounded-md bg-[#292929] p-2 px-4 text-sm text-white hover:bg-[#7B66C9] hover:text-[#151515]"
                type="submit"
              >
                login
                <Icon icon="material-symbols:login" />
              </button>

              <Link
                href="/register"
                className="my-10 hidden items-center gap-2 rounded-md bg-[#292929] p-2 px-4 text-sm text-white hover:bg-[#7B66C9] hover:text-[#151515] md:flex"
              >
                register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
