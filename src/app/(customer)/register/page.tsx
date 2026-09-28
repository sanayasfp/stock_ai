import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import routes from "@/configs/route.config";

export function RegisterForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Créer un compte</CardTitle>
        {/* <CardDescription>
          Créez un compte pour accéder à votre espace personnel
        </CardDescription> */}
      </CardHeader>
      <CardContent> 
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Prénom(s)</Label>
              <Input id="first-name" placeholder="Ibrahim" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Nom</Label>
              <Input id="last-name" placeholder="Soro" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@exemple.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-confirm">Confirmer le mot de passe</Label>
            <Input id="password-confirm" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Créer un compte
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous avez déja un compte ?{" "}
          <Link href={routes.login.path} className="underline">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function RegisterPage() {
  return (
    <div className="container-fluid h-screen">
      <div className="flex items-center justify-center h-full p-2">
        <RegisterForm />
      </div>
    </div>
  );
}
