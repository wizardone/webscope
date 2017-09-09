# webscope
The app was built using vuejs build in utilities, so should be pretty
straightforward to start it, no additional configuration has beed added.

# Assumptions
Based on the data provided I make the following assumptions:
1. task with `status == 0` is still upcoming
2. task with `status == 1` is completed
3. I could not find any corelation between the dueDate attribute and the
   statuses, so I consider an overdue task every task which has a
dueDate > the current date
4.
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
