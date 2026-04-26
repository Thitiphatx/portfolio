import Home from "~/pages/home/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Thitiphat Kunrong" },
    { name: "Portfolio", content: "Portfolio | Thitiphat Kunrong" },
  ];
}

export default function HomePage() {
  return <Home />;
}
