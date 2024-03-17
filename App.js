const parent=React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},
[React.createElement("h1",{key:"1"},"Hello World"),
React.createElement("h2",{key:"2"},"This is React ")]))

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)