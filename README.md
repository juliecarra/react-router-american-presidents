# React Router American Presidents

## To start the project

To start the project, clone the project (fork it before and clone the forked version if you want to push later), install the packages and start the React applicaiton:

```
git clone https://github.com/ironhack-dev-squad-144/react-router-american-presidents
cd react-router-american-presidents
npm install
npm start
```


## Information about React Router

### Official documetation

Official documention: https://reacttraining.com/react-router/web/guides/)


### Installation
```
$ npm install react-router-dom
```


### Example of Import

```javascript
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
```


### List of React Router Components

<table>
  <tr>
    <th> Component </th>
    <th> Description </th>
    <th width="30%"> Main Props </td>
  </tr>
  <tr>
    <td><code>&lt;BrowserRouter&gt;</code></td>
    <td>Router Component that should wrap your application</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Route&gt;</code></td>
    <td>When the url matches its props <code>path</code>, it renders its content</td>
    <td>
      <ul>
        <li><code>path</code>: string</li>
        <li><code>component</code>: Component</li>
        <li><code>render</code>: func</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Switch&gt;</code></td>
    <td>Group <code>&lt;Route&gt;</code> together and display maximum 1</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Link&gt;</code></td>
    <td>Replace the <code>&lt;a&gt;</code> tag of HTML in React Router</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
        <li><code>to</code>: object</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;NavLink&gt;</code></td>
    <td>A special version of the <code>&lt;Link&gt;</code> that will add styling attributes to the rendered element when it matches the current URL</td>
    <td>
      <ul>
        <li><code>activeClassName</code>: string</li>
        <li><code>activeStyle</code>: object</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Redirect&gt;</code></td>
    <td>Will navigate to a new location</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
      </ul>
    </td>
  </tr>
</table>
