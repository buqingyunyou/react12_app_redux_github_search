import axios from "axios";

export const setLoading = (flag) => {
  return {
    type: "SET_LOADING",
    data: flag,
  };
};

// 定义异步action
// 1.在外面定义action工厂函数
export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    data: users,
  };
};

// 2.定义包装同步action工厂函数的异步函数
export const getSearch = (searchName) => {
  return async (dispatch) => {
    try {
      // console.log("发送请求开始");
      // 异步操作，发送请求
      const res = await axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${searchName}`,
      });
      // 处理响应数据
      const users = res.data.items.map((user) => ({
        key: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
      }));

      console.log("users", users);
      // 分发action对象（通过dispatch分发action对象，通过action工厂函数调用产生action对象）
      dispatch(setUsers(users));
    } catch (error) {
      alert("网络连接错误");
      setLoading(false);
      console.log(error);
    }
  };
};
