
const SideNavUrls = {
	dashboard: "/dashboard",
	employeeManagement: "/dashboard/employee_management",
	payroll: "/dashboard/payroll",
	taskManagement: "/dashboard/task_management",
	leaveManagement: "/dashboard/leave_management",
	policyManagement: "/dashboard/policy_management",
	locations: "/dashboard/locations",
  };
  

export const ROUTES = {
	home: "/",
	login: "/login",
	signup: "/create-account",
	forgot_password: "/forgot-password",
	forgot_password_otp_verify: "/forgot-password/verify-otp",
	reset_password: "/reset-password",
	verifyOtp: "/verify-otp",
	...SideNavUrls
};
