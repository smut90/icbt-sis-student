import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Assignments from "@/pages/Assignments.vue";
import Payments from "@/pages/Payments.vue";
import CourseModule from "@/pages/CourseModules.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "home",
        component: Dashboard
      },
      {
        path: "stats",
        name: "student profile",
        component: UserProfile
      },
      {
        path: "course-modules",
        name: "Course Modules",
        component: CourseModule
      },
      {
        path: "assignments",
        name: "assignments",
        component: Assignments
      },
      {
        path: "payments",
        name: "payments",
        component: Payments
      }
    ]
  },
  { path: "*", component: NotFound }
];

export default routes;
