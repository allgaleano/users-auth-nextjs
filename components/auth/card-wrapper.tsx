"use client"

import { 
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription: string;
  backButtonLabel: string;
  backButtonRef: string;
}

export const CardWrapper = ({
  children,
  headerTitle,
  headerDescription,
  backButtonLabel,
  backButtonRef,
}: CardWrapperProps) => {
  return (
    <Card className="w-[500px]">
      <CardHeader className="text-center">
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton 
          label={backButtonLabel}
          href={backButtonRef}	
        />
      </CardFooter>
    </Card>
  )
}