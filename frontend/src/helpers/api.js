const URL = "http://localhost:8080";
const types = ["task", "subtask"];

class Api {
  static async getAllLists(from = 0, until = 10, onSucces = null) {
    try {
      const resp = await fetch(
        `${URL}/api/v1/tasks?from=${from}&until=${until}`
      );
      const data = await resp.json();

      if (onSucces) onSucces();

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  // body: title, description?,deadline?
  static async createList(body, onSucces = null) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const resp = await fetch(`${URL}/api/v1/tasks`, requestOptions);
      const data = await resp.json();

      if (onSucces) onSucces();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  static async getListOrTask(type, id, onSucces = null) {
    if (!types.includes(type)) {
      return console.error(`The types valid are ${types}`);
    }

    try {
      const resp = await fetch(`${URL}/api/v1/${type}/${id}`);
      const data = await resp.json();

      if (onSucces) onSucces();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createTask(body, id, onSucces = null) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const resp = await fetch(`${URL}/api/v1/subtasks/${id}`, requestOptions);
      const data = await resp.json();

      if (onSucces) onSucces();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  static async completeTask(type, id, onSucces = null) {
    if (!types.includes(type)) {
      return console.error(`The types valid are ${types}`);
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const resp = await fetch(`${URL}/api/v1/${type}/${id}`, requestOptions);
      const data = await resp.json();

      if (onSucces) onSucces();

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteOne(type, id, onSucces = null) {
    if (!types.includes(type)) {
      return console.error(`The types valid are ${types}`);
    }

    const requestOptions = {
      method: "DEL",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const resp = await fetch(`${URL}/api/v1/${type}/${id}`, requestOptions);
      const data = await resp.json();

      if (onSucces) onSucces();

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Api;
