import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider/authProvider";
import simpleRestProvider from 'ra-data-json-server'
import { UserList } from "./users/UserList";

const dataProvider = simpleRestProvider('https://comicadigitalbackend.up.railway.app/api');
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
