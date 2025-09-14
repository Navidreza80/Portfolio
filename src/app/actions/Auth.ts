"use server";

import {
  deleteServerCookie,
  getServerCookie,
  setServerCookie,
} from "@/helper/server-cookie";
import prisma from "@/lib/prisma";

export async function registerUser(
  email: string,
  password: string,
  name?: string
) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error("Email already registered");

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    // Auto login after signup
    await setServerCookie("userId", user.id);
  } catch (error) {
    throw error;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email, password } });
    if (!user) throw new Error("Invalid credentials");

    await setServerCookie("userId", user.id);

    return user;
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  await deleteServerCookie("userId");
}

export async function getCurrentUser() {
  const cookie = await getServerCookie("userId");
  if (!cookie) return null;
}

export async function getUserById(userId: string) {
  if (!userId) return null;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, role: true, name: true },
  });

  return user;
}
