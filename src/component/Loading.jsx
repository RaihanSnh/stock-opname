import React from 'react';
import { LogoLoading } from '../assets/images/icon/icon';

export const LoadingComponent = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-2">
            <LogoLoading/>
            <span>Loading...</span>
        </div>
    );
};