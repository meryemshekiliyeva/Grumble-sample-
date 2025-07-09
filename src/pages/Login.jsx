import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container mx-auto max-w-sm py-20 px-4">
      <div className="bg-card p-8 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold tracking-tight text-center">
          Login to Grumble
        </h1>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-border bg-card shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-border bg-card shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              placeholder="••••••••"
              required
            />
          </div>
            <div className="text-sm text-right">
                <Link to="/forgot-password" className="font-medium text-primary hover:underline">
                    Forgot password?
                </Link>
            </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-8 py-3 font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-primary hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;