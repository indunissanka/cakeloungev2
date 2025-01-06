import React from 'react';

    export function Logo() {
      return (
        <div className="flex items-center space-x-2">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/examples/cake-lounge-logo.png" 
            alt="The Cake Lounge" 
            className="h-16 w-auto"
          />
        </div>
      );
    }
