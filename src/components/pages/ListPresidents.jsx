import React from 'react'
import presidents from '../../presidents'

export default function ListPresidents() {
  return (
    <div>
      <h1>List of American Presidents</h1>
      <table className="table-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>George Washington</td>
            <td><a href="#">Detail</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>John Adams</td>
            <td><a href="#">Detail</a></td>
          </tr>
          <tr>
            <td>...</td>
            <td>TODO: display all presidents</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
