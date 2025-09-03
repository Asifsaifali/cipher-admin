import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Users, 
  Search, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX,
  Crown,
  Calendar,
  Filter
} from "lucide-react";

interface User {
  id: string;
  username: string;
  email: string;
  joinDate: string;
  status: "active" | "inactive" | "suspended";
  subscription: "free" | "premium" | "enterprise";
  daysRemaining: number;
  lastActive: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    username: "johndoe",
    email: "john.doe@example.com",
    joinDate: "2024-01-15",
    status: "active",
    subscription: "premium",
    daysRemaining: 23,
    lastActive: "2 hours ago"
  },
  {
    id: "2",
    username: "sarahsmith",
    email: "sarah.smith@example.com",
    joinDate: "2024-02-20",
    status: "active",
    subscription: "enterprise",
    daysRemaining: 45,
    lastActive: "5 minutes ago"
  },
  {
    id: "3",
    username: "mikejohnson",
    email: "mike.johnson@example.com",
    joinDate: "2024-03-10",
    status: "inactive",
    subscription: "free",
    daysRemaining: 0,
    lastActive: "3 days ago"
  },
  {
    id: "4",
    username: "emmawilson",
    email: "emma.wilson@example.com",
    joinDate: "2024-01-28",
    status: "active",
    subscription: "premium",
    daysRemaining: 12,
    lastActive: "1 hour ago"
  },
  {
    id: "5",
    username: "alexbrown",
    email: "alex.brown@example.com",
    joinDate: "2024-03-05",
    status: "suspended",
    subscription: "free",
    daysRemaining: 0,
    lastActive: "1 week ago"
  }
];

export function UsersManagement() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      case "suspended":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Suspended</Badge>;
    }
  };

  const getSubscriptionBadge = (subscription: User["subscription"]) => {
    switch (subscription) {
      case "free":
        return <Badge variant="outline">Free</Badge>;
      case "premium":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Premium</Badge>;
      case "enterprise":
        return <Badge className="bg-accent/10 text-accent border-accent/20">Enterprise</Badge>;
    }
  };

  const handleEditUser = (userId: string) => {
    console.log("Edit user:", userId);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleToggleStatus = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === "active" ? "inactive" : "active" }
        : user
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Users Management</h1>
            <p className="text-muted-foreground text-lg">Manage and monitor all platform users</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl">Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by username or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-background/50 border border-border rounded-md text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="glass-card border-border/50 animate-fade-in">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Users List ({filteredUsers.length})</CardTitle>
            <Button className="bg-gradient-primary hover:bg-primary-dark">
              <UserCheck className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-muted-foreground">Username</TableHead>
                  <TableHead className="text-muted-foreground">Email</TableHead>
                  <TableHead className="text-muted-foreground">Join Date</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Subscription</TableHead>
                  <TableHead className="text-muted-foreground">Days Remaining</TableHead>
                  <TableHead className="text-muted-foreground">Last Active</TableHead>
                  <TableHead className="text-muted-foreground text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-border/50 hover:bg-muted/30 transition-colors">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">
                            {user.username.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium text-card-foreground">{user.username}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {user.subscription === "premium" && <Crown className="w-3 h-3 text-primary" />}
                        {user.subscription === "enterprise" && <Crown className="w-3 h-3 text-accent" />}
                        {getSubscriptionBadge(user.subscription)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={`text-sm ${user.daysRemaining < 7 && user.daysRemaining > 0 ? 'text-warning' : 
                        user.daysRemaining === 0 ? 'text-muted-foreground' : 'text-card-foreground'}`}>
                        {user.daysRemaining > 0 ? `${user.daysRemaining} days` : "Expired"}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass-card border-border/50">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-border/50" />
                          <DropdownMenuItem 
                            onClick={() => handleEditUser(user.id)}
                            className="hover:bg-muted/50"
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleToggleStatus(user.id)}
                            className="hover:bg-muted/50"
                          >
                            {user.status === "active" ? (
                              <>
                                <UserX className="mr-2 h-4 w-4" />
                                Deactivate
                              </>
                            ) : (
                              <>
                                <UserCheck className="mr-2 h-4 w-4" />
                                Activate
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-border/50" />
                          <DropdownMenuItem 
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}