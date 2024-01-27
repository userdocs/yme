import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { renderToStaticMarkup } from "react-dom/server";

const MyToolTips = ({ children }) => {
  const input = children.split(":");
  const Directory = "tooltips";
  const FilePath = require("@site/docs/" +
    Directory +
    "/" +
    input[1] +
    ".md").default;

  const Url = "./" + Directory + "/" + input[1];
  const Htmlified = renderToStaticMarkup(<FilePath />);
  const TooltipBody = Htmlified.replace(/<a/g, '<a target="_blank"');
  const Sections = TooltipBody.split("<hr/>");
  const CssID = input[1].replace(/-/g, "_");

  return (
    <>
      <a
        id={CssID + "_link"}
        data-tooltip-position-strategy="absolute"
        data-tooltip-id={CssID + "_link"}
        data-tooltip-wrapper="span"
        data-tooltip-place="top"
        href={Url}
        target="_blank"
        className="my_tooltip_url"
        data-tooltip-html={
          "<span>" +
          Sections[0] +
          "</span>" +
          '<span id="ShowMore" style="display: none">' +
          Sections[1] +
          "</span>" +
          "<span style='justify-content: center;display: flex;position: relative;'>" +
          "<input onclick='document.getElementById(\"ShowMore\").classList.toggle(\"grow\");this.value=\"Close\"' 'type='button' value='Show more' id='myButton1' style='text-align: center;width: 100px; border: 0px;color: black;background-color: #61ffca;padding: 5px 10px 5px 10px;' />" +
          "</span>"
        }
      >
        {input[0]}
      </a>
      <Tooltip
        className="my_tooltip"
        noArrow="true"
        id={CssID + "_tooltip"}
        float="true"
        clickable="true"
        anchorSelect={"#" + CssID + "_link"}
        wrapper="span"
      ></Tooltip>
    </>
  );
};

export default MyToolTips;