import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FormRegister from "../home/formRegister";
import FormLogin from "../home/formLogin";


const TabLogin = () => {
  return (
    <>
      <div>

        <Tabs>
          <TabList>
            <Tab>Register</Tab>
            <Tab>Login</Tab>
          </TabList>

          <TabPanel>
            <FormRegister  />
          </TabPanel>
          <TabPanel>
            <FormLogin  />
          </TabPanel>
        </Tabs>

      </div>

    </>
  )




}

export default TabLogin;