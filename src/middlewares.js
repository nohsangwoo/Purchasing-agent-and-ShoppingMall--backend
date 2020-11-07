export const isAuthenticated = (request) => {
  // request가 user를 가지고있지 않으면 Error를 던질꺼임
  // 로긴상태인지 아닌지 확인하는 작업
  if (!request.user) {
    throw Error('You need to log in to perform this action');
  }
  return;
};
