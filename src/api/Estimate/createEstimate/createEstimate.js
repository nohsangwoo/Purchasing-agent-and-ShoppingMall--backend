import { prisma } from '../../../../generated/prisma-client';
import { isAuthenticated } from '../../../middlewares';

export default {
  Mutation: {
    createEstimate: async (_, args, { request }) => {
      // isAuthenticated로 보호해줌
      isAuthenticated(request);

      // const { user } = request;
      const { OrderContentId, country } = args;

      // console.log(args);

      try {
        await prisma.createEstimate({
          OrderContent: {
            connect: {
              id: OrderContentId,
            },
          },
          country: country,
          visible: true,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
