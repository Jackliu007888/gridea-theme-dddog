
const App = (Vue, renderData) => {
  return new Vue({
    data: {
      ...renderData,
      msg: 'accc'
    },
    template: `
    <header class="header">
    {{msg}}
    </header>    `
  })
}

export default App