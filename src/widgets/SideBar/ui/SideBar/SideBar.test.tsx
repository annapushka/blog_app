/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('render SideBar', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
