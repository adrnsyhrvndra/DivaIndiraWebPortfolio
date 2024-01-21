import * as React from "react";
import { ReactDOM } from "react";
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import { AllSkills } from "./skillsDivas/allSkill";
import { HardSkills } from "./skillsDivas/hardSkill";
import { LingustikSkills } from "./skillsDivas/lingustikSkill";
import { SoftSkills } from "./skillsDivas/softSkill";


export const TabsSkill = () => {
  
      return (
            <>
                  <div aria-label="tabs-skill-dan-kemampuan">
                        <Tabs aria-label="tabs-list" defaultValue={1} selectionFollowsFocus>
                              <TabsList className="tabsList">
                                    <Tab 
                                          slotProps={{
                                                root: ({ selected }) => ({
                                                      className: `font-sans ${
                                                      selected
                                                            ? 'tabsChildPanelListActive'
                                                            : 'tabsChildPanelList hover:tabsChildPanelListActive'
                                                      }`,
                                                }),
                                          }}                                   
                                          aria-label="tabs-all-skills active"
                                          value={1}
                                    >
                                          All Skills
                                    </Tab>
                                    <Tab 
                                          slotProps={{
                                                root: ({ selected }) => ({
                                                      className: `font-sans ${
                                                      selected
                                                            ? 'tabsChildPanelListActive'
                                                            : 'tabsChildPanelList hover:tabsChildPanelListActive'
                                                      }`,
                                                }),
                                          }}                                   
                                          aria-label="tabs-all-skills active"
                                          value={2}
                                    >
                                          Hard Skills
                                    </Tab>
                                    <Tab 
                                          slotProps={{
                                                root: ({ selected }) => ({
                                                      className: `font-sans ${
                                                      selected
                                                            ? 'tabsChildPanelListActive'
                                                            : 'tabsChildPanelList hover:tabsChildPanelListActive'
                                                      }`,
                                                }),
                                          }}                                   
                                          aria-label="tabs-all-skills active"
                                          value={3}
                                    >
                                          Soft Skills
                                    </Tab>
                                    <Tab 
                                          slotProps={{
                                                root: ({ selected }) => ({
                                                      className: `font-sans ${
                                                      selected
                                                            ? 'tabsChildPanelListActive'
                                                            : 'tabsChildPanelList hover:tabsChildPanelListActive'
                                                      }`,
                                                }),
                                          }}                                   
                                          aria-label="tabs-all-skills active"
                                          value={4}
                                    >
                                          Lingustik & Hobby
                                    </Tab>
                              </TabsList>
                              <TabPanel value={1}>
                                    <AllSkills/>
                              </TabPanel>
                              <TabPanel value={2}>
                                    <HardSkills/>
                              </TabPanel>
                              <TabPanel value={3}>
                                    <SoftSkills/>
                              </TabPanel>
                              <TabPanel value={4}>
                                    <LingustikSkills/>
                              </TabPanel>
                        </Tabs>

                  </div>
            </>
      )

}