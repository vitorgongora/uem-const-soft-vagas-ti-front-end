import React, { useState, useEffect } from "react";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../sass/rich-text-editor.scss";
import draftToHtml from "draftjs-to-html";
import BoldOutlined from "./EditorSVGIcons/Bold.svg";
import ItalicOutlined from "./EditorSVGIcons/Italic.svg";
import StrikethroughOutlined from "./EditorSVGIcons/Strikethrough.svg";
import UnderlineOutlined from "./EditorSVGIcons/Underline.svg";
import BgColorsOutlined from "./EditorSVGIcons/BgColors.svg";
import SmileOutlined from "./EditorSVGIcons/Smile.svg";
import LinkOutlined from "./EditorSVGIcons/Link.svg";
import MenuFoldOutline from "./EditorSVGIcons/MenuFold.svg";
import MenuUnfoldOutline from "./EditorSVGIcons/MenuUnfold.svg";
import UnorderedListOutline from "./EditorSVGIcons/UnorderedList.svg";
import OrderedListOutlined from "./EditorSVGIcons/OrderedList.svg";

const RichTextInput = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    //draftToHtml(convertToRaw(editorState.getCurrentContent())) //gets HTML from text
  };

  return (
    <>
      <Editor
        editorClassName="text-editor"
        localization={{
          locale: "pt",
        }}
        editorState={editorState}
        stripPastedStyles={true}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "textAlign",
            "colorPicker",
            "link",
            "emoji",
            //"image",
            //"remove",
            "list",
          ],
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              //"monospace",
            ],
            bold: { icon: BoldOutlined },
            italic: { icon: ItalicOutlined },
            underline: { icon: UnderlineOutlined },
            strikethrough: { icon: StrikethroughOutlined },
            // monospace: { icon: CodeOutlined },
            // superscript: { icon: superscript, className: undefined },
            // subscript: { icon: subscript, className: undefined },
          },
          blockType: {
            inDropdown: true,
            options: ["Normal", "H1", "H2", "H3", "H4", "H5"],
          },
          textAlign: {
            left: { className: "small-text-icon" },
            center: { className: "small-text-icon" },
            right: { className: "small-text-icon" },
            justify: { className: "small-text-icon" },
          },
          colorPicker: {
            icon: BgColorsOutlined,
          },
          link: {
            link: { icon: LinkOutlined },
            unlink: { className: "small-text-icon" },
          },
          emoji: {
            icon: SmileOutlined,
          },
          // image: {
          //   icon: PictureOutlined,
          // },
          list: {
            options: ["unordered", "ordered"],
            ordered: {
              icon: OrderedListOutlined,
            },
            unordered: {
              icon: UnorderedListOutline,
            },
            indent: {
              icon: MenuUnfoldOutline,
            },
            outdent: {
              icon: MenuFoldOutline,
            },
          },
        }}
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
};

export default RichTextInput;
