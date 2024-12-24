"use client"

import { SignUpForm } from '@/components/auth/sign-up-form'
import { SignInForm } from '@/components/auth/sign-in-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';

export default function AuthPage() {
  return (
    <div className='min-h-screen  w-full flex justify-center items-center'>
      <div className="w-full max-w-[600px] px-[10px] py-[20px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-[20px]">ZZ-Front</CardTitle>
            <CardDescription>Do login or create an account to continue.</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="account">
              <TabsList className="w-full">
              <TabsTrigger value="password" className="w-full">Sign In</TabsTrigger>
              <TabsTrigger value="account" className="w-full">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent className="pt-[10px]" value="password">
                <SignInForm />
              </TabsContent>
              <TabsContent className="pt-[10px]" value="account">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
