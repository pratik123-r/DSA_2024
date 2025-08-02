const JSON = [
  {
    type: "div",
    props: { id: "hello", class: "foo" },
    children: [
      { type: "h1", children: "HELLO" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar" }, children: "World" },
        ],
      },
    ],
  },
  {
    type: "section",
    props: { id: "hello-2", class: "foo-2" },
    children: [
      { type: "h1", children: "HELLO-2" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar-2" }, children: "World" },
        ],
      },
    ],
  },
];

function jsonToHtml(data) {
  const element = document.createElement(data.type);
  for (prop in data.props) {
    element.setAttribute(prop, data.props[prop]);
  }
  if (Array.isArray(data.children)) {
    for (let child of data.children) element.appendChild(jsonToHtml(child));
  } else {
    element.innerText = data.children;
  }
  return element;
}

function root(json) {
  const fragment = document.createDocumentFragment();
  for (data of json) {
    fragment.append(jsonToHtml(data));
  }
  return fragment;
}

console.log(root(JSON));

