import React from 'react';
import './themecustomizer.css';
import { Gear } from '@phosphor-icons/react';

export default function ThemeCustomizerIcon() {
    const showTheme = () => {
        console.log('show theme');
    }

    return (
        <div className='themeIcon' onClick={showTheme}>
            <Gear className='icon' size={24} />
        </div>
    )
}
