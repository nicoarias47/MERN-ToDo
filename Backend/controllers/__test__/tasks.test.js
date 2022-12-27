require("dotenv").config();
const request = require("supertest");
const Server = require("../../models/server");
const assert = require("assert");
const express = require("express");

const server = new Server();

describe("GET /tasks", function () {
  beforeAll(async () => {
    await server.connectDB();
  });

  it("Get holis", async () => {
    return await request(server.app)
      .get("/api/v1/test")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty("msg");
        expect(body).toEqual({ msg: "Holis testasdsad" });
      });
  });
});
