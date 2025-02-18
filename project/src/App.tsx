import { useState, useEffect } from "react";
import { Counter } from "./components/Counter";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import RichTextEditor from "./components/RichTextEditor";

// Define User Type
interface User {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]); // Ensure users is an array of User objects

  useEffect(() => {
    fetchUsers(); // Load users on component mount

    // Prevent users from closing the tab accidentally
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Fetch Users from Backend
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Counter />
            <UserForm onUserAdded={fetchUsers} /> {/* Ensure new users are fetched */}
          </div>
          <div>
            <UserList users={users} />
            <RichTextEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
