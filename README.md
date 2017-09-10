# webscope
The app was built using vuejs built in utilities, so should be pretty
straightforward to start it, no additional configuration has beed added.
The steps are listed below

# Assumptions
Based on the data provided I make the following assumptions:
1. task with `status == 0` is still upcoming
2. task with `status == 1` is completed
3. I could not find any corelation between the dueDate attribute and the
   statuses, so I consider an overdue task every task which has a
dueDate > the current date and is not completed
4. The json file provided has not been "normalized" for the needs of a
   store like `Redux` or in this case `Vuex`. I general I would
transform the data a little bit following some best practices, which
would allow for a more optimized data retrieval, but I do not consider
changing the json structure as part of the task. I assume that if the
document is provided in a certain way it needs to stay like that.
5. I tried to use some plugins for form validations, but I could not get
   them to work for some reason, so I did a fallback to some very basic
custom valiations.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
