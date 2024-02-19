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

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log(values);
    form.reset();
  }
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
                    type="password"
                    placeholder="********"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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