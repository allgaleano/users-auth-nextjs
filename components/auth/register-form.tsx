"use client"
import { CardWrapper } from "@/components/auth/card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/index";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField,
  FormItem, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FormError } from "@/components/form-errorr";
import { FormSuccess } from "@/components/form-success";
import axios from "axios";

export const RegisterForm = () => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess(""); 
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/register", values);
      if (response.data.error) {
        setError(response.data.error);
      } else if (response.data.success) {
        setSuccess(response.data.success);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong.");
      console.error(error);
    }

    form.reset();
  };

  return (
    <CardWrapper
      headerTitle="Register"
      headerDescription="Create a new account"
      backButtonLabel="Already have an account? Login here."
      backButtonRef="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    disabled={loading}
                    type="name"
                    autoComplete="name"
                    placeholder="Your Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    disabled={loading}
                    type="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    disabled={loading}
                    type="password"
                    placeholder="********"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button 
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}