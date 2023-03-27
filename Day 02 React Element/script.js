// const h2 = React.createElement('h2',{className: "subheading"},"Hello React")

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h2)

const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement(
        "section",
         { key: 1 },
    [
      React.createElement(
        "p", 
        { key: 1 }, 
        "lorem ipsem "
      ),
      React.createElement(
        "div",
        { key: 2 ,style: {textAlign: "center"}},
        [
            React.createElement("span", {key: 1}, "Hello Span"),
            React.createElement('img',{key: 2,style: {width: 200},src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"})
        ]
      ),
    ]),
    React.createElement(
        "section",
        {key: 2},
        [
            React.createElement('form',{key:1},[
                React.createElement('label',{key:2, htmlFor:'uname'},'User Name'),
                React.createElement('input',{key:1,id:"uname",name:'uname'}),
            ])
        ]
    )
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);


const test = document.querySelector("#root");

console.dir(test.style)