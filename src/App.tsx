import { DndContext, DragEndEvent, DragStartEvent, KeyboardSensor, PointerSensor, TouchSensor, closestCenter, useSensor } from '@dnd-kit/core';
import React, { useState } from 'react';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { ImageGallery } from './types/globaltypes';
import { initialImageData } from './data';
const App = () => {

  const [active,setActive]=useState<ImageGallery | null >(null)

  const [gallerydata,setGaleryData]=useState(initialImageData)


  const sensors=useSensor(

    useSensor(PointerSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter:sortableKeyboardCoordinates
    }),
    useSensor(TouchSensor)


    const handleDragStart=(event:DragStartEvent)=>{

      const {id}=event.active
      if(!id) return

      const currentitem=gallerydata.find((item)=>item.id===id)

      setActive(currentitem || null)

    }

    const handledragEnd=(event:DragEndEvent)=>{
        setActive(null)
        const {active,over}=event;
        if(!over) {
          return
        }
        if(active.id !== over.id){
          setGaleryData((items)=>{
              const oldindex=items.findIndex((item))
              const newindex=items.findIndex((item));

          })
        }
    }
  )
  return (


      <div className='min-h-screen'>
          <div className='container flex flex-col items-center'>
                 <div className='bg-white my-8 rounded-lg shadow max-w-5xl grid divide-y'>
                  <header className='text-2xl '>
                    showcase
                  </header>

                  <DndContext
                  
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragStart={handleDragStart}
                  onDragEnd={handledragEnd}>

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
