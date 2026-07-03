import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const setlogin = createAsyncThunk(
  "auth/login",
  async (authInfo: { username?: string; email?: string; password: string }) => {
    try {
      const email = authInfo.email || authInfo.username || "";
      const res = await api.post("/auth", {
        email,
        password: authInfo.password,
      });
      return {
        success: true,
        data: {
          username: email,
          token: res.token,
        },
      };
    } catch (error: any) {
      const message =
        error?.errors?.[0]?.msg || error?.msg || "Invalid credentials";
      return {
        success: false,
        error: message,
      };
    }
  }
);

export const setlogout = createAsyncThunk("auth/logout", async () => {
  try {
    const res = await api.authPost("/logout");
    return true;
  } catch (error) {
    console.error("Error Authentication.");
    return false;
  }
});

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (authInfo: { name: string; email: string; password: string }) => {
    try {
      const res = await api.post("/users", authInfo);
      return {
        success: true,
        data: { token: res.token },
      };
    } catch (error: any) {
      const message =
        error?.errors?.[0]?.msg || error?.msg || "Error creating user";
      return { success: false, error: message };
    }
  }
);
