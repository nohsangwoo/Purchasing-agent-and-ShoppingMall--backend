import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      return prisma.post({ id });
    },
  },
};

/*
# graphql test
{
  seeFullPost(id: "ck9v0pzo8cep30911dv2drnzf") {
    location
    caption
    user{
      id
      username
    }
    comments{
      id
      text
    }
    user{
      username
    }
    likeCount
  }
}

*/
