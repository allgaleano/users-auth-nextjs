"use client"
import { CardWrapper } from "@/components/auth/card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/index";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField,
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
    form.reset();
  }
  return (
    <CardWrapper
      headerTitle="Login"
      headerDescription="Login to your account"
      backButtonLabel="Don't have an account? Register here."
      backButtonRef="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            LogIn
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}