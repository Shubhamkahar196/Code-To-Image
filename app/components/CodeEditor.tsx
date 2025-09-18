"use client";
import React, { useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

//languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { getExtension, initialCode } from "../utils/utilities";
import Image from "next/image";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

function CodeEditor({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CodeEditorProps) {
  const [width, setWidth] = React.useState(1000);
  const [height, setHeight] = React.useState<number | null>(400);
  const [title, setTitle] = React.useState("App");
  const [code, setCode] = React.useState(initialCode);
  const [fontSize, setFontSize] = React.useState(16);

  const [extension, setExtension] = React.useState(".js");

  useEffect(() => {
    // Update the extension when the language changes
    setExtension(getExtension(language));
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the title without the extension
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

  const handleResize = (evt: MouseEvent | TouchEvent, direction: string, ref: HTMLElement) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    setFontSize(newWidth < 640 ? 14 : 16);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Responsive min and max widths for Resizable
  const getMinWidth = () => (width < 640 ? 300 : 510);
  const getMaxWidth = () => (width < 640 ? width - 40 : 1000);

  return (
    // Resizable container for code editor with responsive min/max widths and height
    <Resizable
      minHeight={466}
      minWidth={getMinWidth()}
      maxWidth={getMaxWidth()}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: background,
      }}
    >
      <div
        className="code-block"
        style={{
          padding: currentPadding,
        }}
      >
        {/* Resize handles */}
        <div
          className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 
            rounded-full bg-slate-300 hover:bg-slate-50"
        ></div>
        <div
          className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full 
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>

        {/* Code title bar with file name input and icon */}
        <div
          className="
            code-title h-[52px] px-4 flex items-center justify-between
            bg-black bg-opacity-80"
        >
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a] "></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772] "></div>
          </div>

          <div className="input-contol w-full">
            <input
              type="text"
              value={`${title}${extension}`}
              onChange={(e) => handleTitleChange(e)}
              className="w-full text-[hsla(0,0%,100%,.6)]  outline-none font-medium 
                text-center bg-transparent"
              style={{
                lineHeight: "1.8rem",
              }}
            />
          </div>

          <div
            className="icon flex justify-center items-center p-1 bg-black
               bg-opacity-30 rounded-sm"
          >
            {/* <img src={icon} className="w-[33px]" alt="" /> */}
               
              <Image src={icon} width={33} height={33} alt="" /> 
          </div>
        </div>
        {/* Ace code editor with responsive font size and height */}
        <AceEditor
          value={code}
          name="UNIQUE_ID_OF_DIV"
          fontSize={fontSize}
          theme={theme}
          mode={language.toLocaleLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
