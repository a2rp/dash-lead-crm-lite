// AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

/* Lazy pages */
const Dashboard = lazy(() => import("./pages/dashboard"));
const Leads = lazy(() => import("./pages/leads"));
const LeadDetails = lazy(() => import("./pages/leadDetails"));
const Pipeline = lazy(() => import("./pages/pipeline"));
const FollowUps = lazy(() => import("./pages/followUps"));
const Settings = lazy(() => import("./pages/settings"));
const NotFound = lazy(() => import("./pages/notFound"));

/* MUI fallback */
function PageLoader() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress size={42} thickness={4} />
        </div>
    );
}

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* Redirect root to dashboard */}
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/leads/:id" element={<LeadDetails />} />
                <Route path="/pipeline" element={<Pipeline />} />
                <Route path="/follow-ups" element={<FollowUps />} />
                <Route path="/settings" element={<Settings />} />

                {/* Fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
