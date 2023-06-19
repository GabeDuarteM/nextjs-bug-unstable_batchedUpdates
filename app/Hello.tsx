"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Hello = () => {
  return <QueryClientProvider client={queryClient}>Hello</QueryClientProvider>;
};

export default Hello;
