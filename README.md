# Employee Management System

This project is compltely React-based frontend Employee Management System that allows admins to assign tasks and employees to manage tasks effectively. Below is a detailed description about each component and function in the project.

## Components

### 0. **SignUp**

Here I didn't include SignUp page, because it include loading the employee data in backend and creating Admin page requires some Authorisation which is not possible with just local Storage.

### 1. **Login.jsx**

- **Working**: It takes inputs emailId and Password and authenticates whether He/She is a valid user or not!
- **Functions**:
  - `handleLogin`: Passed as a prop to validate user credentials and set the logged-in user in localStorage.
  - `submitHandler`: Prevents default form submission and clears input fields after login.

### 2. **AdminDashboard.jsx**

- **Purpose**: Displays the admin dashboard with options to create tasks and view all tasks.
- **Components**:
  - `Header`: Greets the user with hello 'name' and a logout button.
  - `CreateTask`: Allows admins to create new tasks and assign them to employees.
  - `AllTasks`: Displays a list of all tasks assigned to employees.

### 3. **EmployeeDashboard.jsx**

- **Purpose**: Displays the employee dashboard with task statistics and task lists.
- **Components**:
  - `Header`
  - `TaskListNumbers`: Shows Employee statistics like no.of. new, active, completed, failed tasks for that employee.
  - `Tasklist`: Displays each task categorized as active, new, completed, or failed.

### 4. **Header.jsx**

- **Components**: Displays a greeting message and a logout button.
- **Functions**:
  - `logoutUser`: Clears the logged-in user from local storage and resets the user state to null.

### 5. **CreateTask.jsx**

- **Purpose**: Allows admins to create and assign tasks to employees (it is used in Admin Dashboard).
- **Functions**:
  - `submitHandler`: Handles task creation and updates the employee's task list and counts in local storage.

### 6. **AllTasks.jsx**

- **Purpose**: Displays a list of all tasks assigned to employees, it uses map function to get all the list of all the users and the no.of.tasks assigned to them and their status here `AuthContext` is used to fetch employee data and render task details

### 7. **TaskListNumbers.jsx**

- **Purpose**: Displays task statistics for each employee (e.g., new, active, completed, failed tasks) in Big Boxes (Hero Section).

### 8. **Tasklist.jsx**

- **Purpose**: Displays tasks categorized as active, new, completed, or failed. Each Task is shown in different box based on the status of the task the box is colored so that it is easy for the employee to figure what tasks are left for him.
- **Components**:
  - `AcceptTask`: Displays active tasks - Blue.
  - `NewTask`: Displays new tasks - Yellow.
  - `CompleteTask`: Displays completed tasks - Green.
  - `FailedTask`: Displays failed tasks - Red.

### 9. **AcceptTask.jsx**

- **Purpose**: Displays active tasks and allows employees to mark them as completed or failed. Here Ideally when the employee clicks the completed button it should change the color and the no.of. active tasks for that employee should be changed but that requires a lot of backend work which is out of the scope for this front end react project hence that functionality won't work here.
- **Functions**:
  - `completedHandler`: Updates the task status to completed and adjusts task counts (yet to develop).

### 10. **NewTask.jsx**

- **Purpose**: Displays new tasks and allows employees to accept them. The acceptance button also doesn't work here as it requires some backend work which is not feasible with local storage.

### 11. **CompleteTask.jsx**

- **Purpose**: Displays completed tasks. It doesn't have any buttons on it. It just displays the completed tasks.

### 12. **FailedTask.jsx**

- **Purpose**: Displays failed tasks. This component also doesn't have any buttons on it.

### AuthProvider.jsx

- **Purpose**: Provides authentication data (admins and employees) to the application using React Context.
- **Functions**:
  - `useEffect`: Fetches data from local storage and sets it in the context, when ever the logged in user changes this useEffect hook executes.

## Utilities

### localStorage.jsx

- **Purpose**: Handles local storage operations for employees and admins.
- **Functions**:
  - `setLocalStorage`: Saves employees and admins data to local storage.
  - `getLocalStorage`: Retrieves employees and admins data from local storage.

### handleReplacement.jsx

- **Purpose**: Updates the `employees.jsx` file with new employee data.
- **Functions**:
  - Reads the file, replaces the old employee data, and writes the updated data back to the file.

## App.jsx

- **Purpose**: The main application component that manages routing and user state and this is the SPOC for the application.

## How It Works

1. **Authentication**:

   - Users log in via the `Login` component.
   - Credentials are validated using `handleLogin` in `App.jsx` component.

2. **Admin Dashboard**:

   - Admins can create tasks using `CreateTask`.
   - All tasks are displayed using `AllTasks` for each employee.

3. **Employee Dashboard**:

   - Employees can view task statistics via `TaskListNumbers`.
   - Tasks are displayed and categorized using `Tasklist` with different colors for each kind of task.

4. **Task Management**:

   - Tasks can be marked as completed, failed, or accepted using respective components (`AcceptTask`, `CompleteTask`, `FailedTask`, `NewTask`).

5. **Data Storage**:
   - Employee and admin data are stored and retrieved from local storage using `localStorage.jsx`.

I hope this README file provides a overview of the project structure and functionality and note that this is frontend project and don't include too much of backend logics.
