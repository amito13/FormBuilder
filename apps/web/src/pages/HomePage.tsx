import { trpc } from "../lib/trpc";

export default function HomePage() {
  const healthQuery = trpc.health.useQuery();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Form Builder SaaS
        </h1>

        <p className="text-xl">
          {healthQuery.data?.message}
        </p>
      </div>
    </div>
  );
}