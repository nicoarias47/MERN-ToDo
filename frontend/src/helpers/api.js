class Api {
  static async getList(url, from = 0, until = 10) {
    const resp = await fetch(`${url}/api/v1/tasks?from=${from}&until=${until}`);
    const data = await resp.json();

    return data;
  }
}

export default Api;
