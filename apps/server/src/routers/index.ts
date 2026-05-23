import { router, publicProcedure } from "../trpc/trpc";

export const appRouter = router({
  health: publicProcedure.query(() => {
    return {
      status: "ok",
      message: "tRPC Backend Working",
    };
  }),
});

export type AppRouter = typeof appRouter;