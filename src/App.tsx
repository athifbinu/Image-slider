import { DndContext } from '@dnd-kit/core';
import React from 'react';

const App = () => {
  return (
      <div className='min-h-screen'>
          <div className='container flex flex-col items-center'>
                 <div className='bg-white my-8 rounded-lg shadow max-w-5xl grid divide-y'>
                  <header className='text-2xl '>
                    showcase
                  </header>

                  <DndContext>
                    <div>
                      image galleryx
                    </div>
                  </DndContext>
                 </div>
          </div>
      </div>
  );
}

export default App;
