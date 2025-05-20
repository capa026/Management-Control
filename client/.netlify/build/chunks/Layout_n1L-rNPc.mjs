import { c as createComponent, b as createAstro, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot, g as renderScript, h as renderHead } from './astro/server_BVR7uCjW.mjs';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { Icon } from '@iconify-icon/react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useState } from 'react';
/* empty css                                      */

const icons = {"local":{"prefix":"local","lastModified":1747666028,"icons":{"check-list":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"m3 5 2 2 4-4\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"10;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"m3 12 2 2 4-4\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.4s\" dur=\"0.2s\" values=\"10;0\"/></path><path stroke-dasharray=\"10\" stroke-dashoffset=\"10\" d=\"m3 19 2 2 4-4\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.8s\" dur=\"0.2s\" values=\"10;0\"/></path><g fill-opacity=\"0\" stroke-dasharray=\"24\" stroke-dashoffset=\"24\" stroke-width=\"1\"><path d=\"M11.5 5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.3s\" dur=\"0.15s\" values=\"0;0.3\"/><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.2s\" values=\"24;0\"/></path><path d=\"M11.5 12c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.7s\" dur=\"0.15s\" values=\"0;0.3\"/><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.6s\" dur=\"0.2s\" values=\"24;0\"/></path><path d=\"M11.5 19c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-6c-.83 0-1.5-.67-1.5-1.5\"><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"2.1s\" dur=\"0.15s\" values=\"0;0.3\"/><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1s\" dur=\"0.2s\" values=\"24;0\"/></path></g></g>"},"clipboard":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"72\" stroke-dashoffset=\"72\" d=\"M12 3h7v18H5V3z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"72;0\"/></path><path stroke-dasharray=\"12\" stroke-dashoffset=\"12\" stroke-width=\"1\" d=\"M14.5 3.5v3h-5v-3\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"12;0\"/></path><path stroke-dasharray=\"4\" stroke-dashoffset=\"4\" d=\"M9 10h3\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.9s\" dur=\"0.2s\" values=\"4;0\"/></path><path stroke-dasharray=\"6\" stroke-dashoffset=\"6\" d=\"M9 13h5\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.1s\" dur=\"0.2s\" values=\"6;0\"/></path><path stroke-dasharray=\"8\" stroke-dashoffset=\"8\" d=\"M9 16h6\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.3s\" dur=\"0.2s\" values=\"8;0\"/></path></g>"},"data-area-20":{"body":"<g fill=\"none\"><path fill=\"url(#a)\" d=\"M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z\"/><path fill=\"url(#b)\" fill-opacity=\".3\" d=\"M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z\"/><path fill=\"url(#c)\" fill-opacity=\".3\" d=\"M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z\"/><path fill=\"url(#d)\" fill-opacity=\".3\" d=\"M16 17V5.5a.5.5 0 0 0-.812-.39l-4.735 3.787-3.205-1.831a.5.5 0 0 0-.451-.023L3 8.731V17z\"/><path fill=\"url(#e)\" d=\"M2.75 2a.75.75 0 0 1 .75.75v12.5c0 .69.56 1.25 1.25 1.25h12.5a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 15.25V2.75A.75.75 0 0 1 2.75 2\"/><defs><linearGradient id=\"a\" x1=\"-1.5\" x2=\"20\" y1=\"6.5\" y2=\"19\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".164\" stop-color=\"#3bd5ff\"/><stop offset=\".537\" stop-color=\"#9c6cfe\"/><stop offset=\".908\" stop-color=\"#e656eb\"/></linearGradient><linearGradient id=\"c\" x1=\"9.5\" x2=\"9.5\" y1=\"15\" y2=\"17\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#163697\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#163697\"/></linearGradient><linearGradient id=\"d\" x1=\"5\" x2=\"3\" y1=\"13.5\" y2=\"13.5\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#163697\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#163697\"/></linearGradient><linearGradient id=\"e\" x1=\"16.5\" x2=\"2.498\" y1=\"3\" y2=\"23.849\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#70777d\"/><stop offset=\"1\" stop-color=\"#b9c0c7\"/></linearGradient><radialGradient id=\"b\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-10.00002 8.99995 -9.1043 -10.11597 14 7)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".636\" stop-color=\"#0fafff\" stop-opacity=\"0\"/><stop offset=\".962\" stop-color=\"#0067bf\"/></radialGradient></defs></g>","width":20,"height":20},"document":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"64\" stroke-dashoffset=\"64\" d=\"m13 3 6 6v12H5V3z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"64;0\"/></path><path stroke-dasharray=\"14\" stroke-dashoffset=\"14\" stroke-width=\"1\" d=\"M12.5 3v5.5H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"14;0\"/></path></g>"},"home":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M4.5 21.5h15\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.2s\" values=\"16;0\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M4.5 21.5V8m15 13.5V8\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.2s\" dur=\"0.2s\" values=\"16;0\"/></path><path stroke-dasharray=\"28\" stroke-dashoffset=\"28\" d=\"m2 10 10-8 10 8\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.4s\" dur=\"0.4s\" values=\"28;0\"/></path><path stroke-dasharray=\"24\" stroke-dashoffset=\"24\" d=\"M9.5 21.5v-9h5v9\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.4s\" values=\"24;0\"/></path></g>"},"line-md--briefcase":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"64\" stroke-dashoffset=\"64\" d=\"M9 7h11c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"64;0\"/></path><path stroke-dasharray=\"16\" stroke-dashoffset=\"16\" d=\"M9 7V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"16;0\"/></path></g>"},"line-md--close":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"12\" stroke-dashoffset=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m12 12 7 7m-7-7L5 5m7 7-7 7m7-7 7-7\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.3s\" values=\"12;0\"/></path>"},"line-md--close-to-menu-transition":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m5 5 7 7 7-7M5 19l7-7 7 7\"><animate fill=\"freeze\" attributeName=\"d\" dur=\"0.4s\" values=\"M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19\"/></path>"},"monitor":{"body":"<path fill=\"#A1BBC6\" d=\"M628.9 935.1 213.8 797.8l165-130 389.1 107.3z\"/><path fill=\"#678289\" d=\"M767.9 775.1V788l-139 161.3v-14.2z\"/><path fill=\"#BACCD3\" d=\"M628.9 949.3v-14.2L213.8 797.8v13.9z\"/><path fill=\"#8EA8AF\" d=\"m600.1 729 157.2 43.3-117 13.4-39.5 19.1z\"/><path fill=\"#7C99A3\" d=\"m404.9 583.2 31.4 173.6 164.5 48-28.9-170.6z\"/><path fill=\"#678289\" d=\"m598.6 700 16.5 91-14.3 13.8L581.1 703z\"/><path fill=\"#37BBEF\" d=\"M884 792.4 114 584.9v-491l770 162.5z\"/><path fill=\"#678289\" d=\"m909 751.9-25 40.5v-536l26-27.5z\"/><path fill=\"#A1BBC6\" d=\"M910 228.9 151.4 74.7 114 93.9l770 162.5z\"/><path fill=\"#BACCD3\" d=\"M114 93.9v491l770 207.5v-536zm755.6 616.5-746-192.5V106l746 161z\"/><path fill=\"#FFF\" d=\"M850.8 724.5v17l-39.5-11V714z\"/><path fill=\"#113B42\" d=\"M846 727.3v8.9l-29.9-8.4v-8.5z\"/><path fill=\"#FFF\" d=\"M787.6 708v17l-39.5-11v-16.5z\"/><path fill=\"#113B42\" d=\"M784.1 711.1v9.5l-32.5-9.1v-9z\"/><path fill=\"#3ED6FF\" d=\"m853.3 703.6-213-485.8 229.1 49.3-.1 441zM124.9 106v412.8\"/>","width":1024,"height":1024}},"width":24,"height":24}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$4 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "D:/Projects/managementApp/client/node_modules/.pnpm/astro-icon@1.1.5/node_modules/astro-icon/components/Icon.astro", void 0);

const AnimateShow = ({
  condition,
  children,
  initial = { opacity: 0, scale: 0.5 },
  animate = { opacity: 1, scale: 1, transition: "linear" },
  exit = { opacity: 0, scale: 0.5 },
  className
}) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: condition && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial,
      animate,
      exit,
      className: `${className}`,
      children
    }
  ) });
};

const Sidebar = ({ currentPage, openSidebar }) => {
  return /* @__PURE__ */ jsx(
    AnimateShow,
    {
      condition: openSidebar,
      initial: { width: 0 },
      animate: {
        width: "max-content",
        transition: "linear"
      },
      exit: { width: 0 },
      className: "fixed top-0 !bottom-0 overflow-hidden z-[100]",
      children: /* @__PURE__ */ jsxs("aside", { className: "flex md:hidden w-max bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 pb-1 flex-col shadow-lg shadow-black h-full", children: [
        /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-1 text-lg font-bold mb-1 px-3 text-teal-400 text-center border-gray-800 w-full border-b h-12 max-h-12", children: [
          /* @__PURE__ */ jsx(Icon, { icon: "fluent-color:data-area-20" }),
          /* @__PURE__ */ jsx("i", { children: " Management " })
        ] }),
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: "space-y-1\r\n    [&_a]:flex [&_a]:px-3 [&_a]:py-2 [&_a]:text-sm [&_a]:hover:text-teal-400 [&_a]:hover:bg-gray-800 [&_a]:transition-colors [&_a]:duration-200\r\n    [&_a]:items-center [&_a]:gap-2 [&_a]:font-normal",
            children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/",
                  className: `${currentPage == "Dashboard" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "line-md:home" }),
                    "Dashboard"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/EstructuraDeCostos",
                  className: `${currentPage == "Estructura de costos" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "line-md:clipboard-list" }),
                    "Estructura de costos"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/Ventas",
                  className: `${currentPage == "Ventas" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "line-md:briefcase" }),
                    "Ventas"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/Facturas",
                  className: `${currentPage == "Facturas" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "line-md:document" }),
                    "Facturas"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/Inventario",
                  className: `${currentPage == "Inventario" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { icon: "line-md:check-list-3" }),
                    "Inventario"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "mt-auto text-gray-600 text-xs text-center", children: "®Carlos pacheco 2025" })
      ] })
    }
  );
};

const MenuButton = ({ currentPage }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "md:hidden flex items-center justify-center absolute top-0 right-0 h-full border-l aspect-square border-gray-800 select-none cursor-pointer hover:bg-gray-800 hover:text-teal-400 active:bg-gray-800 active:text-teal-400",
        onClick: () => setOpenSidebar(!openSidebar),
        children: openSidebar ? /* @__PURE__ */ jsx(Icon, { icon: "line-md:close-small", width: 28 }) : /* @__PURE__ */ jsx(Icon, { icon: "line-md:close-to-menu-alt-transition", width: 28 })
      }
    ),
    /* @__PURE__ */ jsx(Sidebar, { openSidebar, currentPage })
  ] });
};

const $$Astro$3 = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, iconName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="pr-14 md:pr-0 flex justify-between items-center bg-gray-900 border-b shadow-sm text-xl font-semibold border-gray-800 sticky top-0 left-0 h-12 max-h-12"> <h1 class="text-[18px] font-light flex items-center gap-2 ml-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": iconName })} ${title} </h1> <div class="md:mr-3"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "MenuButton", MenuButton, { "client:load": true, "currentPage": title, "client:component-hydration": "load", "client:component-path": "D:/Projects/managementApp/client/src/components/React/UI/MenuButton", "client:component-export": "default" })} </header>`;
}, "D:/Projects/managementApp/client/src/components/PageHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Projects/managementApp/client/node_modules/.pnpm/astro@5.7.12_@netlify+blobs_da9644ce15ce2c0e87bfd2de8a69fff2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/managementApp/client/node_modules/.pnpm/astro@5.7.12_@netlify+blobs_da9644ce15ce2c0e87bfd2de8a69fff2/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { currentPage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="w-max bg-gray-900 border-r border-gray-800 pb-1 hidden md:flex flex-col shadow-lg"> <h2 class="flex items-center gap-1 text-lg font-bold mb-1 px-3 text-teal-400 text-center border-gray-800 w-full border-b h-12 max-h-12"> ${renderComponent($$result, "Icon", $$Icon, { "name": "data-area-20" })} <i> Management </i> </h2> <nav class="space-y-1
    [&_a]:flex [&_a]:px-3 [&_a]:py-2 [&_a]:text-sm [&_a]:hover:text-teal-400 [&_a]:hover:bg-gray-800 [&_a]:transition-colors [&_a]:duration-200
    [&_a]:items-center [&_a]:gap-2 [&_a]:font-normal"> <a href="/"${addAttribute(`${currentPage == "Dashboard" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "home" })}
Dashboard</a> <a href="/EstructuraDeCostos"${addAttribute(`${currentPage == "Estructura de costos" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`, "class")}>${renderComponent($$result, "Icon", $$Icon, { "name": "clipboard" })}
Estructura de costos</a> <a href="/Ventas"${addAttribute(`${currentPage == "Ventas" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "line-md--briefcase" })}
Ventas
</a> <a href="/Facturas"${addAttribute(`${currentPage == "Facturas" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`, "class")}>${renderComponent($$result, "Icon", $$Icon, { "name": "document" })}
Facturas</a> <a href="/Inventario"${addAttribute(`${currentPage == "Inventario" && "bg-gray-950 text-teal-400 hover:!bg-gray-950"}`, "class")}>${renderComponent($$result, "Icon", $$Icon, { "name": "check-list" })}
Inventario</a> </nav> <h3 class="mt-auto text-gray-600 text-xs text-center">
®Carlos pacheco 2025
</h3> </aside>`;
}, "D:/Projects/managementApp/client/src/components/Sidebar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><title>Management Control</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> <main class="h-dvh grid grid-cols-[1fr] grid-rows-1 md:grid-cols-[auto_1fr]"> ${renderComponent($$result, "Sidebar", $$Sidebar, { "currentPage": title })} <div class="overflow-y-auto"> ${renderSlot($$result, $$slots["default"])} </div> </main> </body></html>`;
}, "D:/Projects/managementApp/client/src/layouts/Layout.astro", void 0);

export { $$Layout as $, AnimateShow as A, $$PageHeader as a };
