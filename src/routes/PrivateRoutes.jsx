import React from 'react';
import { Navigate, useOutletContext, Outlet } from 'react-router-dom';

export default function PrivateRoutes({}) {
    const context = useOutletContext();

    return <Outlet context={context} />;
}
