import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    getExchangeRate: async (_, args) => {
      const { id } = args;
      return prisma.exchangeRate({ id });
    },
  },
};
