"use client"

import React, { useState } from 'react'
import { Resizable } from 're-resizable'
import AceEditor from 'react-ace'

// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

interface CodeEditorProps{
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string
}

function CodeEditor ({
    languages,
    theme,
    icon,
    background,
    currentPadding,
}: CodeEditorProps) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);

  return (
    <Resizable
    minHeight={466}
    minWidth={500}
    maxWidth={1000}
    defaultSize={{
      width: width,
      height: height || 500
    }}
    >

      <div className='code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80'>
        <div className='flex items-center gap-1'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
          <div className='w-3 h-3 rounded-full bg-blue-700'></div>
        </div>
      </div>

     <AceEditor 
     name="UNIQUE_CODE_ID"
     fontSize={16}
     theme=''
     mode=''
     showGutter = {false}
     wrapEnabled = {true}
     height='500'
     showPrintMargin = {false}

     className='ace-editor-container'

     /> 

    </Resizable>
  )
}

export default CodeEditor