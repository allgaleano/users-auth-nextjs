import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ 
  label,
  href,
}: BackButtonProps) => {
  return (
    <Button
      variant="outline"
      className="font-normal w-full text-muted-foreground"
      size="sm"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}