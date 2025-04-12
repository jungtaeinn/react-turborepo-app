import type { Meta } from '@storybook/react';
import { Input, InputGroup } from '@/common/modules/_ui/input/Input';
import { FolderIcon } from '@heroicons/react/24/outline';
import { Button } from '@/common/modules/_ui/button/Button';
import { Checkbox } from '@/common/modules/_ui/checkbox/Checkbox';

export default {
  title: 'login/login',
  parameters: {
    layout: 'fullscreen',
  },
  docs: {},
} as Meta;

export const login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-dvh p-5 bg-background">
      <div className="w-full max-w-md lg:p-8 lg:border lg:border-solid lg:border-gray-400/50 lg:rounded-xl lg:shadow">
        <h1 className="mb-1 text-foreground text-xl font-bold">Login</h1>
        <p className="mb-6 text-foreground/80 text-sm">Enter your email below to login to your account</p>
        <div className="flex flex-col">
          <InputGroup className="flex-col">
            <Input type="email" placeholder="name@example.com" aria-label="Enter Email Address" className="w-full" />
            <Input type="password" placeholder="Password" aria-label="Enter Password" className="w-full mt-4" />
          </InputGroup>
          <InputGroup className="justify-between mt-3">
            <label htmlFor="rememberMe" className="text-foreground/80 text-xs font-medium">
              <Checkbox id="rememberMe" className="mr-2" />
              Remember Me
            </label>
            <Button variant="text" className="p-0 text-foreground/80 text-xs underline">
              Forgot Password?
            </Button>
          </InputGroup>
          <Button className="w-full mt-6">Login</Button>
          <div className="mt-2 text-foreground/80 text-sm text-center">
            Don&apos;t have an account?
            <Button variant="text" className="text-foreground/80 underline">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
