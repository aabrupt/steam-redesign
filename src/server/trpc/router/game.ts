import { router, publicProcedure } from '../trpc'
import { z } from 'zod'

export const gameRouter = router({
  recommended: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.game.findMany({
      where: {
        Featured: {
          some: {
            tab: {
              equals: 'RECOMMENDED',
            },
          },
        },
      },
    })

    return items
  }),
  specials: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.game.findMany({
      where: {
        Featured: {
          some: {
            tab: {
              equals: 'SPECIALS',
            },
          },
        },
      },
    })

    return items
  }),
  news: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.game.findMany({
      where: {
        Featured: {
          some: {
            tab: {
              equals: 'NEWS',
            },
          },
        },
      },
    })

    return items
  }),
  top: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.game.findMany({
      where: {
        Featured: {
          some: {
            tab: {
              equals: 'TOP',
            },
          },
        },
      },
    })

    return items
  }),
  popular: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.game.findMany({
      where: {
        Featured: {
          some: {
            tab: {
              equals: 'POPULAR',
            },
          },
        },
      },
    })

    return items
  }),
  tag: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const items = await ctx.prisma.game.findMany({
      where: { name: { equals: input } },
    })
    return items
  }),
})
