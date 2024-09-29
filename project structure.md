📦 ERP Project
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ app
│  ├─ auth                 # Auth related pages & layout (sign-in)
│  │  ├─ layout.tsx
│  │  ├─ sign-in
│  │  │  └─ page.tsx
│  ├─ admin                # Admin-specific pages
│  │  ├─ add-staff
│  │  │  └─ page.tsx
│  │  ├─ dashboard         # Dashboard specific pages
│  │  │  └─ page.tsx
│  │  ├─ attendance
│  │  │  └─ page.tsx
│  │  ├─ edit-staff
│  │  │  └─ page.tsx
│  │  ├─ staff
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  ├─ staff                # Staff-specific pages
│  │  ├─ dashboard
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  ├─ globals.css          # Global styles
│  └─ layout.tsx           # Root layout (used across app)
├─ components              # Reusable components (UI & business logic)
│  ├─ admin                # Admin-specific components
│  │  ├─ AddStaffForm.tsx
│  │  ├─ AddStaffTable.tsx
│  │  ├─ EditStaffForm.tsx
│  │  ├─ StaffRegisterForm.tsx
│  ├─ staff                # Staff-specific components
│  │  ├─ AttendanceHistory.tsx
│  │  ├─ StaffDashboard.tsx
│  │  ├─ StaffStats.tsx
│  │  ├─ TaskList.tsx
│  ├─ shared               # Reusable components shared across admin & staff
│  │  ├─ AuthForm.tsx
│  │  ├─ Attendance.tsx
│  │  ├─ Dashboard.tsx
│  │  ├─ DataTable.tsx
│  │  ├─ Dropdown.tsx
│  │  ├─ Profile.tsx
│  │  ├─ Sidebar.tsx
│  ├─ ui                   # Generic UI components (buttons, inputs, etc.)
│  │  ├─ Button.tsx
│  │  ├─ Card.tsx
│  │  ├─ Input.tsx
│  │  ├─ LoadingIndicator.tsx
│  │  ├─ Table.tsx
│  │  └─ Toast.tsx
│  ├─ charts               # All chart-related components
│  │  ├─ DoughnutChart.tsx
│  │  ├─ AnimatedCounter.tsx
│  │  └─ StaffCharts.tsx
├─ constants               # Constant values (like roles, API URLs, etc.)
│  └─ index.ts
├─ hooks                   # Custom React hooks
│  └─ use-toast.ts
├─ lib                     # Utility functions and helpers (validation, etc.)
│  ├─ db.ts                # MySQL database connection (Node.js API routes)
│  ├─ api.ts               # API-related utilities (server-side fetching)
│  └─ utils.ts             # Miscellaneous helper functions
├─ middleware              # API routes & middleware logic for backend
│  ├─ authMiddleware.ts     # JWT/Auth validation middleware
│  └─ logger.ts            # Logging middleware for requests
├─ next.config.mjs         # Next.js config
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs      # PostCSS config
├─ public                  # Public assets (images, fonts, icons)
│  ├─ fonts
│  └─ icons
├─ tailwind.config.ts      # Tailwind CSS config
├─ tsconfig.json           # TypeScript config
├─ types                   # Global TypeScript types
│  └─ index.d.ts
└─ node-api                # Node.js API folder (backend)
   ├─ controllers          # Controllers for handling business logic
   │  ├─ staffController.ts
   │  └─ authController.ts
   ├─ models               # Models for database (using ORM)
   │  ├─ staffModel.ts
   │  └─ attendanceModel.ts
   ├─ routes               # API routes (to be imported in next-api)
   │  ├─ authRoutes.ts
   │  └─ staffRoutes.ts
   └─ server.ts            # Main server entry point for Node.js (Express)
