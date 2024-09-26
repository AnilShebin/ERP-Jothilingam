"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Define the schema specifically for sign-in
    const formSchema = authFormSchema("sign-in");

    // Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            staff_id: "",
            password: "",
        },
    });

    // Define a submit handler
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            // Implement sign-in logic here
            // const response = await signIn({
            //   email: data.email,
            //   password: data.password,
            // });

            // if(response) router.push('/');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className="cursor-pointer flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Jothilingam logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                        Jothilingam
                    </h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        Sign In
                        <p className="text-16 font-normal text-gray-600">
                            Please enter your details
                        </p>
                    </h1>
                </div>
            </header>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput
                        control={form.control}
                        name="staff_id"
                        label="Staff ID"
                        placeholder="Enter your staff ID"
                    />
                    <CustomInput
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                    />

                    <div className="flex flex-col gap-4">
                        <Button type="submit" disabled={isLoading} className="form-btn">
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                                    Loading...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>

        </section>
    );
};

export default AuthForm;
