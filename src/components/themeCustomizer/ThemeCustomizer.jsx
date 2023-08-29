import React from 'react';
import {X} from '@phosphor-icons/react';

export default function ThemeCustomizer() {
  return (
    <div>
      this is ThemeCustomizer
      <X onClick={() => console.log('close theme customizer')} size={24} />
    </div>
  )
}
