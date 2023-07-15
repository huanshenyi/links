import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "src/server/api/trpc";
import { Prisma } from '@prisma/client'

const defaultExampleSelect = Prisma.validator<Prisma.ExampleSelect>()({
  id: true,
  content: true,
})

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  create: publicProcedure
  .input(z.object({id: z.string().uuid().optional(), content: z.string()}))
  .mutation(async ({ ctx, input }) => {
    const post = await ctx.prisma.example.create({
      data: input,
      select: defaultExampleSelect,
    });
    return post;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.prisma.example.findMany();
    return post;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
