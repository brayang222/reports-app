import { User } from "@/types/user";
import { useEffect, useState } from "react";

export const useUserTable = () => {
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleSaveUser = async () => {
    setEditingUser(null);
    fetchUsers();
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const getRoleBadgeVariant = (role: string) => {
    return role === "ADMIN" ? "default" : "secondary";
  };
  return {
    users,
    getRoleBadgeVariant,
    handleEditUser,
    editingUser,
    handleSaveUser,
    handleCancelEdit,
    setEditingUser,
  };
};
