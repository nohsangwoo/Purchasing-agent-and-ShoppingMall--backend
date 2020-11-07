import { prisma } from '../../../generated/prisma-client';

// Computed Fields

export default {
  User: {
    posts: ({ id }) => prisma.user({ id }).posts(),
    carts: ({ id }) => prisma.user({ id }).carts(),
    OrderContents: ({ id }) => prisma.user({ id }).OrderContents(),
    Shops: ({ id }) => prisma.user({ id }).Shops(),
    addresses: ({ id }) => prisma.user({ id }).addresses(),
    following: ({ id }) => prisma.user({ id }).following(),
    followers: ({ id }) => prisma.user({ id }).followers(),
    likes: ({ id }) => prisma.user({ id }).likes(),
    comments: ({ id }) => prisma.user({ id }).comments(),
    rooms: ({ id }) => prisma.user({ id }).rooms(),
    postsCount: ({ id }) =>
      prisma
        .postsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
    cartsCount: ({ id }) =>
      prisma
        .cartsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
    followingCount: ({ id }) =>
      prisma
        .usersConnection({ where: { followers_some: { id } } })
        .aggregate()
        .count(),
    followersCount: ({ id }) =>
      prisma
        .usersConnection({ where: { following_none: { id } } })
        .aggregate()
        .count(),

    fullName: (parent) => {
      // parent는 fullName을 호출한 resolver의 값을 가짐
      // fullName은 resolver가 아니라 resolver의 결과값 안에 들어가는 값중 하나를 만든것
      // resolver는 여러 결과값이 나오는 명령어의 더 포괄적인 상위개념
      /*
      ex)
      user{
        id
        username
        firstName
        lastName
        fullName
      }
      여기서 user 는 resolver
      */
      // console.log(parent) 이걸로 확인하면 개념 잡을수있음  ;
      return `${parent.firstName} ${parent.lastName}`;
    },

    // following했는지 확인여부
    isFollowing: async (parent, _, { request }) => {
      // parent는 호출한 resolver의 값을 가짐(요청당한 대상의 정보)
      // request는 요청한 client의 정보를 가짐(로그인한사람의 정보)

      // UserProfile을 요청한 사람이
      // 이 UserProfile을 팔로잉 했는가를 확인하려함

      // request는 요청자의 정보를 나타냄
      // parent는 말하자면 keiko를 호출하면 keiko의대한 정보가 나오고
      // sangwoo를 호출하면 sangwoo에대한 정보가 나옴

      // 따라서 request가 sangwoo가 로그인한 상태에서 keiko를 호출하면 isFoolowing은 false를 반환하며
      // request가 sangwoo가 로그인한 상태에서 sangwoo를 호출하면 isFollowing의 반환값은 true를 반환함

      // 더쉽게 설명하면 request는 로그인한 사람의 정보
      // parent는 내가 무엇인가 호출한 resolver의 정보
      // isFollowing은 request와 parent를 비교하여 같으면 true(following중이다) 다르면 false(following중이 아니다)를 반환해줌

      const { user } = request;
      const { id: parentId } = parent;
      try {
        // 사용자가 선택한 profile이 prisma db
        // user 테이블의 id와 following부분을 비교하는것
        return prisma.$exists.user({
          AND: [
            {
              // prisma user 테이블의 id db 에 요청자의 id(request))가 존재하는지 확인
              id: user.id,
            },
            {
              // prisma user 테이블의 following중에 parentId가 존재한다면
              following_some: {
                id: parentId,
              },
            },
          ],
        });
      } catch {
        return false;
      }
    },

    // 요청하는 사람(request)와, client에서 요청(prarent)이 같으면
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
  },
};
